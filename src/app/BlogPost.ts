import { IComment } from "./Comment";
export interface IBlogPost {
    _id: string
    title: string;
    postDate: string;
    featuredImage: string;
    post: string;
    postedBy: string;
    comments: IComment[];
    category: string;
    tags: Array<string>;
    isPrivate: Boolean;
    views: number;
}
