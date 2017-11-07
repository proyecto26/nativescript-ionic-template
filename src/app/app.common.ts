import { AppRoutingModule } from './app-routing.module';
// demo
import { MenuModule } from './menu/menu.module';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    MenuModule
];

export * from './app-routing.module';
