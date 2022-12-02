export interface Post {
  id: string;
  datetime: string;
  description: string;
  title: string;
}

export interface PostsList {
  [id: string]: Post;
}