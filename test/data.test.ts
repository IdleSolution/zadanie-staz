import { getData } from "../application/data";

const expect = require("chai").expect;

describe("Data", () => {
    it("Should return correct data", () => {
        getData().then((res) => {
            const [users, posts] = res;
            expect(users).to.be.an("array");
            users.forEach(user => {
                expect(user).to.have.all.keys("id", "name", "username", "email", "address", "phone", "website", "company", "posts");
                expect(user.address).to.have.all.keys("street", "suite", "city", "zipcode", "geo");
                expect(user.address.geo).to.have.all.keys("lat", "lng");
                expect(user.company).to.have.all.keys("name", "catchPhrase", "bs");
                user.posts.forEach(post => {
                    expect(post).to.have.all.keys("id", "title", "body");
                })
            })
            expect(posts).to.be.an("array");
            posts.forEach(post => {
                expect(post).to.have.all.keys("id", "title", "body");
            })
        })
    })
})