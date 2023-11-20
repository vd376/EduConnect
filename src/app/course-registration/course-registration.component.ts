import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.scss'
})
export class CourseRegistrationComponent {
  selectedSemester: string;
   isNewBrunswick: boolean = false;
   isNewark: boolean = false;
   isUndergraduate: boolean = false;
   isGraduate: boolean = false;
 
   onSubmit(formValues: any) {
     console.log('Form Submission:', formValues);
     // You will get all form values here as an object
   }
}
