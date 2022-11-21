import { NgModule } from '@angular/core';
import { NbCardModule, NbThemeModule, NbThemeService } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ListComponent } from './list/list.component';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent, ListComponent],
  imports: [SharedModule, SearchRoutingModule],
})
export class SearchModule {}
