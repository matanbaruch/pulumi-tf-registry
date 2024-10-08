// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { TemplateArgs, TemplateState } from "./template";
export type Template = import("./template").Template;
export const Template: typeof import("./template").Template = null as any;
utilities.lazyLoad(exports, ["Template"], () => require("./template"));

export { TemplateCredentialArgs, TemplateCredentialState } from "./templateCredential";
export type TemplateCredential = import("./templateCredential").TemplateCredential;
export const TemplateCredential: typeof import("./templateCredential").TemplateCredential = null as any;
utilities.lazyLoad(exports, ["TemplateCredential"], () => require("./templateCredential"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "transloadit:index/template:Template":
                return new Template(name, <any>undefined, { urn })
            case "transloadit:index/templateCredential:TemplateCredential":
                return new TemplateCredential(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("transloadit", "index/template", _module)
pulumi.runtime.registerResourceModule("transloadit", "index/templateCredential", _module)
pulumi.runtime.registerResourcePackage("transloadit", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:transloadit") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
