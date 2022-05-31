import { customError } from "../types/interfaces";
import { customErrorApi } from "./customerrorApi";

describe("Given a customErrorApi function", () => {
  describe("When it's invoked with response status 400 and message 'Invalid username'", () => {
    test("Then it should return 'Invalid username'", () => {
      const error: customError = {
        response: {
          status: 400,
          data: { message: "Invalid username" },
        },
      };
      const expectedMessage = "Invalid username";

      const message = customErrorApi(error);

      expect(message).toEqual(expectedMessage);
    });
  });
});
