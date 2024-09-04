// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetEnvironmentVariableArgs, GetEnvironmentVariableResult, GetEnvironmentVariableOutputArgs } from "./getEnvironmentVariable";
export const getEnvironmentVariable: typeof import("./getEnvironmentVariable").getEnvironmentVariable = null as any;
export const getEnvironmentVariableOutput: typeof import("./getEnvironmentVariable").getEnvironmentVariableOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironmentVariable","getEnvironmentVariableOutput"], () => require("./getEnvironmentVariable"));

export { GetNameArgs, GetNameResult, GetNameOutputArgs } from "./getName";
export const getName: typeof import("./getName").getName = null as any;
export const getNameOutput: typeof import("./getName").getNameOutput = null as any;
utilities.lazyLoad(exports, ["getName","getNameOutput"], () => require("./getName"));

export { NameArgs, NameState } from "./name";
export type Name = import("./name").Name;
export const Name: typeof import("./name").Name = null as any;
utilities.lazyLoad(exports, ["Name"], () => require("./name"));

export { NamingConventionArgs, NamingConventionState } from "./namingConvention";
export type NamingConvention = import("./namingConvention").NamingConvention;
export const NamingConvention: typeof import("./namingConvention").NamingConvention = null as any;
utilities.lazyLoad(exports, ["NamingConvention"], () => require("./namingConvention"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azurecaf:index/name:Name":
                return new Name(name, <any>undefined, { urn })
            case "azurecaf:index/namingConvention:NamingConvention":
                return new NamingConvention(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azurecaf", "index/name", _module)
pulumi.runtime.registerResourceModule("azurecaf", "index/namingConvention", _module)
pulumi.runtime.registerResourcePackage("azurecaf", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:azurecaf") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
