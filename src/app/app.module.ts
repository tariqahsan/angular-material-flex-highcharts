import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
// import { ArticlesComponent } from './modules/articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material';
import { CustomMatPaginatorIntl } from './modules/dashboard/CustomMatPaginatorIntl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
