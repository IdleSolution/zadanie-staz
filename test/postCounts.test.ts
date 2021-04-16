const expect = require("chai").expect;

import { getPostCounts } from "../application/postCounts";
import { usersPostCounts as users } from "./dummyObjects";

describe("Count of users posts", () => {
    it("Should return a string array with correct post counts", () => {
        const counts = getPostCounts(users);
        let count = counts[0].split(" ")[2]; // assuming that username can't have spaces

        expect(counts).to.be.an("array");
        expect(counts.length).to.equal(1);
        expect(count).to.equal("2");

    })
})