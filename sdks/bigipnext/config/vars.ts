// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("bigipnext");

/**
 * URI for BigipNext Device. May also be provided via `BIGIPNEXT_HOST` environment variable.
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * Password for BigipNext Device. May also be provided via `BIGIPNEXT_PASSWORD` environment variable.
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Port Number to be used to make API calls to HOST
 */
export declare const port: number | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.getObject<number>("port");
    },
    enumerable: true,
});

/**
 * Username for BigipNext Device. May also be provided via `BIGIPNEXT_USERNAME` environment variable.
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

