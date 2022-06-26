import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  editNote!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private note:NoteService,
  private toster:ToastrService,
  private dialogRef:MatDialogRef <EditNoteComponent>) {
    
   }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(){
    this.editNote = new FormGroup({
      id: new FormControl(this.data.id),
      title: new FormControl(this.data.title, [
        Validators.maxLength(500),
        
      ]),
      description: new FormControl(this.data.description, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
       
      ]),
  
     
    });
  }
  get f() { return this.editNote.controls; }
  EditNote(){
    if(this.editNote.valid){
      this.note.put(this.editNote.value).subscribe(
        (response:any)=>{
          if(response.status==200){
            this.toster.success("Success")
          }
          else{
            this.toster.error("Error");
          }
          this.dialogRef.close(true);
        }

      );
    }
  }
}
