import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(
    private _router: Router,
    private route: ActivatedRoute)
  {
  }

  ngOnInit() {
    this._router.events.subscribe( (value) => {
      if (value instanceof NavigationStart) {
       this.title = this.changeTitle(value.url);
      }
    });
  }

  changeTitle(url: string): string{
    switch (url) {
      case '/dashboard':
        return 'Dashboard';
      case '/renevues':
        return 'Przychody';
      case '/expenses':
        return 'Wydatki';
      case '/add-expense':
        return 'Dodaj wydatek';
      case '/planning':
        return 'Plan budżetu';
      case '/categories':
        return 'Kategorie';
    }
  }

}
