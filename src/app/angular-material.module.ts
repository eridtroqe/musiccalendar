import { NgModule } from '@angular/core';
import {
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    exports: [
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatDialogModule,
        DragDropModule
    ]
})
export class AngularMaterialModule { }
