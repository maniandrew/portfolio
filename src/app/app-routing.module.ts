import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'screens',
    loadChildren:(() => import('../app/screens/screens.module').then((m) => m.ScreensModule))
  },
  {
    path:'',
    redirectTo:'screens',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
