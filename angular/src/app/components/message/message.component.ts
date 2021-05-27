import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as exceptionReducer from '@state/exception.reducer';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public message = {
    state: false,
    message: '',
    nameClass: ''
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(exceptionReducer.selectMessage).subscribe(message => {
      let messages = '';
      let nameClass = '';

      if (typeof message.message === 'object') {
        let messagesObj;

        if (message.message.code === 200) {
          nameClass = 'Message';
          messagesObj = message.message;
        } else {
          nameClass = 'Message Error';
          messagesObj = message.message.error.message || message.message.message;
        }

        if (Array.isArray(messagesObj)) {
          for (var text of messagesObj) {
            messages += `${text.msg || text}<br/>`;
          }
        } else {
          messages = messagesObj;
        }
      } else {
        nameClass = 'Message';
        messages = message.message;
      }

      this.message.state = message.state;
      this.message.message = messages;
      this.message.nameClass = nameClass;
    });
  }
}
