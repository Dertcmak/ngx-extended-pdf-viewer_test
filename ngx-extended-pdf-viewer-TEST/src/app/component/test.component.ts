import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  pdfURL = 'assets/pdf.pdf';

  constructor(private router: Router) {
  }

  back() {
    this.router.navigateByUrl('dashboard');
  }

  ngOnInit(): void {
    console.log('Initialized');
  }
}
