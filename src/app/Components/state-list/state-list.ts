import { Component, input } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-state-list',
  imports: [DecimalPipe, DatePipe, RouterModule],
  templateUrl: './state-list.html',
  styleUrl: './state-list.css',
})
export class StateList {
states= input<any[]>([])
}
