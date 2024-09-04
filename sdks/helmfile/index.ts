// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { EmbeddingExampleArgs, EmbeddingExampleState } from "./embeddingExample";
export type EmbeddingExample = import("./embeddingExample").EmbeddingExample;
export const EmbeddingExample: typeof import("./embeddingExample").EmbeddingExample = null as any;
utilities.lazyLoad(exports, ["EmbeddingExample"], () => require("./embeddingExample"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ReleaseArgs, ReleaseState } from "./release";
export type Release = import("./release").Release;
export const Release: typeof import("./release").Release = null as any;
utilities.lazyLoad(exports, ["Release"], () => require("./release"));

export { ReleaseSetArgs, ReleaseSetState } from "./releaseSet";
export type ReleaseSet = import("./releaseSet").ReleaseSet;
export const ReleaseSet: typeof import("./releaseSet").ReleaseSet = null as any;
utilities.lazyLoad(exports, ["ReleaseSet"], () => require("./releaseSet"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "helmfile:index/embeddingExample:EmbeddingExample":
                return new EmbeddingExample(name, <any>undefined, { urn })
            case "helmfile:index/release:Release":
                return new Release(name, <any>undefined, { urn })
            case "helmfile:index/releaseSet:ReleaseSet":
                return new ReleaseSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("helmfile", "index/embeddingExample", _module)
pulumi.runtime.registerResourceModule("helmfile", "index/release", _module)
pulumi.runtime.registerResourceModule("helmfile", "index/releaseSet", _module)
pulumi.runtime.registerResourcePackage("helmfile", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:helmfile") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
