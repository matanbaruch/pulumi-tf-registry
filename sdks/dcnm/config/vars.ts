// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("dcnm");

/**
 * Expiration time in miliseconds for DCNM/NDFC server
 */
export declare const expiry: number | undefined;
Object.defineProperty(exports, "expiry", {
    get() {
        return __config.getObject<number>("expiry");
    },
    enumerable: true,
});

/**
 * Allow insecure HTTPS client
 */
export declare const insecure: boolean | undefined;
Object.defineProperty(exports, "insecure", {
    get() {
        return __config.getObject<boolean>("insecure");
    },
    enumerable: true,
});

/**
 * Password for the DCNM/NDFC account
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * NDFC/DCNM platfom selection ND/DCNM
 */
export declare const platform: string | undefined;
Object.defineProperty(exports, "platform", {
    get() {
        return __config.get("platform");
    },
    enumerable: true,
});

/**
 * Proxy server URL for DCNM/NDFC
 */
export declare const proxyUrl: string | undefined;
Object.defineProperty(exports, "proxyUrl", {
    get() {
        return __config.get("proxyUrl");
    },
    enumerable: true,
});

/**
 * URL for the DCNM/NDFC server
 */
export declare const url: string | undefined;
Object.defineProperty(exports, "url", {
    get() {
        return __config.get("url");
    },
    enumerable: true,
});

/**
 * Username for the DCNM/NDFC account
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

