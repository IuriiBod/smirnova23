import {Component} from '@angular/core';

@Component({
  selector: 'admin-menu',
  templateUrl: './app/components/adminPage/adminpage.component.html'
})

export class AdminPageComponent {
  selectedItem: string = 'home';
  menuItems = [
    {name:'Home', link:'home'},
    {name:'Accounting', link:'accounting'},
    {name:'Information', link:'information'},
    {name:'Docs', link:'docs'},
    {name:'Contacts', link:'contacts'}
  ];

  onSelect(item) {
    this.selectedItem = item.link;
  }
}