import fetch from "cross-fetch";
import { ConfigError, type IConfigService } from "./ConfigService";

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
  configService: IConfigService;
  constructor(configService: IConfigService) {
    this.configService = configService;
  }
  async get<T>(resourceUrl: string): Promise<T> {
    if (!this.configService.apiRootUrl) {
      return Promise.reject(new ConfigError("missing apiRootUrl"));
    }

    const response = await fetch(this.configService.apiRootUrl + resourceUrl);

    if (response.ok) {
      const { data }: JSONResponse<T> = await response.json();

      if (data) {
        return data;
      } else {
        return Promise.reject(`unable to parse response from ${resourceUrl}`);
      }
    } else {
      const errorMessage = await response.text();
      if (response.status >= 500) {
        return Promise.reject(new ServerError(errorMessage));
      }
      if (response.status == 401) {
        return Promise.reject(new UnauthenticatedError(errorMessage));
      }
      if (response.status == 403) {
        return Promise.reject(new UnauthorizedError(errorMessage));
      }
      if (response.status == 404) {
        return Promise.reject(new NotFoundError(errorMessage));
      }

      return Promise.reject("unknown error");
    }
  }
}
