// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("imagetest");

export declare const harnesses: outputs.config.Harnesses | undefined;
Object.defineProperty(exports, "harnesses", {
    get() {
        return __config.getObject<outputs.config.Harnesses>("harnesses");
    },
    enumerable: true,
});

export declare const labels: {[key: string]: string} | undefined;
Object.defineProperty(exports, "labels", {
    get() {
        return __config.getObject<{[key: string]: string}>("labels");
    },
    enumerable: true,
});

export declare const log: outputs.config.Log | undefined;
Object.defineProperty(exports, "log", {
    get() {
        return __config.getObject<outputs.config.Log>("log");
    },
    enumerable: true,
});

