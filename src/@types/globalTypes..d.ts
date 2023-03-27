export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export interface Post {
  id: string;
  userId: number;
  datePosted: string;
  title: string;
  body: string;
}

export interface EditPost {
  id: string;
  title: string;
  body: string;
  onEdit: ({
    title,
    body,
  }: {
    id: string;
    title: string;
    body: string;
  }) => void;
}
