import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact – Prashant Gupta',
      description: 'Get in touch with Prashant Gupta for collaboration opportunities, project inquiries, or professional discussions. Contact a skilled Software Engineer and AI Enthusiast.',
      url: 'https://prashant2209.cloud/contact',
      keywords: 'Contact Prashant Gupta, Hire Software Engineer, Web Developer Contact, Cybersecurity Services, Project Collaboration'
    });
  }
}
