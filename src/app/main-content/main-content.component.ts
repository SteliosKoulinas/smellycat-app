import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormComponent,MapComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
