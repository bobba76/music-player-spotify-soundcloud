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
  NbUserModule
} from '@nebular/theme';

@NgModule({
  imports: [
    // Nebular
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbEvaIconsModule,
  ],
  exports: [
    CommonModule,

    // Nebular
    RouterModule,
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
