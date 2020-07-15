import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent, DialogContentExampleDialog } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { GenericTableComponent } from './shared/generic-table/generic-table.component';
import { ErrorComponent } from './shared/error/error.component';
import { SnackbarService } from './services/utility/snackbar-service';
import { CellFormatPipe } from './services/utility/cell-format-pipe'
import { DatePipe } from '@angular/common';
import { SpaceDisplayComponent } from './shared/space-display/space-display.component';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GenericTableComponent,
    ErrorComponent,
    DialogContentExampleDialog,
    CellFormatPipe,
    SpaceDisplayComponent,
    SpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    SnackbarService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }