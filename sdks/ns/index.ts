// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AutogenSubdomainArgs, AutogenSubdomainState } from "./autogenSubdomain";
export type AutogenSubdomain = import("./autogenSubdomain").AutogenSubdomain;
export const AutogenSubdomain: typeof import("./autogenSubdomain").AutogenSubdomain = null as any;
utilities.lazyLoad(exports, ["AutogenSubdomain"], () => require("./autogenSubdomain"));

export { AutogenSubdomainDelegationArgs, AutogenSubdomainDelegationState } from "./autogenSubdomainDelegation";
export type AutogenSubdomainDelegation = import("./autogenSubdomainDelegation").AutogenSubdomainDelegation;
export const AutogenSubdomainDelegation: typeof import("./autogenSubdomainDelegation").AutogenSubdomainDelegation = null as any;
utilities.lazyLoad(exports, ["AutogenSubdomainDelegation"], () => require("./autogenSubdomainDelegation"));

export { GetAppConnectionArgs, GetAppConnectionResult, GetAppConnectionOutputArgs } from "./getAppConnection";
export const getAppConnection: typeof import("./getAppConnection").getAppConnection = null as any;
export const getAppConnectionOutput: typeof import("./getAppConnection").getAppConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getAppConnection","getAppConnectionOutput"], () => require("./getAppConnection"));

export { GetAppEnvArgs, GetAppEnvResult, GetAppEnvOutputArgs } from "./getAppEnv";
export const getAppEnv: typeof import("./getAppEnv").getAppEnv = null as any;
export const getAppEnvOutput: typeof import("./getAppEnv").getAppEnvOutput = null as any;
utilities.lazyLoad(exports, ["getAppEnv","getAppEnvOutput"], () => require("./getAppEnv"));

export { GetConnectionArgs, GetConnectionResult, GetConnectionOutputArgs } from "./getConnection";
export const getConnection: typeof import("./getConnection").getConnection = null as any;
export const getConnectionOutput: typeof import("./getConnection").getConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getConnection","getConnectionOutput"], () => require("./getConnection"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetEnvArgs, GetEnvResult, GetEnvOutputArgs } from "./getEnv";
export const getEnv: typeof import("./getEnv").getEnv = null as any;
export const getEnvOutput: typeof import("./getEnv").getEnvOutput = null as any;
utilities.lazyLoad(exports, ["getEnv","getEnvOutput"], () => require("./getEnv"));

export { GetEnvVariablesArgs, GetEnvVariablesResult, GetEnvVariablesOutputArgs } from "./getEnvVariables";
export const getEnvVariables: typeof import("./getEnvVariables").getEnvVariables = null as any;
export const getEnvVariablesOutput: typeof import("./getEnvVariables").getEnvVariablesOutput = null as any;
utilities.lazyLoad(exports, ["getEnvVariables","getEnvVariablesOutput"], () => require("./getEnvVariables"));

export { GetSecretKeysArgs, GetSecretKeysResult, GetSecretKeysOutputArgs } from "./getSecretKeys";
export const getSecretKeys: typeof import("./getSecretKeys").getSecretKeys = null as any;
export const getSecretKeysOutput: typeof import("./getSecretKeys").getSecretKeysOutput = null as any;
utilities.lazyLoad(exports, ["getSecretKeys","getSecretKeysOutput"], () => require("./getSecretKeys"));

export { GetSubdomainArgs, GetSubdomainResult, GetSubdomainOutputArgs } from "./getSubdomain";
export const getSubdomain: typeof import("./getSubdomain").getSubdomain = null as any;
export const getSubdomainOutput: typeof import("./getSubdomain").getSubdomainOutput = null as any;
utilities.lazyLoad(exports, ["getSubdomain","getSubdomainOutput"], () => require("./getSubdomain"));

export { GetWorkspaceResult } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "ns:index/autogenSubdomain:AutogenSubdomain":
                return new AutogenSubdomain(name, <any>undefined, { urn })
            case "ns:index/autogenSubdomainDelegation:AutogenSubdomainDelegation":
                return new AutogenSubdomainDelegation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("ns", "index/autogenSubdomain", _module)
pulumi.runtime.registerResourceModule("ns", "index/autogenSubdomainDelegation", _module)
pulumi.runtime.registerResourcePackage("ns", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:ns") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
