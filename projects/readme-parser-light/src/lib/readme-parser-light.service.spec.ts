import { TestBed } from '@angular/core/testing';

import { ReadmeParserLightService } from './readme-parser-light.service';

describe('ReadmeParserLightService', () => {
  let service: ReadmeParserLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadmeParserLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
