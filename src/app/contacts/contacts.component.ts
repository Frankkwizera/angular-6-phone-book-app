import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts : any[];
  constructor(
    private contactsServices: ContactsService,
    public dialog: MatDialog){}
  ngOnInit() {
    this.contacts = this.contactsServices.getContacts() ;
  }
  add(){
    let dialogRef = this.dialog.open(AddContactDialog);

    dialogRef.afterClosed().subscribe(contact => {
      if(contact){
        this.contacts.push(contact);
      }
    });
  }
  delete(contact){
    this.contacts.splice(this.contacts.indexOf(contact),1);
  }

}


@Component({
  selector: 'add-contact-dialog',
  template:`
  <h1 mat-dialog-title> Add Contact</h1>
  <form class="example-form">
    <mat-form-field>
      <input matInput #contactName placeholder="Contact Name">
    </mat-form-field>
    <mat-form-field>
      <input matInput #contactNumber placeholder="Contact Number" >
    </mat-form-field>
    <br>
    <button #saveButton mat-raised-button color="primary" 
     (click)="dialogRef.close({name:contactName.value,
                              number:contactNumber.value})">Save</button>

    <button mat-raised-button (click)="dialogRef.close()"> Close</button>
  </form>
  `
})

export class AddContactDialog{

  constructor(public dialogRef : MatDialogRef<AddContactDialog>){
  }
}