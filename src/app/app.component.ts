import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './core/service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private db: DatabaseService
    ) {
      this.db.openDatabase();
  }
}
