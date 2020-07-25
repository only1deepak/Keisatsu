import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'app-public-appointment',
  templateUrl: './public-appointment.page.html',
  styleUrls: ['./public-appointment.page.scss'],
})
export class PublicAppointmentPage implements OnInit {

  get name(){
    return this.registrationForm.get('name');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get phone(){
    return this.registrationForm.get('phone');
  }

  get city(){
    return this.registrationForm.get('address.city');
  }
  
  get state(){
    return this.registrationForm.get('address.state');
  }

  get pin(){
    return this.registrationForm.get('address.pin');
  }
  public errorMessages = {
    name:[
      {type:'required', message:'Name is required'},
      {type:'maxlength', message:'Name cant be longer than 100 characters'}
    ],
    email:[
      {type:'required', message:'Email is required'},
      {type:'pattern', message:'Please enter a valid email address'}
    ],
    phone:[
      {type:'required', message:'Phone number is required'},
      {type:'pattern', message:'Please enter a valid phone number'}
    ],
    city:[
      {type:'required', message:'City name is required'},
      {type:'maxlength', message:'City name cant be longer than 100 characters'}
    ],
    state:[
      {type:'required', message:'State name is required'},
      {type:'maxlength', message:'State name cant be longer than 100 characters'}
    ],
    pin:[
      {type:'required', message:'Pin Code is required'},
      {type:'pattern', message:'Please enter a valid Pin Code'}
    ]

  };
  registrationForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    address: this.formbuilder.group({
      street: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.maxLength(100)]],
      zip: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
      ]
    })
  });

  constructor(private formbuilder: FormBuilder) {}

  public submit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
  }

}
