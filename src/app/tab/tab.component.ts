import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() disabled: boolean;
  @Input() closable: boolean;
  @Input() title: string;
  @Input() variant: string;

 @Output() removed = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this);
  }

  onRemove() {
    this.removed.emit(this.id);
  }
}
