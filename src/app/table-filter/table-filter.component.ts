import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BaseService } from '../services/base.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CityDescriptionModal } from './cityDescription.modal';
export interface Place {
  branch: string;
  address: string;
  city: string;
}
@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit {
  cities: string[] = ['DELHI', 'MUMBAI', 'GURGAON', 'PUNE'];
  selected: string = 'DELHI';
  htmlContent;
  branchFilter = new FormControl('');
  addressFilter = new FormControl('');
  cityFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  columnsToDisplay = ['branch', 'address', 'city', 'ifsc', 'bank_name'];
  filterValues = {
    branch: '',
    address: '',
    city: '',
  };

  constructor(private baseService: BaseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCitiesInfo();
    this.branchFilter.valueChanges.subscribe((branch) => {
      this.filterValues.branch = branch;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.addressFilter.valueChanges.subscribe((address) => {
      this.filterValues.address = address;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.cityFilter.valueChanges.subscribe((city) => {
      this.filterValues.city = city;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return (
        data.branch.toLowerCase().indexOf(searchTerms.branch) !== -1 &&
        data.address.toString().toLowerCase().indexOf(searchTerms.address) !==
          -1 &&
        data.city.toLowerCase().indexOf(searchTerms.city) !== -1
      );
    };
    return filterFunction;
  }
  cityChange(event) {
    this.getCitiesInfo(event.value);
  }

  getCitiesInfo(city?) {
    this.baseService
      .getOne(this.baseService.baseUrl, this.selected ? this.selected : city)
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = this.createFilter();
      });
  }

  getDescriptionInModal(city) {
    this.htmlContent = city;
    const dialogRef = this.dialog.open(CityDescriptionModal, {
      width: '500px',
    });
    dialogRef.componentInstance.htmlContent = this.htmlContent;
  }
}
