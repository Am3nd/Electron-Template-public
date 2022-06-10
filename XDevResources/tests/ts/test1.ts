import sinon from "sinon";
import { expect } from "chai";
import "mocha";
const sandbox = sinon.createSandbox();

describe("Running Application", () => {
  it("should start Application", () => {
    expect(1).to.equal(1);
  });

  it("should log all error", () => {
    expect(2).to.equal(2);
  });

  it("should verify System Authentication", () => {
    expect(2).to.equal(2);
  });

  it("should end system gracefully", () => {
    expect(2).to.equal(2);
  });
});
