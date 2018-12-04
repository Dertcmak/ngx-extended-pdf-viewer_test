import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit, OnDestroy {

  pdfURL = 'assets/pdf.pdf';

  constructor(private router: Router) {
  }

  private pdfViewerCleanUp() {
    if ((window as any).PDFViewerApplication) {
      (window as any).PDFViewerApplication.unbindEvents();
      (window as any).PDFViewerApplication.unbindWindowEvents();
      (window as any).PDFViewerApplication.cleanup();
      (window as any).PDFViewerApplication.close();
    }
  }

  back() {
    this.pdfViewerCleanUp();
    this.router.navigateByUrl('dashboard');
  }

  ngOnInit(): void {
    console.log('Initialized');
  }

  ngOnDestroy(): void {
    this.pdfViewerCleanUp();
  }
}
