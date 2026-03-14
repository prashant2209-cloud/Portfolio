import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: 'Expert' | 'Intermediate' | 'Beginner';
  experience: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  `]
})
export class SkillsComponent {

  languages = [
    { name: 'C/C++', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Python', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'JavaScript', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  webDev = [
    { name: 'HTML', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'CSS', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'React', logo: '', isInvertLogo: false, proficiency: 'Beginner', experience: 1 },
    { name: 'Bootstrap', logo: '', isInvertLogo: false, proficiency: 'Beginner', experience: 1 }
  ];

  tools = [
    { name: 'Git', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'GitHub', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'VS Code', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Jupyter Notebook', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Canva', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Wireshark', logo: '', isInvertLogo: false, proficiency: 'Beginner', experience: 1 }
  ];

  domains = [
    { name: 'Web Development', logo: '', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Generative AI', logo: '', isInvertLogo: false, proficiency: 'Beginner', experience: 1 },
    { name: 'Cybersecurity', logo: '', isInvertLogo: false, proficiency: 'Beginner', experience: 1 }
  ];

}
