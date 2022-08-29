export interface IConfigService {
  apiRootUrl: string;
}

export class ConfigError extends Error {}

export class ConfigService implements IConfigService {
  apiRootUrl: string;

  constructor(configValues?: Map<string, unknown>) {
    this.apiRootUrl =
      configValues?.get("apiRootUrl") || import.meta.env.VITE_API_ROOT_URL;
  }
}
