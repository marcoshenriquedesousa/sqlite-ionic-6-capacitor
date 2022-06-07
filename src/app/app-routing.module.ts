import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contacts/contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'contact/new',
    loadChildren: () => import('./contacts/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'contact/edit/:id',
    loadChildren: () => import('./contacts/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
