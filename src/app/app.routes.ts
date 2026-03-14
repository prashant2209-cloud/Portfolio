import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'Prashant Gupta - B.Tech Computer Science Student with expertise in Python, AI, Web Development, and Cybersecurity. Explore my portfolio, education, and projects.',
      keywords: 'Prashant Gupta, Software Engineer, Web Developer, AI Enthusiast, Cybersecurity, Portfolio'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Prashant Gupta, a B.Tech Computer Science student and AI Enthusiast.',
      keywords: 'About Prashant Gupta, Software Engineer Background, AI Enthusiast Profile, Web Developer Experience'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Education',
      description: 'Explore Prashant Gupta\'s education background and certifications. View detailed academic history and achievements.',
      keywords: 'Prashant Gupta Education, Software Engineer Academic, B.Tech Computer Science, Cybersecurity Certifications'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore Prashant Gupta\'s portfolio of innovative web applications and software projects. View detailed case studies of AI, Python, and full-stack development work.',
      keywords: 'Prashant Gupta Projects, Software Engineer Portfolio, AI Projects, Web Development Portfolio'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with Prashant Gupta for collaboration opportunities, project inquiries, or professional discussions.',
      keywords: 'Contact Prashant Gupta, Hire Software Engineer, Web Developer Contact, Cybersecurity Services'
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Prashant Gupta\'s professional resume. Comprehensive overview of skills, education, and achievements as a Software Engineer.',
      keywords: 'Prashant Gupta Resume, Software Engineer CV, Web Developer Resume Download'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
