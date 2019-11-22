import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModuleDataSenderService } from '@services/module-data-sender.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public requestValues: string;
  private dataSubscription: Subscription;

  constructor(private dataSenderService: ModuleDataSenderService) { }

  ngOnInit() {
    this.dataSubscription = this.dataSenderService.getValuesRx().subscribe(value => {
      if(value) {
        this.requestValues = value.val1 + " - " + value.val2 + " - " + value.val3;
      }
    });
  }

  ngOnDestroy(){
    this.dataSubscription.unsubscribe();
  }

}
