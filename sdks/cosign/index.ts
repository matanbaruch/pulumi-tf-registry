// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AttestArgs, AttestState } from "./attest";
export type Attest = import("./attest").Attest;
export const Attest: typeof import("./attest").Attest = null as any;
utilities.lazyLoad(exports, ["Attest"], () => require("./attest"));

export { CopyArgs, CopyState } from "./copy";
export type Copy = import("./copy").Copy;
export const Copy: typeof import("./copy").Copy = null as any;
utilities.lazyLoad(exports, ["Copy"], () => require("./copy"));

export { GetVerifyArgs, GetVerifyResult, GetVerifyOutputArgs } from "./getVerify";
export const getVerify: typeof import("./getVerify").getVerify = null as any;
export const getVerifyOutput: typeof import("./getVerify").getVerifyOutput = null as any;
utilities.lazyLoad(exports, ["getVerify","getVerifyOutput"], () => require("./getVerify"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { SignArgs, SignState } from "./sign";
export type Sign = import("./sign").Sign;
export const Sign: typeof import("./sign").Sign = null as any;
utilities.lazyLoad(exports, ["Sign"], () => require("./sign"));


// Export sub-modules:
import * as types from "./types";

export {
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "cosign:index/attest:Attest":
                return new Attest(name, <any>undefined, { urn })
            case "cosign:index/copy:Copy":
                return new Copy(name, <any>undefined, { urn })
            case "cosign:index/sign:Sign":
                return new Sign(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("cosign", "index/attest", _module)
pulumi.runtime.registerResourceModule("cosign", "index/copy", _module)
pulumi.runtime.registerResourceModule("cosign", "index/sign", _module)
pulumi.runtime.registerResourcePackage("cosign", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:cosign") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
