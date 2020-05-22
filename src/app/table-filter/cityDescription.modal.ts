import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div *ngIf="htmlContent">
      <mat-dialog-content>
        <div class="horizontalLine">
          <h2 style="color: black;">
            City Description
          </h2>
        </div>
        <table>
          <tr>
            <td><strong>IFSC Code</strong></td>
            <td>{{ htmlContent.ifsc }}</td>
          </tr>
          <tr>
            <td><strong>Bank Id</strong></td>
            <td>{{ htmlContent.bank_id }}</td>
          </tr>
          <tr>
            <td><strong>Branch</strong></td>
            <td>{{ htmlContent.branch }}</td>
          </tr>
          <tr>
            <td><strong>Address</strong></td>
            <td>{{ htmlContent.address }}</td>
          </tr>
          <tr>
            <td><strong>City</strong></td>
            <td>{{ htmlContent.city }}</td>
          </tr>
          <tr>
            <td><strong>District</strong></td>
            <td>{{ htmlContent.district }}</td>
          </tr>
          <tr>
            <td><strong>Bank Name</strong></td>
            <td>{{ htmlContent.bank_name }}</td>
          </tr>
        </table>
      </mat-dialog-content>
    </div>
    <mat-dialog-actions style="float:right;">
      <button mat-button matDialogClose color="primary">Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      table td {
        width: 10%;
        vertical-align: inherit;
      }
    `,
  ],
})
export class CityDescriptionModal implements OnInit {
  htmlContent;

  constructor() {}
  ngOnInit() {}
}
