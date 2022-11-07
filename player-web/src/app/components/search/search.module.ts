import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [SharedModule, SearchRoutingModule],
})
export class SearchModule {}
