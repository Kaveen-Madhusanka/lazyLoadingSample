import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu-items',
  templateUrl: './main-menu-items.component.html',
  styleUrls: ['./main-menu-items.component.css']
})
export class MainMenuItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onPost() {
     this.router.navigate(['todo']);
  }

  onTodo() {
    // this.router.navigate(['todo']);
  }

  onAlbum() {
    // this.router.navigate(['album']);
  }
}
