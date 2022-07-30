// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employee-management',
//   templateUrl: './employee-management.component.html',
//   styleUrls: ['./employee-management.component.scss']
// })
// export class EmployeeManagementComponent implements OnInit {

    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-roles',
        templateUrl: './roles.component.html',
        styleUrls: ['./roles.component.scss']
    })
    export class RolesComponent implements OnInit {
      p: number = 1;

      constructor() { }

      ngOnInit() {
      }

    }
