import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,template: `
  <app-banner></app-banner>
  <app-content></app-content>
  <app-footer></app-footer>
  
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/discordrules']">Discord Rules</a>
            <router-outlet></router-outlet>
            `
})
export class AppComponent {
  title = 'pawl';
}
