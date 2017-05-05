describe("AskTheExpert basic tests", function() {
    it("should have  a title", function() {
        browser.get("http://localhost:8001");
        expect(browser.getTitle()).toEqual("Ask The Expert");
    });
});