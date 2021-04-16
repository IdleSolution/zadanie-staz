import { IPost } from "../models/posts";
import { IUser, IUserWithPosts } from "../models/users";


// closestPeople.test.ts

export const usersClosestPeople: IUserWithPosts[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
        posts: []
    },
    {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-67.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
        posts: []
    },
    {
        id: 3,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-77.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
        posts: []
    },

]

// postCounts.test.ts

export const usersPostCounts: IUserWithPosts[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
        posts: [
            {
                id: 1,
                title: "title1",
                body: "body of a post1"
            },
            {
                id: 2,
                title: "title2",
                body: "body of a post2"
            }
        ]
    }
]

// postDuplicates.test.ts

export const postsDuplicates1: IPost[] = [
    {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body of a post1"
    },
    {
        userId: 1,
        id: 2,
        title: "title2",
        body: "body of a post2"
    }
];

export const postsDuplicates2: IPost[] = [
    {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body of a post1"
    },
    {
        userId: 1,
        id: 2,
        title: "title1",
        body: "body of a post2"
    }
];

export const postsDuplicates3: IPost[] = [
    {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body of a post1"
    },
    {
        userId: 1,
        id: 2,
        title: "title1",
        body: "body of a post2"
    },
    {
        userId: 1,
        id: 3,
        title: "title1",
        body: "body of a post3"
    }
];

// combineUsersWithPosts.test.ts

export const usersCombination: IUser[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
    },
    {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-67.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
    },
]

export const postsCombination: IPost[] = [
    {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body of a post1"
    },
    {
        userId: 1,
        id: 2,
        title: "title2",
        body: "body of a post2"
    },
    {
        userId: 2,
        id: 3,
        title: "title3",
        body: "body of a post3"
    }
    
]