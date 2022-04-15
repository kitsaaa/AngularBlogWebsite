import { IComment } from "./Comment";
export class IBlogPost {
    _id: string = "";
    title: string = "";
    postDate: string = "";
    featuredImage: string = "";
    post: string = "";
    postedBy: string = "";
    comments: IComment[] = [];
    category: string = "";
    tags: Array<string> = [];
    isPrivate: Boolean = false;
    views: number = 0;
}
