import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterPipe,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
