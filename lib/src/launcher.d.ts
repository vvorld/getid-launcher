import { PageSideConfig, GetIdWebSdkComponent } from './index';
declare const createPublicTokenProvider: (apiUrl: string, apiKey: string) => () => Promise<any>;
export declare function prepareScriptLink(scriptLink: string, { fallbackVersion, scriptSuffix, versionSuffix, defaultLink }: {
    fallbackVersion: string;
    scriptSuffix: string;
    versionSuffix: string;
    defaultLink: string;
}): string;
declare function init(config: PageSideConfig): Promise<GetIdWebSdkComponent>;
export { init, createPublicTokenProvider };
