import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryCreatComponent } from './inventory-creat/inventory-creat.component';
import { InventoryCreatFoodComponent } from './inventory-creat-food/inventory-creat-food.component';
import { InventoryCreatPrintComponent } from './inventory-creat-print/inventory-creat-print.component';
import { GenderComponent } from './VisitorManagement/gender/gender.component';
import { MaritalStatusComponent } from './VisitorManagement/marital-status/marital-status.component';
import { NationalityComponent } from './VisitorManagement/nationality/nationality.component';
import { IncomeLevelComponent } from './VisitorManagement/income-level/income-level.component';
import { TrainingCategoryComponent } from './TrainingManagement/training-category/training-category.component';
import { VisitorInventoryComponent } from './VisitorManagement/visitor-inventory/visitor-inventory.component';
import { TrainingInventoryComponent } from './TrainingManagement/training-inventory/training-inventory.component';
import { IncomeManagementComponent } from '../income-management/income-management/income-management.component';
import { OccupationComponent } from './VisitorManagement/occupation/occupation.component';
import { ExpenseInventoryComponent } from './ExpenseManagement/expense-inventory/expense-inventory.component';
import { ExpenseCreateUpdateComponent } from './ExpenseManagement/expense-create-update/expense-create-update.component';
import { PurchaseComponent } from './ExpenseManagement/purchase/purchase.component';
import { TrainingTargetComponent } from './TrainingManagement/training-target/training-target.component';
import { LeaveInventoryComponent } from './LeaveManagement/leave-inventory/leave-inventory.component';
import { LeaveCreateUpdateComponent } from './LeaveManagement/leave-create-update/leave-create-update.component';
// import { LoaderModule } from '../loader/loader.module';


const routes: Routes = [
  { path: '', component: InventoryManagementComponent },
  { path: 'creat', component: InventoryCreatComponent },
  { path: 'creatFood', component: InventoryCreatFoodComponent },
  { path: 'creatPrint', component: InventoryCreatPrintComponent },
  { path: 'incomeCreate', component: IncomeLevelComponent },
  { path: 'maritalCreate', component: MaritalStatusComponent },
  { path: 'nationCreate', component: NationalityComponent },
  { path: 'genderCreate', component: GenderComponent },
  { path: 'createCategory', component: GenderComponent },
  { path: 'createTraining', component: TrainingCategoryComponent },
  { path: 'createOccupation', component: OccupationComponent },
  { path: 'createExpense', component: ExpenseCreateUpdateComponent },
  { path: 'createPurchase', component: PurchaseComponent },
  { path: 'createTarget', component: TrainingTargetComponent },
  { path: 'createLeave', component: LeaveCreateUpdateComponent }
];

@NgModule({
  declarations: [InventoryManagementComponent, InventoryCreatComponent, InventoryCreatFoodComponent,
    InventoryCreatPrintComponent, GenderComponent, MaritalStatusComponent, NationalityComponent,
    IncomeLevelComponent, TrainingCategoryComponent, VisitorInventoryComponent, TrainingInventoryComponent, OccupationComponent, ExpenseInventoryComponent, ExpenseCreateUpdateComponent, PurchaseComponent, TrainingTargetComponent, LeaveInventoryComponent, LeaveCreateUpdateComponent],
  imports: [
    SharedModule,
    // LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class InventoryManagementModule { }
