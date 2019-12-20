import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { HomeFilterService } from "./services/home-filter.service";
import { ModuleDataSenderService } from "@services/module-data-sender.service";
import { Router } from "@angular/router";
import { LoggerService } from "@services/logger.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMarket } from './models/market.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect, MatFormField, MatPlaceholder, MatLabel, MatIcon, MatDatepickerToggleIcon, MatFormFieldControl } from '@angular/material';
import { DateValidatorHelper, CompareResultEnum } from '@helpers/date-validator.helper';
import { GDPStorageService } from '@services/storage.service';
import { RedirectService } from '@services/redirect.service';
import { environment } from '@envs/environment';
import { SearchModel } from './models/search.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {

  public marketList: IMarket[];
  public searcherForm: FormGroup;
  private componentSubscriptions: Subscription;

  public myFilter = (datepickerDate: Date): boolean => {
    const currentDate = new Date();
    const validate = DateValidatorHelper.compareTwoDates(datepickerDate, currentDate)
    return validate === CompareResultEnum.EQUAL || validate === CompareResultEnum.GREATER;
  }

  constructor(private homeFilterService: HomeFilterService,
    private senderService: ModuleDataSenderService, private router: Router,
    private logger: LoggerService, private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private storage: GDPStorageService,
    private redirectService: RedirectService) { }

  ngOnInit() {
    this.marketList = [];
    this.initSelect();
    this.buildForms();
    this.homeFilterService.getAllMarkets();
    this.doSubscriptions();
  }

  get f(): FormGroup["controls"] { return this.searcherForm.controls; }

  public searchResults(): void {
    this.storage.setStorage(environment.search_key,
      new SearchModel(this.searcherForm.value['origen'],
        this.searcherForm.value['destino'],
        this.searcherForm.value['fechaSalida'],
        this.searcherForm.value['numeroPasajeros']));

    this.redirectService.redirectToSearchPage();
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
      origen: [1, Validators.required],
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
