import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioTwo } from '../../data/portfolio-data';

interface Data {
    id: number;
    image: string;
    category: string[];
    tag: string;
    name: string;
}

@Component({
  selector: 'app-related-project',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './related-project.html',
  styleUrl: './related-project.css'
})
export class RelatedProject {
  portfolioData:Data[] = portfolioTwo
}
