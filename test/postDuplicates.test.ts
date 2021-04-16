const expect = require("chai").expect;
import { getPostDuplicates } from "../application/postDuplicates";
import { postsDuplicates1, postsDuplicates2, postsDuplicates3 } from './dummyObjects';

describe("Post duplicates", () => {
    it("Should return an empty array when there are no duplicate titles", () => {
        const duplicates = getPostDuplicates(postsDuplicates1);

        expect(duplicates).to.be.an('array');
        expect(duplicates).to.be.empty;
    });
    it("Should return array of all duplicated titles", () => {
        const duplicates = getPostDuplicates(postsDuplicates2);

        expect(duplicates).to.be.an('array');
        expect(duplicates.length).to.equal(1);
        expect(duplicates).to.include("title1");
    });
    it("Should return array that contains each duplicate title only once", () => {
        const duplicates = getPostDuplicates(postsDuplicates3);

        expect(duplicates).to.be.an('array');
        expect(duplicates.length).to.equal(1);
        expect(duplicates).to.include("title1");
    });
})