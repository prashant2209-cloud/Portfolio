import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent as ResumeContentComponent } from '../../components/resume/resume.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Resume – Prashant Gupta',
      description: 'Download or view Prashant Gupta\'s professional resume. Comprehensive overview of skills, education, and achievements as a Software Engineer.',
      url: 'https://prashant2209.cloud/resume',
      keywords: 'Prashant Gupta Resume, Software Engineer CV, Web Developer Resume Download'
    });
  }
}
