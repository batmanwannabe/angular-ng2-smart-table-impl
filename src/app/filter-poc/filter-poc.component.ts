import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-filter-poc',
  templateUrl: './filter-poc.component.html',
  styleUrls: ['./filter-poc.component.css']
})
export class FilterPocComponent implements OnInit {

  source: LocalDataSource; 
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sbbb"
    },
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Sbbb"
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  constructor() {
    this.source = new LocalDataSource(this.data); // create the source
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {
   this.source = new LocalDataSource(this.data.filter((obj)=>{
   if(obj.id.toString().indexOf(query)>-1 || obj.name.indexOf(query)>-1 || 
    obj.username.indexOf(query)>-1 ||obj.email.indexOf(query)>-1 ) return true;
   else false;
  }))
 }
}