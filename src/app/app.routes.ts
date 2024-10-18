import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'/auth', pathMatch:'full'}
];
