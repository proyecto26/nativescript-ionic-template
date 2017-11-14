// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { GridRoutes } from './grid.routes';
import { GridComponent } from './components/grid/grid.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule,
    RouterModule.forChild(GridRoutes),
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: any[] = [
    GridComponent
];
