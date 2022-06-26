import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {
  addNewToDo!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , 
  private todo:TodoService,
  private toster:ToastrService,
  private dialogRef:MatDialogRef <EditToDoComponent>,
  ) {

    this.resetForm();
   }

  ngOnInit(): void {
  }
  
  resetForm(){
    this.addNewToDo = new FormGroup({
      id: new FormControl(this.data.id),
      title: new FormControl(this.data.title, [
        Validators.maxLength(500),
        
      ]),
      description: new FormControl(this.data.description, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
       
      ]),
      dueDate: new FormControl( formatDate(this.data.dueDate,'yyyy-MM-dd',"en-US"), [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
       
      ]),
      isComplete: new FormControl(this.data.isComplete)
    });
  }

  EditToDo(){
    let data = this.addNewToDo.value;
    this.todo.put(data).subscribe( (response:any)=>{
      if(response.status==200){
        this.toster.success("Operation Success")
        this.dialogRef.close(true);
      }
      else{
        this.toster.error("Operation Failed")
        this.dialogRef.close(true);
      }
    });
  }
}
