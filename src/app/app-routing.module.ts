import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DiscordRulesComponent } from './discord-rules/discord-rules.component';

const routes: Routes = [

  {path: '', component: AppComponent},
  {path: 'discordrules', component: DiscordRulesComponent}

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
