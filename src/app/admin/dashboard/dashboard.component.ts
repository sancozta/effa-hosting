import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../shared/services/firebase.service';
import { MenuModel } from '../../shared/models/menu.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'mat-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: boolean = true;
  authorized: boolean = false;

  constructor(
    public firebase: FirebaseService,
    public router: Router,
    public ngZone: NgZone,
  ) { }

  menu: MenuModel[] = [
    {
      label: 'Relatório',
      icon: 'fas fa-chart-pie',
      routerLink: '/report',
    },
    {
      label: 'Produtos',
      icon: 'fas fa-coins',
      routerLink: '/product',
    },
    {
      label: 'Categorias',
      icon: 'fas fa-tag',
      routerLink: '/category',
    },
    {
      label: 'Usuários',
      icon: 'fas fa-users',
      routerLink: '/users',
    },
    {
      label: 'Contatos',
      icon: 'fas fa-id-card',
      routerLink: '/contacts',
    },
    {
      label: 'Notificações',
      icon: 'fas fa-envelope',
      routerLink: '/notification',
    },
  ];

  ngOnInit() {
    // this.firebase.data.subscribe((u) => {
    //   console.log('TESTE_U', u);
    //   this.firebase.getDocUser(u ? u.uid : '').subscribe((doc: User | undefined | null) => {
    //     console.log('TESTE_DOC', doc);
    //     if(doc) {
    //       this.firebase.user = doc;
    //       this.firebase.admin = doc.admin;
    //       this.authorized = !!doc.admin;
    //       this.loading = false;
    //     }
    //   });
    // });
  }

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

  logout() {
    this.firebase.logout();
    this.router.navigate(['/login']);
  }
}
