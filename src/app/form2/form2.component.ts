import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  fname = 'Shweta';
  lname = 'Upadhye'
  email = 'shweta@gmail.com'
  password = '12334'
  contact = '7556662323'
  add1 = 'sangli'
  add2 = 'Pune'
  city = 'pune'
  state = 'maharastra'
  pin = '416312'

  constructor() { }

  ngOnInit(): void {
  }

}
