import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarElement } from 'src/app/models/NavbarElement';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbar_list: NavbarElement[] = [
    {name: "Sandbox", route: "/sandbox"},
    {name: "Movies", route: "/movies"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
