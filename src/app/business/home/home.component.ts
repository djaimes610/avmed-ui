import { Component, OnInit } from '@angular/core';
import { AttentionClientService } from 'src/app/shared/clients/attention/attention-client.service';
import { PattientClientService } from 'src/app/shared/clients/patient/pattient-client.service';
import { ReportClientService } from 'src/app/shared/clients/report/report-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalAttentions: Number = 0;
  totalPatients: Number = 0;

  constructor(
    private _attentionClientService: AttentionClientService,
    private _pattientClientService: PattientClientService,
  ) { 

   
    this._attentionClientService.getTotalAttentions().subscribe(total => {
      this.totalAttentions = total;
    });

    this._pattientClientService.getTotalPatients().subscribe(total => {
      this.totalPatients = total;
    });
  }

  ngOnInit(): void {
  }


}
