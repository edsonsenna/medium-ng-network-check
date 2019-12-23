import { Component } from '@angular/core';
import { ConnectionCheckService } from './connection-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'connection-check';

  constructor(
    private connectionCheckService:ConnectionCheckService
  ) {}
}
