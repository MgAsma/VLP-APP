import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tabs/tab1', icon: 'home' },
    { title: 'Search', url: '/tabs/tab2', icon: 'search' },
    { title: 'Profile', url: '/tabs/tab3', icon: 'person' },
    { title: 'Inbox', url: '/tabs/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/tabs/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/tabs/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/tabs/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/tabs/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/tabs/folder/spam', icon: 'warning' },
  ];
  constructor() {}
}
