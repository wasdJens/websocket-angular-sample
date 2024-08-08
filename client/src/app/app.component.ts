import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketCommunicationService } from './websocket-communication.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public messages$: Observable<unknown[]>;

  constructor(private websocketService: WebsocketCommunicationService) {
    this.messages$ = this.websocketService.messages$
      .asObservable()
      .pipe(map((message) => message));
  }

  public handleClick(): void {
    this.websocketService.sendMessage('Hello server!');
  }
}
