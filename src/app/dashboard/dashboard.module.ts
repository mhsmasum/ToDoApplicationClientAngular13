import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';
import { AddNewNoteComponent } from './add-new-note/add-new-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    AddTodoComponent,
    EditToDoComponent,
    AddNewNoteComponent,
    EditNoteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
