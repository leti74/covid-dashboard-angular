import { Component, OnInit, Input } from '@angular/core';

declare var Chart: any; 

@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
  styleUrls: ['./chart.css']
})
export class ChartComponent implements OnInit {
  @Input() top5States: any[] = [];

  ngOnInit() {
    const ctx = document.getElementById('topStatesChart') as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar', // tipo grafico
      data: {
        labels: this.top5States.map(s => s.state),
        datasets: [{
          label: 'Casi Positivi',
          data: this.top5States.map(s => s.positive),
          backgroundColor: '#3b82f6'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}