import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-country-state',
  templateUrl: './add-country-state.component.html',
})
export class AddCountryStateComponent {
  country: any;
  state: any;

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<AddCountryStateComponent>) {}

  onSubmit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const data = {
        id: JSON.parse(currentUser).id,
        country: this.country,
        state: this.state,
      };

      this.http.post('http://localhost:3000/country-state', data).subscribe(
        (response) => {
          // Data added successfully
          this.dialogRef.close('success');
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
