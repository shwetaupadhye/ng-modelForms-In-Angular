import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  fname = 'shweta';
  lname = 'Upadhye'
  email = 'shweta@gmail.com'
  contact = '7756903852'
  address = 'sangli'
  dateofbirth = '24/01/1996'
  qualification = 'MCA'
  clgname = 'Shivaji Universityt, Kolhapur'
  location = 'pune'

  constructor() { }

  ngOnInit(): void {
  }

}
