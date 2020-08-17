import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {}


  public contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
  })
  
  ngOnInit() {

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  onSubmit(){
    let contactMessage = {
      nombre: this.contactForm.value.nombre,
      email: this.contactForm.value.email,
      asunto: this.contactForm.value.asunto,
      mensaje: this.contactForm.value.mensaje
    }


    console.log(contactMessage);
    this.contactForm.patchValue({
      nombre: '', 
      email: '',
      asunto: '',
      mensaje: ''

    })

  }

}
