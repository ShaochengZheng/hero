import {Component} from '@angular/core';

@Component({
    selector:'mt-app',
     template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerlink="/dashboard">Dashcoard</a>
      <a routerlink="/heroes">Herpes</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
}
