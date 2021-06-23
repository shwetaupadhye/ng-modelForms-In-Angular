import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapform',
  templateUrl: './bootstrapform.component.html',
  styleUrls: ['./bootstrapform.component.css']
})
export class BootstrapformComponent implements OnInit {

  fname = 'shweta';
  lname = 'Upadhye'
  email = 'shweta@gmail.com'
  contact = '7756903852'
  address = 'sangli'
  dateofbirth = '24/01/1996'
  qualification = 'MCA'
  clgname = 'Shivaji Universityt, Kolhapur'
  location = 'pune'
  fees = '20000'

  constructor() { }


  ngOnInit(): void {
  }

}
