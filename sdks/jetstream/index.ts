// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ConsumerArgs, ConsumerState } from "./consumer";
export type Consumer = import("./consumer").Consumer;
export const Consumer: typeof import("./consumer").Consumer = null as any;
utilities.lazyLoad(exports, ["Consumer"], () => require("./consumer"));

export { KvBucketArgs, KvBucketState } from "./kvBucket";
export type KvBucket = import("./kvBucket").KvBucket;
export const KvBucket: typeof import("./kvBucket").KvBucket = null as any;
utilities.lazyLoad(exports, ["KvBucket"], () => require("./kvBucket"));

export { KvEntryArgs, KvEntryState } from "./kvEntry";
export type KvEntry = import("./kvEntry").KvEntry;
export const KvEntry: typeof import("./kvEntry").KvEntry = null as any;
utilities.lazyLoad(exports, ["KvEntry"], () => require("./kvEntry"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { StreamArgs, StreamState } from "./stream";
export type Stream = import("./stream").Stream;
export const Stream: typeof import("./stream").Stream = null as any;
utilities.lazyLoad(exports, ["Stream"], () => require("./stream"));


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
            case "jetstream:index/consumer:Consumer":
                return new Consumer(name, <any>undefined, { urn })
            case "jetstream:index/kvBucket:KvBucket":
                return new KvBucket(name, <any>undefined, { urn })
            case "jetstream:index/kvEntry:KvEntry":
                return new KvEntry(name, <any>undefined, { urn })
            case "jetstream:index/stream:Stream":
                return new Stream(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("jetstream", "index/consumer", _module)
pulumi.runtime.registerResourceModule("jetstream", "index/kvBucket", _module)
pulumi.runtime.registerResourceModule("jetstream", "index/kvEntry", _module)
pulumi.runtime.registerResourceModule("jetstream", "index/stream", _module)
pulumi.runtime.registerResourcePackage("jetstream", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:jetstream") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
