// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("rke");

export declare const debug: boolean | undefined;
Object.defineProperty(exports, "debug", {
    get() {
        return __config.getObject<boolean>("debug");
    },
    enumerable: true,
});

export declare const logFile: string | undefined;
Object.defineProperty(exports, "logFile", {
    get() {
        return __config.get("logFile");
    },
    enumerable: true,
});

