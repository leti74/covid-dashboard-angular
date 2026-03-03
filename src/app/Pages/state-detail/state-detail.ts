import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../Services/covid-services';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-state-detail',
  imports: [DecimalPipe, DatePipe, RouterModule],
  templateUrl: './state-detail.html',
  styleUrl: './state-detail.css',
})
export class StateDetail implements OnInit{
stateData: any;
loading= true

constructor(private route: ActivatedRoute,private covid: CovidService){}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.covid.getState(code).subscribe({
      next: res => { this.stateData = res; this.loading = false; },
      error: err => { console.error('API error:', err); this.loading = false; }
    });
  }
}
