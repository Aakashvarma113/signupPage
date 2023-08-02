import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddCountryStateComponent } from "../add-country-state/add-country-state.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  countryStateData: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }


  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;

    if (this.currentUser) {
      this.fetchCountryStateData();
    }
  }

  fetchCountryStateData(): void {
    // Fetch country and state data for the current user from the backend
    this.http.get<any[]>('http://localhost:3000/country-state').subscribe(
      (response) => {
        this.countryStateData = response;
      },
      (error) => {
        // Handle error
      }
    );
  }

  createCountryState(data: any): void {
    // Add the user ID to the country state data before sending the POST request
    data.userId = this.currentUser.id;

    this.http.post<any>('http://localhost:3000/country-state', data).subscribe(
      (response) => {
        // Handle the response, if needed
        this.fetchCountryStateData(); // Refresh the country state data after creating a new country state
      },
      (error) => {
        // Handle the error, if needed
      }
    );
  }


  openAddCountryStateDialog(): void {
    // Open the pop-up form to add new country and state
    const dialogRef = this.dialog.open(AddCountryStateComponent, {
      width: '400px',
    });

    // After the pop-up form is closed, refresh the country and state data
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.createCountryState(result);
      }
    });
  }
}
