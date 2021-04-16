import { IUserWithPosts } from "../models/users";

export const getPostCounts = (users: IUserWithPosts[]): string[] => {
    let arr: string[] = [];

    users.forEach(user => {
        let count = user.posts.length;
        let remainder = count % 10;
        let str = count === 1 ? "post" : (remainder <= 1 || remainder >= 5 ? "postów" : "posty" )
        arr.push(`${user.username} napisał/a ${count} ${str}`);
    })  
    
    return arr;
}