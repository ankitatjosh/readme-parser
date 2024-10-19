import { NgModule } from '@angular/core';
import { ReadmeParserLightComponent } from './readme-parser-light.component';
import { CommonModule } from '@angular/common';
import { ReadmeParserLightService } from './readme-parser-light.service';

@NgModule({
  declarations: [
    ReadmeParserLightComponent,
  ],
  imports: [CommonModule],
  exports: [
    ReadmeParserLightComponent
  ],
  providers: [ReadmeParserLightService]
})
export class ReadmeParserLightModule { }
