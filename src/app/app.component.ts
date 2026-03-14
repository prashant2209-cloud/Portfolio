import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GoogleAnalyticsService } from './service/google-analytics.service';
import { SeoService } from './service/seo.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private googleAnalyticsService: GoogleAnalyticsService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.googleAnalyticsService.loadGoogleAnalytics();



    // Set default SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Prashant Gupta | Software Engineer | AI & Cybersecurity Enthusiast | Portfolio',
      description: 'Prashant Gupta - B.Tech Computer Science Student with expertise in Python, AI, Web Development, and Cybersecurity. View my portfolio showcasing intelligent solutions.',
      url: 'https://prashant2209.cloud/',
      image: 'https://prashant2209.cloud/assets/logo.jpg',
      keywords: 'Prashant Gupta, Software Engineer, Web Developer, AI Enthusiast, Cybersecurity, Python, React, Cybersecurity, B.Tech, Tech-360, LegalSangam, Generative AI'
    });

    // Ensure canonical URL is set for current page
    this.seoService.setCanonicalForCurrentPage();
  }
}
