import { assert, describe, it, expect } from "vitest";
import {
  DataService,
  NotFoundError,
  UnauthorizedError,
  UnauthenticatedError,
  ServerError,
} from "@/services/DataService";

describe("DataService", () => {
  type TestData = {
    foo: string;
    baz: number;
  };

  it("should fetch data", async () => {
    const service = new DataService();
    const response = await service.get<TestData>(
      "https://api.local-test.cureatr.com/test"
    );

    assert.deepEqual(response, { foo: "bar", baz: 1 });
  });

  it("should raise a server error on a 500", async () => {
    const service = new DataService();

    await expect(
      service.get<TestData>("https://api.local-test.cureatr.com/five_hundred")
    ).rejects.toThrowError(ServerError);
  });

  it("should raise an unauthorized error on a 401", async () => {
    const service = new DataService();

    await expect(
      service.get<TestData>("https://api.local-test.cureatr.com/four-oh-one")
    ).rejects.toThrowError(UnauthenticatedError);
  });

  it("should raise an unauthorized error on a 403", async () => {
    const service = new DataService();

    await expect(
      service.get<TestData>("https://api.local-test.cureatr.com/four-oh-three")
    ).rejects.toThrowError(UnauthorizedError);
  });

  it("should raise a not found error on a 404", async () => {
    const service = new DataService();

    await expect(
      service.get<TestData>("https://api.local-test.cureatr.com/four-oh-four")
    ).rejects.toThrowError(NotFoundError);
  });
});
