import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<select   (change)="clickedd($event.target.value)" materialize="material_select" [materializeSelectOptions]="selectOptions" >
  <option *ngFor="let option of selectOptions"  [value]="option.name">{{option.name}}</option>
</select>`
})
export class AppComponent {

  selectOptions = [{ name: "dotan" }, { name: "itay"}]

  clickedd(name) {
   console.log(name)
  }
 
  

}

