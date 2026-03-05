import { Component, OnInit } from '@angular/core';
import { StatCard } from '../../Components/stat-card/stat-card';
import { StateList } from '../../Components/state-list/state-list';
import { CovidService } from '../../Services/covid-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ChartComponent } from '../../Components/chart/chart';

@Component({
  selector: 'app-home',
  imports: [StatCard, StateList, CommonModule, FormsModule, RouterModule, MatInputModule, ChartComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  usaData: any;
  states: any[] = [];
  filteredStates: any[] = [];
  top5States: any[] = [];

  loading = true;
  stateSearch = '';

  sortField: 'state' | 'positive' | 'death' | 'hospitalized' = 'state';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(public covid: CovidService) {}

  ngOnInit(): void {
    this.loading = true;

    // 🔹 Recupera sortField e sortDirection da localStorage
    const savedField = localStorage.getItem('homeSortField');
    const savedDirection = localStorage.getItem('homeSortDirection');

    if (savedField) this.sortField = savedField as any;
    if (savedDirection === 'asc' || savedDirection === 'desc') this.sortDirection = savedDirection as 'asc' | 'desc';

    // 🔹 Carica dati USA
    this.covid.getUSA().subscribe({
      next: res => { this.usaData = res[0]; },
      error: err => console.error('API error:', err)
    });

    // 🔹 Carica dati Stati
    this.covid.getStates().subscribe({
      next: res => {
        this.states = res;
        this.filteredStates = [...res];

        // 🔹 Top 5 Cases fissi
        this.top5States = [...res]
          .sort((a, b) => (b.positive ?? 0) - (a.positive ?? 0))
          .slice(0, 5);

        // 🔹 Applica ordinamento salvato
        this.sortStates();

        this.loading = false;
      },
      error: err => { console.error('API error:', err); this.loading = false; }
    });
  }

  filterStates() {
    const search = this.stateSearch.trim().toLowerCase();

    if (!search) {
      this.filteredStates = [...this.states];
    } else {
      this.filteredStates = this.states.filter(state =>
        state.state.toLowerCase().includes(search)
      );
    }

    this.sortStates();
  }

  sortStates() {
    // 🔹 Salva selezione su localStorage
    localStorage.setItem('homeSortField', this.sortField);
    localStorage.setItem('homeSortDirection', this.sortDirection);

    this.filteredStates.sort((a, b) => {
      let aVal = a[this.sortField] ?? 0;
      let bVal = b[this.sortField] ?? 0;

      // Ordinamento alfabetico
      if (this.sortField === 'state') {
        aVal = aVal.toString().toLowerCase();
        bVal = bVal.toString().toLowerCase();
        return this.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      // Ordinamento numerico
      return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortStates();
  }
}
