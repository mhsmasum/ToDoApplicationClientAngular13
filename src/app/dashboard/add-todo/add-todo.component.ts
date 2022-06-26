import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  addNewToDo!:FormGroup;
  constructor(private dialogRef:MatDialogRef <AddTodoComponent>,
    private toDo:TodoService,
    private toster:ToastrService
    ) { 
    this.resetForm();
  }

  ngOnInit(): void {
  }
  resetForm(){
    this.addNewToDo = new FormGroup({
    
      title: new FormControl("", [
        Validators.maxLength(500),
        
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
       
      ]),
      dueDate: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
       
      ]),
    });
  }


  AddNewToDo(){
    let data = this.addNewToDo.value;
    this.toDo.post(data).subscribe(
      (response:any)=>{
       if(response.status=200){
        this.toster.success("Operation Success")
        this.dialogRef.close(true);
       }
       else{
        this.toster.error("Operation Failed")
        this.dialogRef.close(true);
       }
      }
    );
  }
}
