import { assert, describe, it, expect } from "vitest";
import {
  DataService,
  NotFoundError,
  UnauthorizedError,
  UnauthenticatedError,
  ServerError,
} from "@/services/DataService";
import { ConfigService } from "../ConfigService";

describe("DataService", () => {
  type TestData = {
    foo: string;
    baz: number;
  };

  const testConfigService = new ConfigService(
    new Map([["apiRootUrl", "https://api.test.com/"]])
  );
  const dataService = new DataService(testConfigService);

  it("should fetch data", async () => {
    const response = await dataService.get<TestData>("test");

    assert.deepEqual(response, { foo: "bar", baz: 1 });
  });

  it("should raise a server error on a 500", async () => {
    await expect(
      dataService.get<TestData>("five_hundred")
    ).rejects.toThrowError(ServerError);
  });

  it("should raise an unauthorized error on a 401", async () => {
    await expect(dataService.get<TestData>("four-oh-one")).rejects.toThrowError(
      UnauthenticatedError
    );
  });

  it("should raise an unauthorized error on a 403", async () => {
    await expect(
      dataService.get<TestData>("four-oh-three")
    ).rejects.toThrowError(UnauthorizedError);
  });

  it("should raise a not found error on a 404", async () => {
    await expect(
      dataService.get<TestData>("four-oh-four")
    ).rejects.toThrowError(NotFoundError);
  });
});
