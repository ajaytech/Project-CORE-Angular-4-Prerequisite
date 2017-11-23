import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeerComponent } from './deer/deer.component';
import { ElephantComponent } from './elephant/elephant.component';
import { GiraffeComponent } from './giraffe/giraffe.component';
import { LeopardComponent } from './leopard/leopard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/deer', pathMatch: 'full' },
	{ path: 'deer', component: DeerComponent },
	{ path: 'elephant', component: ElephantComponent },
	{ path: 'leopard', component: LeopardComponent },
	{ path: 'giraffe', component: GiraffeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
