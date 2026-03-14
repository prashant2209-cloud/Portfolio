import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tech-360',
      description: [
        'A platform inspired by CarDekho that explores AI-driven innovations in the automotive industry.',
        'The platform focuses on emerging technologies such as electric vehicles, autonomous systems, and sustainability.'
      ],
      techStack: ['Python', 'AI/ML', 'Web Development'],
      image: 'https://res.cloudinary.com/diayjemwx/image/upload/v1773166827/Ai_learning_and_artificial_intelligence_concept____Premium_Photo_isw3sb.jpg',
      aosImage: 'fade-right'
    },
    {
      title: 'LegalSangam',
      description: [
        'A digital marketplace connecting citizens with legal professionals to make legal services accessible and affordable.',
        'Features include: AI-powered legal chat, Document review, Secure payments, Multi-language support, Geo-tagging, Voice assistance, and Community legal resources.'
      ],
      techStack: ['AI', 'Web Development', 'Multi-language'],
      image: 'https://res.cloudinary.com/diayjemwx/image/upload/v1773166047/Legislation_Photos_-_Download_Free_High-Quality_Pictures___Freepik_lbyrlp.jpg',
      aosImage: 'fade-left'
    }
  ];
}
