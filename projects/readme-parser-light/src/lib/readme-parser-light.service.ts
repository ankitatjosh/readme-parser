// readme-parser.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadmeParserLightService {
  parse(markdown: string): string {
    let html = markdown;

    // Replace line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Parse headers (h1 to h6)
    html = html.replace(/# (.*?)(?:\n|$)/g, '<h1>$1</h1>');
    html = html.replace(/## (.*?)(?:\n|$)/g, '<h2>$1</h2>');
    html = html.replace(/### (.*?)(?:\n|$)/g, '<h3>$1</h3>');
    html = html.replace(/#### (.*?)(?:\n|$)/g, '<h4>$1</h4>');
    html = html.replace(/##### (.*?)(?:\n|$)/g, '<h5>$1</h5>');
    html = html.replace(/###### (.*?)(?:\n|$)/g, '<h6>$1</h6>');

    // Parse bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Parse unordered lists
    html = html.replace(/^\s*[-*+]\s+(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)\s+(?=<li>)/gs, '$1');
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');

    // Parse ordered lists
    html = html.replace(/^\s*\d+\.\s+(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)\s+(?=<li>)/gs, '$1');
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ol>$&</ol>');

    // Wrap in paragraphs if not already wrapped
    if (!html.startsWith('<')) {
      html = `<p>${html}</p>`;
    }

    return html;
  }
}
