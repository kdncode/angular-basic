import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // Routing

const routesConfig: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'detail', component: ContactDetailComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent  }
]

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ContactComponent,
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesConfig) // Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
