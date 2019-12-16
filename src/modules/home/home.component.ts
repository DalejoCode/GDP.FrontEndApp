import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { HomeFilterService } from "./services/home-filter.service";
import { ModuleDataSenderService } from "@services/module-data-sender.service";
import { Router } from "@angular/router";
import { LoggerService } from "@services/logger.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMarket } from './models/market.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {

  public marketList: IMarket[];
  public searcherForm: FormGroup;
  private componentSubscriptions: Subscription;

  constructor(private homeFilterService: HomeFilterService,
    private senderService: ModuleDataSenderService, private router: Router,
    private logger: LoggerService, private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.marketList = [];
    this.initSelect();
    this.buildForms();
    this.doSubscriptions();
    this.homeFilterService.getAllMarkets();
  }

  get f(): FormGroup["controls"] { return this.searcherForm.controls; }

  public searchResults(): void {
    this.logger.info('Data', this.searcherForm.value)
  }

  ngOnDestroy() {
    this.componentSubscriptions.unsubscribe();
  }

  private doSubscriptions(): void {
    this.componentSubscriptions = new Subscription();
    this.componentSubscriptions.add(this.homeFilterService.getMarketsRx().subscribe(marketResponse => {
      this.marketList = [];
      if(marketResponse && marketResponse.success) {
        this.marketList = marketResponse.markets;
      } else if(marketResponse && !marketResponse.success) {
        this.marketList = marketResponse.markets;
        this._snackBar.open("Upps!!, A ocurrido un error al intentar obtener los destinos", 'Aceptar', {
          duration: 2000,
        });
      }
    }));
  }

  private buildForms(): void {
    this.searcherForm = this.formBuilder.group({
      origen: ['1', Validators.required],
      destino: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      numeroPasajeros: ['', [Validators.required, Validators.min(1), Validators.max(7)]]
    });
  }

  private initSelect() {
    $(document).ready(function() {
      $("select").material_select();
      $(".slider").slider();
      $(".datepicker").pickadate();
    });
  }
}
