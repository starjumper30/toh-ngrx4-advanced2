import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailViewComponent} from './hero-detail-view.component';
import {HeroNameComponent} from './hero-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroDetailViewComponent,
    HeroNameComponent
  ],
  exports: [
    HeroDetailComponent
  ],
  providers: []
})
export class HeroDetailModule { }
