import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { Note } from 'src/app/models/note.model';
import { Reminder } from 'src/app/models/reminder.model';
import { ToDo } from 'src/app/models/to-do.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NoteService } from 'src/app/services/note.service';
import { ReminderService } from 'src/app/services/reminder.service';
import { TodoService } from 'src/app/services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { MatDialog } from '@angular/material/dialog';
import { EditToDoComponent } from '../edit-to-do/edit-to-do.component';
import { Router } from '@angular/router';
import { AddNewNoteComponent } from '../add-new-note/add-new-note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  todos: ToDo[] = [];
  notes: Note[] = [];
  bookmarks: Bookmark[] = [];
  reminders: Reminder[] = [];
  constructor(
    private todo:TodoService ,
    private note:NoteService,
    private bookmark:BookmarkService,
    private reminder:ReminderService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getTodos();
    this.getNotes();
    this.getBookmark();
    this.getReminders();
  }

  getTodos(){
    this.todo.getAll().subscribe( (response:any)=>{
      
      if(response.status==200){
        this.todos = response.data;
      }
    });
  }

  getNotes(){
    this.note.getAll().subscribe( (response:any)=>{
     
      if(response.status==200){
        this.notes = response.data;
      }
    });
  }

  getBookmark(){
    this.bookmark.getAll().subscribe( (response:any)=>{
     
      if(response.status==200){
        this.bookmarks = response.data;
      }
    });
  }
  getReminders(){
    this.reminder.getAll().subscribe( (response:any)=>{
     
      if(response.status==200){
        this.reminders = response.data;
      }
    });
  }

  //#region  todo

  addNewTodo(){
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '40%',

    });
    dialogRef.afterClosed().subscribe(data => {

      this.getTodos();

    })
  }
  editTodo(item:any){
   
   
    const dialogRef = this.dialog.open(EditToDoComponent, {
      width: '40%',
      data:item
    });
    dialogRef.afterClosed().subscribe(data => {

      this.getTodos();

    })
  }

  deleteTodo(id:number){
    this.todo.delete(id).subscribe((response:any)=>{
      if(response.status==200){
        this.getTodos();
      }
    })
  }
  //#endregion

//#region Note
addNewNote(){
  const dialogRef = this.dialog.open(AddNewNoteComponent, {
    width: '40%',

  });
  dialogRef.afterClosed().subscribe(data => {

    this.getNotes();

  })
}

editNote(item:any){
  const dialogRef = this.dialog.open(EditNoteComponent, {
    width: '40%',
    data: item
  });
  dialogRef.afterClosed().subscribe(data => {

    this.getNotes();

  })
}
deleteNote(id:number){
  this.note.delete(id).subscribe((response:any)=>{
    if(response.status==200){
      this.getNotes();
    }
  })
}
//#endregion

  SignOut(){
    localStorage.clear();
    this.router.navigate(['/signin'])
  }
}
