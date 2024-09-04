// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("civo");

/**
 * The Base URL to use for CIVO API.
 */
export declare const apiEndpoint: string | undefined;
Object.defineProperty(exports, "apiEndpoint", {
    get() {
        return __config.get("apiEndpoint");
    },
    enumerable: true,
});

/**
 * Path to the Civo credentials file. Can be specified using CIVO_CREDENTIAL_FILE environment variable.
 */
export declare const credentialsFile: string | undefined;
Object.defineProperty(exports, "credentialsFile", {
    get() {
        return __config.get("credentialsFile");
    },
    enumerable: true,
});

/**
 * If region is not set, then no region will be used and them you need expensify in every resource even if you expensify
 * here you can overwrite in a resource.
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

/**
 * This is the Civo API token. Alternatively, this can also be specified using `CIVO_TOKEN` environment variable.
 */
export declare const token: string | undefined;
Object.defineProperty(exports, "token", {
    get() {
        return __config.get("token");
    },
    enumerable: true,
});

