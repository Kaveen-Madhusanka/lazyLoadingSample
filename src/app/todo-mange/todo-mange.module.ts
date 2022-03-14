import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoMangeRoutingModule } from './todo-mange-routing.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';

@NgModule({
  declarations: [
    TodoHomeComponent
  ],
  imports: [
    CommonModule,
    TodoMangeRoutingModule
  ],
  exports: [TodoHomeComponent]
})
export class TodoMangeModule {
  constructor() {
    console.log('Todo module loaded')
  }
}
