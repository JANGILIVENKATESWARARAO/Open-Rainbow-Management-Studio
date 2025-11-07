export interface Announcement {
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  postedDate: string;
  postedBy: string;
  expireDate: string;
}

export interface DropdownValues {
  value: string;
  isDefault: boolean;
  textColor: string;
  backgroundColor: string;
  isDisabled: boolean;
}

export interface TeamMembers {
  name: string;
  designation: string;
  imageUrl: string;
}