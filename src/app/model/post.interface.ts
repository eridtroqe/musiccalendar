export interface Post {
    _id: string;
    artist: Array<string>;
    title: string;
    album: string;
    release_date: Date;
    order: number;
}

export interface PostsResponse {
    message: string;
    posts: Array<Post>;
    maxPosts: number;
}