import { getClosestPeople } from "../application/closestPeople";
import { usersClosestPeople as users } from "./dummyObjects";

const expect = require("chai").expect;

describe("Closest people", () => {
    it("Should find a closest person for each person in a list", () => {
        getClosestPeople(users);
        expect(users[0].closestPersonId).to.equal(2);
        expect(users[1].closestPersonId).to.equal(3);
        expect(users[2].closestPersonId).to.equal(2);
    })
})