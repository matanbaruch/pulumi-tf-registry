// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("sematext");

/**
 * Your Sematext API key, if not set using environment variable SEMATEXT_API_KEY.
 */
export declare const sematextApiKey: string | undefined;
Object.defineProperty(exports, "sematextApiKey", {
    get() {
        return __config.get("sematextApiKey");
    },
    enumerable: true,
});

/**
 * The Sematext region, either US or EU.
 */
export declare const sematextRegion: string | undefined;
Object.defineProperty(exports, "sematextRegion", {
    get() {
        return __config.get("sematextRegion");
    },
    enumerable: true,
});

