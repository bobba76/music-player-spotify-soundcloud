import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbListModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService,
  NbUserModule
} from '@nebular/theme';

@NgModule({
  exports: [
    CommonModule,

    // Nebular
    NbLayoutModule,
    NbSidebarModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbEvaIconsModule,
  ],
})
export class SharedModule {}
