import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginPwdComponent } from './login-pwd/login-pwd.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleDatailsTwoComponent } from './article-datails-two/article-datails-two.component';
import { ArticleDetailsThreeComponent } from './article-details-three/article-details-three.component';
import { PublishQuestionComponent } from './publish-question/publish-question.component';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { ProIntConOneComponent } from './pro-int-con-one/pro-int-con-one.component';
import { ProIntConTwoComponent } from './pro-int-con-two/pro-int-con-two.component';
import { ProIntConThreeComponent } from './pro-int-con-three/pro-int-con-three.component';
import { TestComponent } from './test/test.component';
import {HttpModule} from '@angular/http';
import { OrderComponent } from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

const routeConfig: Routes = [
  {path: '', redirectTo: '/index' , pathMatch: 'full'},
  {path : 'index', component: IndexComponent},
  {
    path: 'article', component: ArticleComponent,
  children: [
    {path: '', redirectTo: 'details' , pathMatch: 'full'},
    {path: 'details', component: ArticleDetailsComponent},
    {path: 'detailstwo', component: ArticleDatailsTwoComponent},
    {path: 'detailsthree', component: ArticleDetailsThreeComponent}
  ]
  },
  {path: 'home-page', component: HomePageComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'lopwd' , pathMatch: 'full'},
      { path: 'lopwd', component: LoginPwdComponent },
      { path: 'lophone', component: LoginPhoneComponent}
    ]
  },
  { path: 'register', component: RegisterComponent},
  { path: 'publish', component: PublishQuestionComponent},
  { path: 'introduction', component: ProjectIntroductionComponent,
  children: [
    {path: '', redirectTo: 'int-pro-con-one' , pathMatch: 'full'},
    {path: 'int-pro-con-one', component: ProIntConOneComponent},
    {path: 'int-pro-con-two', component: ProIntConTwoComponent},
    {path: 'int-pro-con-three', component: ProIntConThreeComponent}
  ]
  },
  {path : 'res', component: ReactiveFormComponent},
  {path : 'rea', component: ReactiveRegistComponent}

  // {path: 'phone', component: LoginPhoneComponent, outlet : 'aux'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginPwdComponent,
    LoginPhoneComponent,
    IndexComponent,
    HomePageComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    ArticleDatailsTwoComponent,
    ArticleDetailsThreeComponent,
    PublishQuestionComponent,
    ProjectIntroductionComponent,
    ProIntConOneComponent,
    ProIntConTwoComponent,
    ProIntConThreeComponent,
    TestComponent,
    OrderComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
