
const expect = require("chai").expect;
import { getUsersWithPosts } from "../application/usersWithPosts";
import { usersCombination as users, postsCombination as posts } from "./dummyObjects";

describe("Combine users with posts", () => {
    let arr = getUsersWithPosts(users, posts);
    let user1 = arr[0];
    let user2 = arr[1];
    it("Should combine users with posts correctly", () => {
        expect(user1.posts.length).to.equal(2);
        expect(user2.posts.length).to.equal(1);
        expect(user1.posts[0].id).to.equal(1);
        expect(user1.posts[1].id).to.equal(2);
        expect(user2.posts[0].id).to.equal(3);
    })

    it("Should remove users id from posts", () => {
        expect(user1.posts[0].userId).to.be.an('undefined');
        expect(user1.posts[1].userId).to.be.an('undefined');
        expect(user2.posts[0].userId).to.be.an('undefined');
    })
})