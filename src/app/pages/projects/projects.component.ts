import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent as ProjectsContentComponent } from '../../components/projects/projects.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsContentComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Projects – Prashant Gupta',
      description: 'Explore Prashant Gupta\'s portfolio of innovative web applications and software projects. View detailed case studies of AI, Python, and full-stack development work.',
      url: 'https://prashant2209-cloud/projects',
      keywords: 'Prashant Gupta Projects, Software Engineer Portfolio, AI Projects, Web Development Portfolio'
    });
  }
}
