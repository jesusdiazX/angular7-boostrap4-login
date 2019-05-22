import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
   validateForm:FormGroup;
   Clicksubmitted=false;
 
  ngOnInit() {
    this.validateForm = this.formBuilder.group({   
      email: ['', [Validators.required,Validators.email]],
      inputPassword: ['', [Validators.required, Validators.minLength(6)]]

  });

}

get f() { return this.validateForm.controls; }

onSubmit(){
  this.Clicksubmitted=true;
  
        // stop here if form is invalid
        if (this.validateForm.invalid) {
              return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.validateForm.value))


}



}
