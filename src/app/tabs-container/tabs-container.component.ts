import { Component, OnInit } from '@angular/core';
import { Tab } from '../Models/tab';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {

  tabs: Tab[] = [
    {
      id: '1',
      disabled: false,
      closable: true,
      variant: 'text',
      title: 'First'
    },
    {
      id: '2',
      disabled: true,
      closable: true,
      variant: 'text',
      title: 'Disabled'
    },
    {
      id: '3',
      disabled: false,
      closable: false,
      variant: 'text',
      title: 'Second'
    },
    {
      id: '4',
      disabled: false,
      closable: true,
      variant: 'text',
      title: 'Third'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  remove(id: string) {
    this.tabs = this.tabs.filter(t => t.id != id);
  }
}