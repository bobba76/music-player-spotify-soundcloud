import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { SampleRoutingModule } from './sample-routing.module';

@NgModule({
  imports: [SharedModule, SampleRoutingModule],
})
export class SampleModule {}
