export interface BlogSection {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  sign: string;
  signEmoji: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  sections: BlogSection[];
}
