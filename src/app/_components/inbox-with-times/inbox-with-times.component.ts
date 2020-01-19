import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inbox-with-times',
  templateUrl: './inbox-with-times.component.html',
  styleUrls: ['./inbox-with-times.component.scss']
})
export class InboxWithTimesComponent implements OnInit {

  @Input() inboxData;
  @Output() removeInbox: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('inputed data: ', this.inboxData)
  }

  remove() {
    this.removeInbox.emit(this.inboxData);
  }
}
