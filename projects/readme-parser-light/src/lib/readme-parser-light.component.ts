import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ReadmeParserLightService } from './readme-parser-light.service';

@Component({
  selector: 'lib-readme-parser-light',
  template: `
    <div class="readme-content" [innerHTML]="parsedContent"></div>
  `,
  styles: [`
    .readme-content {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #24292e;
      background-color: #ffffff;
      padding: 1rem;
    }
    .readme-content h3,
    .readme-content h4,
    .readme-content h5,
    .readme-content h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
    .readme-content h3 { font-size: 1.5em; }
    .readme-content h4 { font-size: 1.25em; }
    .readme-content h5 { font-size: 1em; }
    .readme-content h6 { font-size: 0.875em; }
    .readme-content p {
      margin-top: 0;
      margin-bottom: 16px;
    }
    .readme-content ul,
    .readme-content ol {
      padding-left: 2em;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .readme-content li + li {
      margin-top: 0.25em;
    }
  `]
})
export class ReadmeParserLightComponent implements OnInit {
  @Input() content: string = '';
  parsedContent: SafeHtml = '';

  constructor(
    private parserService: ReadmeParserLightService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const parsedHtml = this.parserService.parse(this.content);
    // Sanitize the HTML to prevent XSS attacks
    this.parsedContent = this.sanitizer.bypassSecurityTrustHtml(parsedHtml);
  }
}
