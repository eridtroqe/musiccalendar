import { NgModule } from '@angular/core';
import {
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ]
})
export class AngularMaterialModule { }
