// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("jupiterone");

/**
 * JupiterOne account ID to create resources in
 */
export declare const accountId: string | undefined;
Object.defineProperty(exports, "accountId", {
    get() {
        return __config.get("accountId");
    },
    enumerable: true,
});

/**
 * API Key used to make requests to the JupiterOne APIs
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

/**
 * region used for generating the GraphQL endpoint url. If not provided defaults to 'us'
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

