// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("skytap");

/**
 * The Skytap API token. May also be specified by the `SKYTAP_API_TOKEN` shell environment variable
 */
export declare const apiToken: string | undefined;
Object.defineProperty(exports, "apiToken", {
    get() {
        return __config.get("apiToken");
    },
    enumerable: true,
});

/**
 * The Skytap username. May also be specified by the `SKYTAP_USERNAME` shell environment variable
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

