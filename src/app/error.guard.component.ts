import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-error',
  template: `<div>
  <h2>404</h2>
  <h4>Page not found.<br />
   Try again!</h4>
  </div>
  `,
  styles: [' div{color: red; font-size: 14px;}']
})

export class ErrorGuardComponent {

  constructor(private router: Router) {}

  onNavigate() {
      this.router.navigate(['/error']);
  }
}
