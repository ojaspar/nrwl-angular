import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitScreenLayoutComponent } from './split-screen-layout/split-screen-layout.component';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitScreenLayoutComponent, NavbarLayoutComponent, SidebarLayoutComponent],
  exports: [SplitScreenLayoutComponent],
})
export class SharedComponentModule {}
