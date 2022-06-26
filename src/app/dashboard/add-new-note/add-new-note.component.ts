import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css']
})
export class AddNewNoteComponent implements OnInit {
  addNewNote!:FormGroup
  constructor(private noteService:NoteService , private toster:ToastrService , private dialogRef:MatDialogRef <AddNewNoteComponent>) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(){
    this.addNewNote = new FormGroup({
    
      title: new FormControl("", [
        Validators.maxLength(500),
        
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
       
      ]),
    
    });
  }
  get f() { return this.addNewNote.controls; }
  AddNewNote(){
    let ads = this.addNewNote.valid;
    
    if(this.addNewNote.valid){
      this.noteService.post(this.addNewNote.value).subscribe(
        (response:any)=>{
          if(response.status==200){
            this.toster.success("Operation Success")
          }
          else{
            this.toster.error("Operation Failed")
          }

          this.dialogRef.close(true);
        }
      );
    }
  }
}
