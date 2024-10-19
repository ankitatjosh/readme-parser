import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeParserLightComponent } from './readme-parser-light.component';

describe('ReadmeParserLightComponent', () => {
  let component: ReadmeParserLightComponent;
  let fixture: ComponentFixture<ReadmeParserLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadmeParserLightComponent]
    });
    fixture = TestBed.createComponent(ReadmeParserLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
