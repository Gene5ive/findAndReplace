describe('findAndReplace', function () {
  it("takes a string and two words, finds the first word in the string and replaces it with the second word", function () {
    expect(findAndReplace("this is a string", "is", "was")).to.eql("this was a string");
  });
});
