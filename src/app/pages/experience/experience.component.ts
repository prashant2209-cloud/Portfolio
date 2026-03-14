import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent as ExperienceContentComponent } from '../../components/experience/experience.component';
import { SkillsComponent } from '../../components/skills/skills.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, ExperienceContentComponent, SkillsComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Education – Prashant Gupta',
      description: 'Explore Prashant Gupta\'s education background and certifications. View detailed academic history and achievements.',
      url: 'https://prashant2209-cloud/experience',
      keywords: 'Prashant Gupta Education, Software Engineer Academic, B.Tech Computer Science, Cybersecurity Certifications'
    });
  }
}
