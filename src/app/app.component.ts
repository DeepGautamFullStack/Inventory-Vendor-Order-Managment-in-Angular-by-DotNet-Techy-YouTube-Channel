import { Component,OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {MenuItem} from 'primeng/components/common/api';
import {MenubarModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule,Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Message,SelectItem} from 'primeng/components/common/api';
import {PanelModule} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];
   msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    description: string;

    constructor(private fb: FormBuilder) {}
    
   items1: MenuItem[];
   displayAdd: boolean = false;
   displayUpdate : boolean = false;
   displayDelete: boolean = false;
   displayAll: boolean = false;

    showAddDialog() {
        this.displayAdd = true;
    }
    showUpdateDialog() {
        this.displayUpdate = true;
    }
    showDeleteDialog() {
        this.displayDelete = true;
    }
    showAllDialog() {
        this.displayAll = true;
    }
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
        this.msgs.push({severity:'success', summary:'Success', detail:'Form Submitted'});
        this.msgs.push({severity:'warn', summary:'Success', detail:'Form Submitted'});
        this.msgs.push({severity:'error', summary:'Success', detail:'Form Submitted'});
        
        
    }
    ngOnInit() {

          this.items1 = [
            {
                label: 'Home',
                icon: 'fa-file-o'
            },
            {
                label: 'Inventory',
                icon: 'fa-edit',
                items: [
                    {label: 'New Item', icon: 'fa-plus',command: (event) => { this.showAddDialog();} },
                    {label: 'Update Item', icon: 'fa-save',command: (event) => { this.showUpdateDialog();} },
                    {label: 'Delete Item', icon: 'fa-minus',command: (event) => { this.showDeleteDialog();} },
                    {label: 'All Item', icon: 'fa-refresh',command: (event) => { this.showAllDialog();} }
                    
                ]
            },
            {
                label: 'DotNet Techy Tutorial ',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Lession-1'
                    },
                    {
                        label: 'Lession-2'
                    },
                    {
                        label: 'Lession-3'
                    }
                ]
            },
            {
                label: 'About DotNet Techy',
                icon: 'fa-gear',
            },
            {
                label: 'Contact DotNet Techy', icon: 'fa-minus'
            }
        ];  
          this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
        this.genders.push({label:'Female', value:'Female'});   
    }
   index: number = 0;

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }
    
    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }
      get diagnostic() { return JSON.stringify(this.userform.value); }
}
