import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { HomeComponent } from "./home/home.component";
import { AuthGaurd } from "./auth-gaurd.service";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGaurd]
    },
    {
        path: '**',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }

]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}