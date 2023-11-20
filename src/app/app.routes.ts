import { Routes } from '@angular/router';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { PantryComponent } from './pantry/pantry.component';
import { ProfessorReviewComponent } from './professor-review/professor-review.component';

export const routes: Routes = [
    {
        path: 'registration',
        component: CourseRegistrationComponent
    },
    {
        path: 'pantry',
        component: PantryComponent
    },
    {
        path: 'reviews',
        component: ProfessorReviewComponent
    }
];
