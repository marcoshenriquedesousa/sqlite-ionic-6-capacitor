import { Injectable } from '@angular/core';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName = 'contatos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) {}

  async openDatabase(){
    try {
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
      await this.createDatabase();
    } catch (error) {
      console.log('Ocorreu um error ao criar o banco de dados', error);
    }
  }

  async createDatabase(){
    const sqlCreateDatabase = this.getCreateTable();
    const reault = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return reault ? true : false;
  }

  getCreateTable(){
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS contacts (id integer primary key AUTOINCREMENT, name varchar(100));');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]){
    return this.db.executeSql(sql, params);
  }
}
