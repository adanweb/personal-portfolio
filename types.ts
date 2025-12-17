export type Category = 'graphic' | 'photography' | 'video' | 'web';

export interface Project {
  id: string;
  title: string;
  category: Category;
  client: string;
  year: string;
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export type ViewState = 'home' | 'projects' | 'about' | 'contact' | 'project-detail';

export interface NavItem {
  id: ViewState;
  label: string;
}
