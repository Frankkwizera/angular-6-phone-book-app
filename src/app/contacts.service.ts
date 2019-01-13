import { Injectable } from '@angular/core';

interface IContact {
  name:string;
  number:string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getContacts (){
    let contacts: IContact [] =[{
      name:'frank',
      number: '0788223344'
    },
    {
      name: 'andrew',
      number:'0788995544'
    },
    {
      name:'fred',
      number:'088998877'
    },
    {
      name:'Jane',
      number:'088998877'
    }
  ];

  return contacts
  }
}
