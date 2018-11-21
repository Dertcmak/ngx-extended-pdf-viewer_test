import {Router} from '@angular/router';
import {Component} from '@angular/core';


@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html'
})
export class MainComponent {

  constructor(private router: Router) {
  }

  redirect() {
    this.router.navigateByUrl('pdf');
  }

}
