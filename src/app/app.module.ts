import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { Authguard } from './authguard';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {
    path: 'login-form',
    component: LoginFormComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'profile',
    canActivate: [Authguard],
    component: ProfileComponent
  }
]


@NgModule({
  declarations: [AppComponent, HomepageComponent, LoginFormComponent, FooterComponent, ProfileComponent, NewsComponent],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  HttpClientModule
  ],
  providers: [UserService, Authguard, NewsService ],
  bootstrap: [AppComponent]
})

export class AppModule { }