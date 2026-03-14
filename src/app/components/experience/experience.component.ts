import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Bachelor of Technology (Computer Science & Engineering)',
      company: 'GL Bajaj Institute of Technology and Management',
      companyUrl: 'https://www.glbitm.org/',
      startDate: '2023',
      endDate: 'Present',
      achievements: [
        'Pursuing B.Tech in Computer Science & Engineering',
        'Strong focus on AI, Web Development, and Cybersecurity',
        'Actively participating in technical projects and learning new frameworks'
      ]
    },
    {
      position: 'High School',
      company: 'Maharishi Vidya Mandir School',
      companyUrl: '#',
      startDate: '',
      endDate: '',
      achievements: [
        'Completed schooling from Maharishi Vidya Mandir School, Naini, Uttar Pradesh'
      ]
    },
    {
      position: 'Certifications',
      company: 'Cybersecurity and Network Security',
      companyUrl: '#',
      startDate: '',
      endDate: '',
      achievements: [
        'Cybersecurity Virtual Internship',
        'Introduction to Cybersecurity',
        'Cybersecurity Foundations',
        'Network Security Fundamentals'
      ]
    }
  ];
}

