import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 3) : true;
    })
  }

  resetForm() {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  operating = false;
  dataSet = [];
  indeterminate = false;

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.operating = true;
    setTimeout(_ => {
      this.dataSet.forEach(value => value.checked = false);
      this.refreshStatus();
      this.operating = false;
    }, 1000);
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});

    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 3 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }


    for (let i = 0; i < 46; i++) {
      this.dataSet.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        checked: false
      });
    }
  }


  getUser() {
    this.userService.getUser("00001").subscribe(res => console.log(res));
  }
}
