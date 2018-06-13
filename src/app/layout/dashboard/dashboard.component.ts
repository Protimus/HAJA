import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TemperaturaService } from '../../temperatura.service';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    chart = []; // This will hold our chart info

    constructor(private _temperatura: TemperaturaService) {}

    ngOnInit() {
        this._temperatura.dailyForecast()
          .subscribe(res => {
            let temp_max = res['list'].map(res => res.main.temp_max);
            let temp_min = res['list'].map(res => res.main.temp_min);
            let alldates = res['list'].map(res => res.dt)

            let weatherDates = []
            alldates.forEach((res) => {
                let jsdate = new Date(res * 1000)
                weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
            })

            this.chart = new Chart('canvas', {
              type: 'line',
              data: {
                labels: weatherDates,
                datasets: [
                  { 
                    data: temp_max,
                    borderColor: "red",
                    fill: false
                  },
                  { 
                    data: temp_min,
                    borderColor: "green",
                    fill: false
                  },
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    display: true
                  }],
                }
              }
            });

          })
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public startProof(){
        console.log("starting proof...");
    }

    public stopProof(){
        console.log("stoping proof...");
    }
}
