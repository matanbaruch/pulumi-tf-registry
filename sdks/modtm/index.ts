// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetModuleSourceArgs, GetModuleSourceResult, GetModuleSourceOutputArgs } from "./getModuleSource";
export const getModuleSource: typeof import("./getModuleSource").getModuleSource = null as any;
export const getModuleSourceOutput: typeof import("./getModuleSource").getModuleSourceOutput = null as any;
utilities.lazyLoad(exports, ["getModuleSource","getModuleSourceOutput"], () => require("./getModuleSource"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { TelemetryArgs, TelemetryState } from "./telemetry";
export type Telemetry = import("./telemetry").Telemetry;
export const Telemetry: typeof import("./telemetry").Telemetry = null as any;
utilities.lazyLoad(exports, ["Telemetry"], () => require("./telemetry"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "modtm:index/telemetry:Telemetry":
                return new Telemetry(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("modtm", "index/telemetry", _module)
pulumi.runtime.registerResourcePackage("modtm", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:modtm") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
