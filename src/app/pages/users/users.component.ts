import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor() {
    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
        this.gridOptions.enableSorting = true;
      }
    };
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];
    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  }

  ngOnInit() {
  }

}
