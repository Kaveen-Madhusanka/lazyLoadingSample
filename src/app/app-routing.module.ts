import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./public/login/login.component";
import {MainMenuComponent} from "./private/main-menu/main-menu.component";
import {TodoHomeComponent} from "./todo-mange/todo-home/todo-home.component";

const routes: Routes = [
  {path:'' , component: LoginComponent},
  {path: 'mainMenu',component:MainMenuComponent},
  {path: 'todo', loadChildren:() => import('./todo-mange/todo-mange.module').then(x => x.TodoMangeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
