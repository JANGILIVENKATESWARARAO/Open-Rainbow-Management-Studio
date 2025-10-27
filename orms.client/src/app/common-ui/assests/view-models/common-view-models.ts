export interface Announcement {
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  postedDate: string;
  postedBy: string;
}