import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-assign-pc',
  templateUrl: './assign-pc.component.html',
  styleUrls: ['./assign-pc.component.scss']
})
export class AssignPcComponent implements OnInit, AfterViewInit {
  public selectedPC: any;
  staffServiceList = []
  AssignPc = true
  gstvalue
  servicevalue
  toggle: any;
  // toggleService: any;
  @Input() editOption: boolean = false
  foodList: any = [];
  printList: any = [];
  totalAmount = 0
  serviceData
  xeroxOptionArr = [
    {
      id: 0,
      qty: ''
    }
  ];
  xeroxOptionStaffServiceArr = [
    {
      id: 0,
      qty: ''
    }
  ]
  toggle1: any;
  userId: any;
  selectedBox: any;
  hideStaffService: boolean = false
  Food: any = "";
  Print: any = "";
  toppings = new FormControl();
  public addOption: any = this.toppings.value;
  posList: any;
  foodOption: any = false;
  xeroxOption: any = false;
  formControl: any;
  formData: any;
  posForm: any;
  staffServiceForm: any;
  CourseList: any;
  show: boolean = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  selectedType = 'AssignPC';
  itemid: any;
  Foodname: any;
  systemList: any;
  location: any;
  editSelectedPc: any;
  otherSType;
  public editAlive: boolean = false;
  public locationid: any;
  public data: any;
  public assignTo: any;
  showError: boolean = false;
  @ViewChild('assignPcModel') assignPcModel: ModalDirective;
  @ViewChild('staffService') staffService: ModalDirective;
  @Output() hide = new EventEmitter();
  @ViewChild('encasUnPwModal') public modal: ModalDirective;
  public foodData = [];
  public trasactionId = "";
  public autodata = [];
  public hoursList = [];
  public minutesList = [];
  public prevTransactionId = "";
  public prevUserId = "";
  public systemName = ""
  serviceList = [];
  isPCselected = false;

  toppingList: string[] = ['Food', 'Xerox', 'Browsing', 'Course'];
  constructor(private router: Router,
    public alerts: AlertService,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    public appService: AppService) {
    this.setHoursList();
    this.setMinuteslist();
  }

  ngOnInit() {
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getAllInventory();
    this.getCourseDetails();
    this.getSystemInventory();
    this.getAllPos();
    this.getLocation();
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getPrevious();
    this.getTransactionId();


    this.posForm = new FormGroup({
      assignTo: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required, Validators.pattern("\\d{6}\\-\\d{2}\\-\\d{4}")]),
      purpose: new FormControl('', [Validators.required]),
      // qty:
      foodOption: new FormControl(''),
      xeroxOption: new FormArray([]),
      otherSType: new FormControl(''),
      xeroxOptionArr: new FormArray([
        new FormControl(
          {
            id: 0,
            qty: ''
          })
      ]),

      training: new FormControl(''),
      hours: new FormControl('', [Validators.required]),
      minutes: new FormControl('', [Validators.required])
      // foodType: new FormControl('', [Validators.required]),
      // foodOption: new FormControl('', [Validators.required]),
      // toppings:new FormControl(''),
    });

    this.staffServiceForm = new FormGroup({
      transactionId: new FormControl('', [Validators.required]),
      assignTo: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
      xeroxOption: new FormArray([]),
      otherSType: new FormControl(''),
      xeroxOptionArr: new FormArray([
        new FormControl(
          {
            id: 0,
            qty: ''
          })
      ]),
      location: new FormControl('', [Validators.required])
    });
  }

  setHoursList() {
    let result = [];
    for (let i = 0; i < 24; i++) {
      let val = i.toString().length == 1 ? '0' + i : i.toString();
      result.push({ id: val, value: val });
    }
    this.hoursList = result;
  }

  setMinuteslist() {
    let result = [];
    for (let i = 0; i < 60; i++) {
      let val = i.toString().length == 1 ? '0' + i : i.toString();
      result.push({ id: val, value: val });
    }
    this.minutesList = result;
  }

  getTransactionId() {
    if (this.itemid == undefined) {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_GET;
      this.request.reqModule = ApiUrlConstants.MEMBER_CODE;
      this.request.body = {};
      if (this.selectedType == 'StaffService') {
        this.request.params = "4"; //staff service
      }
      else {
        this.request.params = "3"; //Assign pc
      }


      this.api.requestObject(this.request).then(data => {
        this.trasactionId = data[0]['prefix'] + data[0]['count'];
      }, (err) => {
        console.error(err);
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
  }

  subscribeDetails() {
    this.appService.foodArray.subscribe(data => {
      this.foodData = data;
      this.foodList = this.foodData.map(el => {
        return { item_id: el.id, item_text: el.name }
      })
      console.log(this.foodList, "... this.foodList")
    })
  }

  onItemSelect(item: any) {
    //  this.posForm.patchValue({ foodOption: item.id });
    // const Foodname = item.name;
    // this.Foodname.push(this.Food);
    // this.addPOS(data);
  }

  getPrevious() {
    if (this.itemid) {
      setTimeout(() => {
        this.editPos();
        this.subscribeDetails();
      }, 1000);
    }
  }

  onSelectAll(items: any) {
  }

  getvalue(e) {
    if (e == 'Training') {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  onPing() {
    this.toggle = !this.toggle;
    this.getAllInventory()
    this.getAllPos();
  }

  autoFill(obj, type) {
    console.log(obj, type, "...")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = "/posAssignPcByNric/"
    this.request.params = obj.userId;
    this.request.body = "";
    this.api.requestObject(this.request).then(response => {
      this.autodata = response;
      if (response) {
        localStorage.setItem('cuurent_userId', response.assignTo);
        if (response.nrciNo) {
          if (type == 'posForm') {
            console.log(obj, type, "...")
            this.posForm.patchValue({
              assignTo: response.name,
              userId: response.nrciNo
            })
          }
          if (type == 'staffServiceForm') {
            console.log(obj, type, "...")
            this.staffServiceForm.patchValue({
              assignTo: response.name,
              userId: response.nrciNo
            })
          }

          this.userId = response.userId;
        }
        this.assignTo = response.name;
        if (this.autodata['membershipFlag'] == 2) {
          this.alerts.stickyAlerShow_nric('Membership is expired', 'alert-danger');
        }
        else if (this.autodata['membershipFlag'] == 3) {
          this.alerts.stickyAlerShow_nric('No User Found', 'alert-danger');
        }
        else if (this.autodata['membershipFlag'] == 4) {
          this.alerts.stickyAlerShow_nric(this.autodata['message'], 'alert-danger');
        }
        localStorage.setItem('assign', this.assignTo);
      } else {
        this.assignTo = '';
        this.alerts.stickyAlerShow_nric('No User Found', 'alert-danger');
      }
    }, (err) => {
      console.error(err);
    });
  }
  getAllPos() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.params = "";
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.posList = data;
    }, (err) => {
    });
  }
  onService() {
    this.toggle1 = !this.toggle1;
    this.getAllInventoryPrint();
    if (!this.toggle1) {

      this.xeroxOptionStaffServiceArr = [
        {
          id: 0,
          qty: ''
        }
      ]
    }

  }

  // checkandgetFood(foodData) {
  //   // if (foodData.length > 1) return foodData.map(x => x.id);
  //   if (foodData.length > 1) return foodData.map(x => x.item_id);
  //   // return foodData[0]['id']
  //   return foodData[0]['id']
  // }

  addPOS(data) {
  
    if (!this.isPCselected) {
      this.alerts.stickyAlerShow_nric('Select PC', 'alert-danger');
      return;
    }

    data['xeroxOption'] = this.xeroxOptionArr
    delete data['xeroxOptionArr']
    // if (this.selectedPC != '' && this.selectedPC != undefined) {
    let obj = {
      transactionId: this.trasactionId,
      pcNo: this.selectedPC,
      createdBy: parseInt(localStorage.getItem('userId')),
      // assignTo: this.autodata['id'],
      // userId: this.autodata['id'],
      assignTo: this.userId,
      userId: this.userId,
      hours: data.hours,
      minutes: data.minutes,
      // foodOption: data.foodOption ? this.checkandgetFood(data.foodOption) : '',
      xeroxOption: data.xeroxOption ? data.xeroxOption : '',
      location: this.locationid,
      purpose: data.purpose,
      training: parseInt(data.training)
    }
    if (data.foodOption) {
      obj['foodOption'] = data.foodOption.map(x => {
        return x.item_id
      })
    }
    // if (data.training == "") obj.training = null
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.body = obj;
    this.request.params = "";
    console.log(this.posForm.value)
    if (this.request.body) {
      this.api.requestObject(this.request).then(data => {
        this.getAllPos();
        this.alerts.stickyAlerShow('Created Successful', 'alert-success');
        this.router.navigate(['/posManagement']);
        this.hideModalWindow();
      }, (err) => {
        // this.errLogin = err.error;
      });
    }
    let obj2 = {
      inventoryType: "System",
      status: 2,
    }
    // const inventoryType = "System";
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.body = obj2;
    this.request.params = this.selectedPC;
    this.api.requestObject(this.request).then(data => {
      // this.getAllPos();
      this.hideModalWindow();
    }, (err) => {
      // this.errLogin = err.error;
    });
    // } else this.showError = true;
  }
  staffServiceFormAdd(data) {
    data['xeroxOption'] = this.xeroxOptionStaffServiceArr
    delete data['xeroxOptionArr'];
    data['location'] = this.location
    data['transactionId'] = this.trasactionId;
    data['userId'] = this.userId;
    data['createdBy'] = parseInt(localStorage.getItem('userId')),
      delete data['assignTo'];
    delete data['otherSType'];

    console.log(data, ".....")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.POS_Staff_Service;
    this.request.body = data;
    this.request.params = "";
    console.log(this.posForm.value)
    this.api.requestObject(this.request).then(data => {
      console.log(data, "...data")
      if (data.status && data.status == "SUCCESS") {
        const recordId = data.recordId;
        this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
        this.request.type = AppConstants.API_GET;
        this.request.reqModule = ApiUrlConstants.POS_Staff_Service;
        this.request.params = recordId;
        this.api.requestObject(this.request).then(data => {
          console.log(data, "....data............................")
          this.serviceData = data.userDetails;
          this.staffServiceList = data.serviceDetails
          this.gstvalue = data.gstvalue
          this.servicevalue = +data.servicevalue
          this.totalAmount = data.serviceDetails.map(el => {
            return +el.price
          }).reduce((a, b) => a + b)
          this.totalAmount = this.totalAmount + this.gstvalue + this.servicevalue

          this.AssignPc = false
        })
      }
      this.selectedType = 'AssignPC';
      this.alerts.stickyAlerShow('Created Successful', 'alert-success');
      // this.router.navigate(['/posManagement']);
      // this.assignPcModel.hide();
      //  this.staffService.show();
    }, (err) => {
      // this.errLogin = err.error;
    });
  }
  getLocation() {
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
  optionType = 1
  editPos() {
    this.xeroxOptionArr = []
    this.hideStaffService = true
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.params = this.itemid
    this.request.body = "";
    if (this.request.params) {
      this.api.requestObject(this.request).then(data => {
        console.log(data, "...dat111111")
        this.assignTo = data.assignTo.memeberCode;
        this.prevTransactionId = data.transactionId;
        this.prevUserId = data.assignTo.id;
        if (data) {
          // this.toggle = true;
          this.getAllInventory();
          this.getAllInventoryPrint()
        }
        if (data.purpose == "Training") this.show = true;
        if (data.xeroxOption) this.toggle1 = true;
        this.editAlive = true;
        this.systemName = data.activePcName
        this.editSelectedPc = data.pcNo;
        console.log(data, "....data")
        if (data.serviceDetails.length > 0) {
          this.toggle1 = !this.toggle1
          data.serviceDetails.forEach(element => {
            this.xeroxOptionArr.push({
              id: element.service.printOutType.id,
              qty: String(element.node)
            })
          })
        }
        else {
          this.xeroxOptionArr = [
            {
              id: 0,
              qty: ''
            }
          ];
        }
        let formObj = {
          assignTo: data.assignTo.name,
          userId: data.assignTo.nrciNo,
          purpose: data.purpose,
          // duration: data.duration,
          hours: data.hours,
          minutes: data.minutes,
          pcNo: data.pcNo,
          xeroxOption: data.xeroxOption && data.xeroxOption != null ? data.xeroxOption : '',
          training: data.training
        }
        if (data.foodDetails.length > 0) {
          this.toggle = true;
          // formObj['foodOption'] = this.setFoodOption(data.foodDetails)
          // console.log(formObj['foodOption'],"...formObj['foodOption']")
          formObj['foodOption'] = data.foodDetails.map(el => {
            return { item_id: el.foodbeverage.id, item_text: el.foodbeverage.name }
          })
          this.selectedItems = data.foodDetails.map(el => {
            return { item_id: el.foodbeverage.id, item_text: el.foodbeverage.name }
          })
          console.log(formObj['foodOption'], "...formObj['foodOption']")

          console.log(this.foodList, "...foodList")
        }

        setTimeout(() => {
          if (formObj && formObj.assignTo) {
            this.posForm.patchValue(formObj);
          }
          document.getElementById('fix').click();
        }, 100);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }

  }

  // setFoodOption(food) { /**set food dropdown values */
  //   console.log(food,"...food")
  //   if (food && Array.isArray(food)) {
  //     console.log(this.foodList,"//..")
  //     return this.foodList.filter(item => {
  //       return food.map(y => y.foodbeverage.id).indexOf(item['id']) > -1;
  //       // return food.map(y => y.foodbeverage.id == item['id']) 
  //     });
  //   } return this.foodData.filter(item => item['id'] == food.foodbeverage['id']);
  // }
  setFoodOption(food) { /**set food dropdown values */
    console.log(food, "...food")
    if (food && Array.isArray(food)) {
      this.foodList.filter(e => {
        food.map(el => {
          if (el.foodbeverage.id == e.id) {
            return e
          }
        })
      })
    } return this.foodData.filter(item => item['id'] == food.foodbeverage['id']);
  }

  UpdatePOS(data) {
    this.assignTo = localStorage.getItem("assign");
    if (this.selectedPC != '' || this.selectedPC != undefined) {
      let obj = {
        transactionId: this.prevTransactionId,
        pcNo: this.editSelectedPc,
        assignTo: this.prevUserId,
        userId: this.prevUserId,
        hours: data.hours,
        minutes: data.minutes,
        xeroxOption: data.xeroxOption,
        // Food: data.Food,
        // xeroxOption: data.print,
        location: this.locationid,
        purpose: data.purpose
      }
      if (data.foodOption != "") {
        // obj['foodOption'] = this.checkandgetFood(data.foodOption)
        obj['foodOption'] = data.foodOption.map(x => {
          return x.item_id
        })

      }
      if (this.xeroxOptionArr.length > 0) {
        obj['xeroxOption'] = this.xeroxOptionArr
      }

      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.POS;
      this.request.body = obj;
      this.request.params = this.itemid;
      if (this.request.params) {
        this.api.requestObject(this.request).then(data => {
          this.alerts.stickyAlerShow('Updated Successful', 'alert-success');
          this.hideModalWindow();
          this.router.navigate(['/posManagement']);
        }, (err) => {
          console.error(err);
        });
      }
    } else this.showError;
  }
  getAllInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    if (!this.toggle && !this.toggle1) {
      this.request.params = "Print"
    }
    else if (!!this.toggle) {
      this.request.params = "Food"
    }
    // this.request.params=""
    // this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      if (this.request.params == "Print") {
        this.posList = data;
      }
      else if (this.request.params = "Food") {
        this.foodList = data;
        this.foodList = this.foodList.map(el => {
          return { item_id: el.id, item_text: el.name }
        })
        console.log(this.foodList, "... this.foodList")
      }
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getSystemInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "System"
    this.api.requestObject(this.request).then(data => {
      this.systemList = data;
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
      this.posList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  onSystem(i, item) {
    this.selectedBox = i;
    this.selectedPC = item.id;
    this.isPCselected = true;
    console.log(this.isPCselected, 'isPCselected');
  }
  ngAfterViewInit() {
    this.assignPcModel.show();
  }
  showChildModal() {
    this.assignPcModel.show();
  }

  hideModalWindow() {
    // this.assignPcModel.hide();
    this.hide.emit('');
  }
  getCourseDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = "";
    this.request.body = "";
    this.api.requestObject(this.request).then(result => {
      this.CourseList = result;
      console.log(this.CourseList, "... this.CourseList")
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  changeStatus(type) {
    if (type == 'AssignPC') {
      this.selectedType = type
    }
    else if (type == 'StaffService') {
      // this.toggle1 = true
      this.selectedType = type
    }
  }
  addOtherService() {
    console.log(this.xeroxOption, ".....11")
    this.xeroxOptionArr.push({
      id: 0,
      qty: ''
    })

    this.posForm.controls
      .xeroxOptionArr.push(new FormControl({
        id: 0,
        qty: ''
      }));
    console.log(this.posForm.xeroxOptionArr, "...this.xeroxOptionArr")
  }
  addStaffService() {
    this.xeroxOptionStaffServiceArr.push({
      id: 0,
      qty: ''
    })

    this.staffServiceForm.controls
      .xeroxOptionArr.push(new FormControl({
        id: 0,
        qty: ''
      }));
  }
  chooseOptionOtherService(val, i) {
    console.log(val, ".....123")
    this.xeroxOptionArr[i].id = val
    console.log(this.xeroxOptionArr, ".....11")
    console.log(this.posForm.value, "...this.xeroxOptionArr")
  }
  chooseStaffServiceOtherService(val, i) {
    console.log(val, ".....123")
    this.xeroxOptionStaffServiceArr[i].id = val;
  }
  removeOtherService(i) {
    this.xeroxOptionArr.splice(i, 1)
    console.log(this.xeroxOptionArr, "...this.xeroxOptionArr")
    const control = <FormArray>this.posForm.controls['xeroxOptionArr'];
    control.removeAt(i);
    console.log(control.value, "...this.xeroxOptionArr")
    if (this.xeroxOptionArr.length == 0) {
      this.addOtherService()
    }
  }
  removeStaffService(i) {
    this.xeroxOptionStaffServiceArr.splice(i, 1)
    const control = <FormArray>this.staffServiceForm.controls['xeroxOptionArr'];
    control.removeAt(i);
    if (this.xeroxOptionStaffServiceArr.length == 0) {
      this.addStaffService()
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  valC(val, i) {
    this.xeroxOptionArr[i].qty = val

  }
  valStaffService(val, i) {
    this.xeroxOptionStaffServiceArr[i].qty = val

  }

  print() {
    const printContent = document.getElementById("printArea");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
  }

}
