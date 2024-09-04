// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("lambdabased");

export declare const assumeRole: outputs.config.AssumeRole | undefined;
Object.defineProperty(exports, "assumeRole", {
    get() {
        return __config.getObject<outputs.config.AssumeRole>("assumeRole");
    },
    enumerable: true,
});

export declare const profile: string | undefined;
Object.defineProperty(exports, "profile", {
    get() {
        return __config.get("profile");
    },
    enumerable: true,
});

export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

