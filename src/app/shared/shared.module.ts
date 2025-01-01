import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,//didn't work
  ],
  exports: [HeaderComponent,SpinnerComponent]
})
export class SharedModule { }
