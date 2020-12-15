const { isUserExists } = require("../components/User");

describe("isUserExists()", () => {
  it("should return true", () => {
    expect(isUserExists()).toBeTruthy();
    expect(isUserExists()).toEqual(true);
  });
});
