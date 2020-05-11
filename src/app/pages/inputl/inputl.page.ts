import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputl',
  templateUrl: './inputl.page.html',
  styleUrls: ['./inputl.page.scss'],
})
export class InputlPage implements OnInit {
  nombre: string;
  usuario = {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.usuario);
  }

}
