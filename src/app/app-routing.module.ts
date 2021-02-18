import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramesComponent } from './frames/frames.component';
import { LensNumberComponent } from './lens-number/lens-number.component';
import { LensTypeComponent } from './lens-type/lens-type.component';

const routes: Routes = [
  { path: '', component: FramesComponent},
 { path: 'a', component: LensTypeComponent },
 {path: 'b', component: LensNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
