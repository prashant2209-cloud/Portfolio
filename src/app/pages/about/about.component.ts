import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Me – Prashant Gupta',
      description: 'Learn about Prashant Gupta, a B.Tech Computer Science student with expertise in Python, AI, and modern web technologies. Discover my journey, skills, and professional background.',
      url: 'https://prashant2209.cloud/about',
      keywords: 'About Prashant Gupta, Software Engineer Background, AI Enthusiast Profile, Web Developer Experience, B.Tech Computer Science'
    });
  }
}
