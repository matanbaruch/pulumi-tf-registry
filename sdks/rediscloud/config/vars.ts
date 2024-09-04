// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("rediscloud");

/**
 * This is the Redis Cloud API key. It must be provided but can also be set by the `REDISCLOUD_ACCESS_KEY` environment
 * variable.
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

/**
 * This is the Redis Cloud API secret key. It must be provided but can also be set by the `REDISCLOUD_SECRET_KEY`
 * environment variable.
 */
export declare const secretKey: string | undefined;
Object.defineProperty(exports, "secretKey", {
    get() {
        return __config.get("secretKey");
    },
    enumerable: true,
});

/**
 * This is the URL of Redis Cloud and will default to `https://api.redislabs.com/v1`. This can also be set by the
 * `REDISCLOUD_URL` environment variable.
 */
export declare const url: string | undefined;
Object.defineProperty(exports, "url", {
    get() {
        return __config.get("url");
    },
    enumerable: true,
});

