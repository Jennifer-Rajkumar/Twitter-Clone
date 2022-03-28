import { SharedModule } from './shared/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MiddleFeedComponent } from './components/middle-feed/middle-feed.component';
import { WhatsHappeningComponent } from './components/whats-happening/whats-happening.component';
import { NewtweetComponent } from './components/newtweet/newtweet.component';
import { DisplayfeedComponent } from './components/displayfeed/displayfeed.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/Notification/notification/notification.component';
import { NotificationNavComponent } from './components/Notification/notification-nav/notification-nav.component';
import { NotificationMentionComponent } from './components/Notification/notification-mention/notification-mention.component';
import { NotificationAllComponent } from './components/Notification/notification-all/notification-all.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileComponent } from './components/profiles/profile/profile.component';
import { ProfileNavComponent } from './components/profiles/profile-nav/profile-nav.component';
import { ProfileMainComponent } from './components/profiles/profile-main/profile-main.component';
import { ProfileMediaComponent } from './components/profiles/profile-media/profile-media.component';
import { ProfileLikesComponent } from './components/profiles/profile-likes/profile-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleFeedComponent,
    WhatsHappeningComponent,
    NewtweetComponent,
    DisplayfeedComponent,
    HomeComponent,
    NotificationComponent,
    NotificationNavComponent,
    NotificationMentionComponent,
    NotificationAllComponent,
    LandingPageComponent,
    UsernameComponent,
    PasswordComponent,
    ProfileComponent,
    ProfileNavComponent,
    ProfileMainComponent,
    ProfileMediaComponent,
    ProfileLikesComponent

  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
