import { IPost } from "./posts";

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
    closestPersonId?: number,
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
}

export interface Geo {
    lat: string,
    lng: string
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IUserWithPosts extends IUser {
    posts: IPost[],
}