import { PageSideConfig, GetIdWebSdkComponent } from './index';
declare const createPublicTokenProvider: (apiUrl: string, apiKey: string) => () => Promise<any>;
declare function init(config: PageSideConfig): Promise<GetIdWebSdkComponent>;
export { init, createPublicTokenProvider };
