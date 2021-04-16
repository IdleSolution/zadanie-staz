import { IPost } from "../models/posts";

export const getPostDuplicates = (posts: IPost[]): string[] => {
    let counts: any = {};
    const duplicatesArr: string[] = [];

    posts.forEach(post => {
        if(counts[post.title] === 1) {
            duplicatesArr.push(post.title);
        }
        if(!counts[post.title]) {
            counts[post.title] = 1;
        } else {
            counts[post.title]++;
        }
    })
    return duplicatesArr;
}