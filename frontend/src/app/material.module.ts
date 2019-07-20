import { NgModule } from '@angular/core';

// Import the NgModule for each component you want to use:
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatOptionModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTooltipModule,
} from '@angular/material';

const material = [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatOptionModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTooltipModule,
];

@NgModule({
    declarations: [
    ],
    imports: material,
    exports: material,
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
