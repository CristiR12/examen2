import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
onSubmit(_t22: NgForm) {
throw new Error('Method not implemented.');
}
  nombre: string = 'Cristina';
  usuario = {
    email: '',
    password: ''
  }
  constructor() { }
  ngOnInit() {
  }
}
