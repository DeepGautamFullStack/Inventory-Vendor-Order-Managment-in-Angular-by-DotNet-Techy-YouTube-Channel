import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule,MenubarModule} from 'primeng/primeng';

import {PanelModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {MenuItem} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule,Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Message,SelectItem} from 'primeng/components/common/api';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MenubarModule,PanelModule,MegaMenuModule,TabMenuModule,DialogModule
    ,FormsModule,ReactiveFormsModule,GrowlModule,FormsModule,
        ReactiveFormsModule,
        GrowlModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
