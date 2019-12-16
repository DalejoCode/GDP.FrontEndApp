import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import { HomeFilterService } from './services/home-filter.service';
import { ModuleDataSenderService } from '@services/module-data-sender.service';
import { Router } from '@angular/router';
import { LoggerService } from '@services/logger.service';
import { MzSelectContainerComponent } from 'ngx-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public title = 'materialApp';
  public selectedValue1: string;
  public selectedValue2: string;
  public selectedValue3: string;

  public email: string;
  public password: string;

  public hasAccess: string;

  public arrMin = [1, 0, -1, 3];
  public foods: any[] = [
    { value: 'steak', display: 'Steak' },
    { value: 'pizza', display: 'Pizza' },
    { value: 'tacos', display: 'Tacos' }
  ];

  private userSubscription: Subscription;

  constructor(private homeFilterService: HomeFilterService,
    private senderService: ModuleDataSenderService, private router: Router,
    private logger: LoggerService, private M: MzSelectContainerComponent) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  ngAfterViewInit() {
      $('select').material_select();
      $('.slider').slider();
  }

  public sendDataToModules(): void {

  }

  public TryLogin(): void{
  }

}
