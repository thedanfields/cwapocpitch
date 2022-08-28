import { extend } from "@vue/shared";
import fetch from "cross-fetch";

export interface IDataService {
  get<T>(resourceUrl: string): Promise<T>;
}

type JSONResponse<T> = {
  data?: T;
};

export class ApiError extends Error {}
export class UnauthorizedError extends ApiError {}
export class UnauthenticatedError extends ApiError {}
export class NotFoundError extends ApiError {}
export class ServerError extends ApiError {}

export class DataService implements IDataService {
  async get<T>(resourceUrl: string): Promise<T> {
    const response = await fetch(resourceUrl);

    if (response.ok) {
      const { data }: JSONResponse<T> = await response.json();

      if (data) {
        return data;
      } else {
        return Promise.reject("unable to parse response");
      }
    } else {
      if (response.status >= 500) {
        const errorMessage = await response.text();
        return Promise.reject(new ServerError(errorMessage));
      }
      if (response.status == 401) {
        return Promise.reject(new UnauthenticatedError());
      }
      if (response.status == 403) {
        return Promise.reject(new UnauthorizedError());
      }
      if (response.status == 404) {
        return Promise.reject(new NotFoundError());
      }

      return Promise.reject("unknown error");
    }
  }
}
