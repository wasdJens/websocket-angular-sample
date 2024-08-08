import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketCommunicationService {
  private socket = webSocket('ws://localhost:8080');
  public messages$: BehaviorSubject<unknown[]> = new BehaviorSubject<unknown[]>([]);

  constructor() {
    this.socket.subscribe({
      next: (message) => {
        console.log('Received message:', message);
        const currentMessages = this.messages$.getValue();
        const updatedMessages = [...currentMessages, message];
        this.messages$.next(updatedMessages);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Connection closed');
      }
    });
  }

  public sendMessage(message: string) {
    this.socket.next({message: message});
  }

  public closeConnection() {
    this.socket.complete();
  }
}
