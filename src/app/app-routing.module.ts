import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    data:{ //自定义数据
      a:"用户自定义数据a"
    }
  },
  {
    path:'todo',
    loadChildren:()=>import('./todo/todo.module').then(m=>m.TodoModule)
  },
  {
    path:'rxjs',
    loadChildren:()=>import("./learn-rxjs/learn-rxjs.module").then(m=>m.LearnRxjsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
