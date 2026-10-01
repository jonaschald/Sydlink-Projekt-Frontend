import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../app/HttpService/http-service';

@Component({
  imports: [RouterLink],
  selector: 'app-medarbejder',
  styleUrl: './medarbejder.css',
  templateUrl: './medarbejder.html',
})
export class Medarbejder {

  private httpService = inject(HttpService);

  supportsager: any[] = [];

  searchText = '';

  showAll = false;

  get filteredCases(): any[] {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      return this.supportsager;
    }

    return this.supportsager.filter((sag) =>
      String(sag.caseNumber ?? '').toLowerCase().includes(search) ||
      String(sag.title ?? '').toLowerCase().includes(search) ||
      String(sag.category ?? '').toLowerCase().includes(search) ||
      String(sag.status ?? '').toLowerCase().includes(search)
    );
  }

  get newCases(): any[] {
    return this.filteredCases.filter(
      (sag) => sag.status === 'Ny'
    );
  }

  showAllCases(): void {
    this.showAll = true;
    this.loadSupportCases();
  }

  loadSupportCases(): void {
    this.httpService.getSupportCases().subscribe({
      next: (data: any) => {
        this.supportsager = data;
      },
      error: (error: any) => {
        console.error('Fejl ved hentning af supportsager:', error);
      },
    });
  }
}
