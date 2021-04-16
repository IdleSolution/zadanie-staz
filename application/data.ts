import axios from "axios";
import { IPost } from "../models/posts";
import { IUser, IUserWithPosts } from "../models/users";
import { getUsersWithPosts } from "./usersWithPosts";

export const getData = async (): Promise<[IUserWithPosts[], IPost[]]> => {
    try {
        let [postsData, usersData] = await Promise.all([axios.get('https://jsonplaceholder.typicode.com/posts'),
                            axios.get('https://jsonplaceholder.typicode.com/users')]);
        let posts: IPost[] = postsData.data;
        let users: IUser[] = usersData.data;
        
        let usersWithPosts: IUserWithPosts[] = getUsersWithPosts(users, posts);

        return [usersWithPosts, posts];

    } catch (error) {
        throw error;
    }
}
