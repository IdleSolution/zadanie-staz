import { IPost } from "../models/posts";
import { IUser, IUserWithPosts } from "../models/users";

export const getUsersWithPosts = (users: IUser[], posts: IPost[]): IUserWithPosts[] => {
    return users.map(user => {
        return {
            ...user,
            posts: posts.filter(post => {
                if(post.userId === user.id) {
                    delete post.userId;
                    return true;
                }
            })
        }
    })
}
