import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameTypeAComponent } from './frame-type-a/frame-type-a.component';
import { FrameTypeBComponent } from './frame-type-b/frame-type-b.component';
import { FrameTypeCComponent } from './frame-type-c/frame-type-c.component';
import { FramesComponent } from './frames/frames.component';
import { LensTypeComponent } from './lens-type/lens-type.component';
import { LensNumberComponent } from './lens-number/lens-number.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameTypeAComponent,
    FrameTypeBComponent,
    FrameTypeCComponent,
    FramesComponent,
    LensTypeComponent,
    LensNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
