import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AlertService {
  public options: any;
  public onClose: Subject<boolean> = new Subject<boolean>();
  public modelWindow: any;

  public sticky: any;
  public stickyAlert: boolean = false;
  public sticky_nric: any;
  public stickyAlert_nric: boolean = false;
  stickyAlertRetry: Subject<boolean> = new Subject<boolean>();
  stickyAlertRetry_nric: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.options = {
      title: null,
      text: null,
      alertType: null || 'confirm',
      icon: null,
      buttons: {
        cancel: {
          text: null || 'No',
          visible: true,
          className: 'btn-danger',
        },
        confirm: {
          text: null || 'Yes',
          visible: true,
          className: 'btn-primary'
        }
      },
    }
  }

  show(title?, msg?, type?) {
       return new Promise((resolve, reject) => {
      this.options = {
        title: title,
        text: msg,
        alertType: type || 'alert',
        icon: null,
        buttons: {
          cancel: {
            text: null || 'No',
            visible: true,
            className: 'btn-danger',
          },
          confirm: {
            text: null || 'Yes',
            visible: true,
            className: 'btn-primary'
          }
        }
      }
      this.modelWindow.show()

      //alerts subscribe return value
      this.onClose.subscribe(value => { //return valu of alert
        this.modelWindow.hide();
        //  document.body.classList.remove('modal-open');
        resolve(value)
      });

    });
  }

  stickyAlerShow(text?, className?) {
    this.stickyAlert = true;
    this.sticky = {
      class: className || 'alert-danger',
      text: text
    }

    setTimeout(() => {
      this.stickyAlert = false;

    }, 3000);

  }

  stickyAlerShow_nric(text?, className?) {
    this.stickyAlert_nric = true;
    this.sticky_nric= {
      class: className || 'alert-danger',
      text: text
    }

    setTimeout(() => {
      this.stickyAlert_nric = false;
    }, 3000);
  }

}
