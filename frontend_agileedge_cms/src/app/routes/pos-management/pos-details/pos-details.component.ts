import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { SharedModule } from '../../../shared/shared.module';
import { Profile } from 'src/app/core/objects/loginObject';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-pos-details',
  templateUrl: './pos-details.component.html',
  styleUrls: ['./pos-details.component.scss']
})
export class PosDetailsComponent implements OnInit {
  loader: any; public employeeData: Profile = new Profile();
  public selectedPC: any;
  // amount = 0
  amount: any;
  posList: any;
  itemid: any;
  foodList: any;
  printList: any; foodName: any; serviceName: any;
  serviceCharge: number = 0;
  EmpList: any;
  cafePrice: number = 0;
  foodPrice: number = 0;
  gstPrice: number = 0;
  serPrice: number = 0;
  // public totalAmount: number = 0;
  public totalAmount: any;
  BillList: any;
  duration: any;
  location: any;
  locationid: any;
  foodnameDetail: any = [];
  serviceDetail: any = [];
  @ViewChild('posDetailModal') posDetailModal: ModalDirective;
  @Output() hide = new EventEmitter();
  @Output() disable = new EventEmitter();
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService, private alert: AlertService
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
      this.getAllInventory();
      this.getAllInventoryPrint();
      this.getAllPos();
      this.getAllEmployee();
      this.getLocation()
    });
  }


  getLocation() {

    console.log("This Hits")
    this.location = localStorage.getItem('userId');
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.USER;
    this.request.params = this.location;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.locationid = data.branchAllocation;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getAllEmployee() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      console.log(data, "empolyee")
      this.EmpList = data;
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  statuschange() {
    // let obj2 = { /**not req as on discussion */
    //   // inventoryType: "System",
    //   status: 1,
    // }
    // this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    // this.request.type = AppConstants.API_POST;
    // // this.request.reqModule = ApiUrlConstants.INVENTORY;
    // this.request.reqModule = "/inventorySystemstatusUpdate/"
    // this.request.body = obj2;
    // this.request.params = this.selectedPC;
    // console.log(this.request.params, 'end')
    // this.api.requestObject(this.request).then(data => {
    //   // this.getAllPos();
    //   console.log(data, 'pc-status')
    // }, (err) => {
    //   // this.errLogin = err.error;
    // });
    let posObj = {
      // status: 2,
      status: 1,
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    // this.request.reqModule = ApiUrlConstants.POS; 
    this.request.reqModule = "/posendsession/";
    this.request.body = posObj;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      // this.getAllPos();
    }, (err) => {
      // this.errLogin = err.error;
    });
  }
  getAllPos() {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.params = this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.posList = data;
      console.log(this.posList, "..this.posList")
      if (this.posList.serviceDetails) {
        const price = this.posList.serviceDetails.map(el => {
          return el.amount
        })
        if (price && price.length > 0) {
          this.amount = price.reduce((a, b) => a + b)
        }
      }
      this.selectedPC = data.pcNo;
      this.duration = data.duration;
      this.foodName = this.posList.foodDetails;
      this.serviceName = this.posList.serviceDetails;
      this.gstPrice = this.posList.gtsValue / 100;
      // this.gstPrice = this.posList.gtsValue;
      this.serPrice = this.posList.servicevalue;
      // this.cafePrice = this.posList.browsePerhours * this.modifyDuration(this.duration);
      this.cafePrice = this.posList.fee
      this.statuschange();
      if (this.foodName != undefined || this.foodName != null)
        this.foodName.map(x => {
          this.foodnameDetail.push(' ' + x['foodbeverage']['name']);
          this.foodPrice += x.amount;
        })

      if (this.serviceName != undefined || this.serviceName != null)
        this.serviceName.map(x => {
          this.serviceCharge += parseFloat(x.amount);
        })
      this.loader = false;
      this.amount = parseFloat(this.amount);

      console.log(this.cafePrice);
      console.log(this.foodPrice);
      console.log(this.gstPrice);
      console.log(this.serPrice);
      console.log(this.serviceCharge);
      console.log(this.amount);


      this.totalAmount = this.cafePrice + this.foodPrice + this.serviceCharge + this.gstPrice + this.serPrice;
      this.totalAmount = parseFloat(this.totalAmount);

      console.log(this.totalAmount);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  // modifyDuration(value) {
  //   let timeData = value.split(":").map(x => parseInt(x));
  //   return timeData[0] * 60 + timeData[1];
  // }
  ngAfterViewInit() {
    this.posDetailModal.show();
  }
  showChildModal() {
    this.posDetailModal.show();
  }

  hideModalWindow() {
    this.posDetailModal.hide();
    this.hide.emit('');
    //this.generateBill()
  }
  getAllInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "Food"
    // this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      this.foodList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getAllInventoryPrint() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "Print"
    // this.request.params=""
    // this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      this.printList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  // generateBill() { /**not req as on discussion */
  //   console.log(this.locationid, "thisHITS")
  //   let obj = {
  //     foodUsage: this.foodPrice,
  //     printUsage: 5,
  //     browesUsage: this.cafePrice,
  //     gst: this.gstPrice,
  //     serviceCharge: this.serPrice,
  //     totalAmount: this.totalAmount,
  //     locationId: this.locationid
  //   }
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.BILL_CREATE;
  //   this.request.params = ''
  //   this.request.body = obj;
  //   this.api.requestObject(this.request).then(data => {
  //     this.BillList = data;
  //   }, (err) => {

  //   });
  // }

  print() {
    const printContent = document.getElementById("printArea");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    // WindowPrt.close();
  }

}
