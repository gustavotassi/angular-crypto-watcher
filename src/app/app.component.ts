import { Component, OnInit } from '@angular/core';

interface Client {
  id: string;
  nome: string;
  idade: number;
  createdAt: string;
  isDeleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-crypto-watcher';
  public nome = 'lucas';

  constructor() {}

  ngOnInit(): void {
    console.log(this.nome);
  }
}
