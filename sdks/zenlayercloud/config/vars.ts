// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("zenlayercloud");

/**
 * Access Key Id
 */
export declare const accessKeyId: string | undefined;
Object.defineProperty(exports, "accessKeyId", {
    get() {
        return __config.get("accessKeyId");
    },
    enumerable: true,
});

/**
 * Access Key Password
 */
export declare const accessKeyPassword: string | undefined;
Object.defineProperty(exports, "accessKeyPassword", {
    get() {
        return __config.get("accessKeyPassword");
    },
    enumerable: true,
});

/**
 * The maximum timeout of the client request.
 */
export declare const clientTimeout: number | undefined;
Object.defineProperty(exports, "clientTimeout", {
    get() {
        return __config.getObject<number>("clientTimeout");
    },
    enumerable: true,
});

/**
 * The root domain of the API request, Default is `console.zenlayer.com`.
 */
export declare const domain: string | undefined;
Object.defineProperty(exports, "domain", {
    get() {
        return __config.get("domain");
    },
    enumerable: true,
});

/**
 * The scheme of the API request. Valid values: `HTTP` and `HTTPS`. Default is `HTTPS`.
 */
export declare const scheme: string | undefined;
Object.defineProperty(exports, "scheme", {
    get() {
        return __config.get("scheme");
    },
    enumerable: true,
});

