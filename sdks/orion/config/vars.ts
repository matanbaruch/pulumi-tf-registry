// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("orion");

/**
 * Hostname for orion server
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * API Password
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Use https?
 */
export declare const ssl: boolean | undefined;
Object.defineProperty(exports, "ssl", {
    get() {
        return __config.getObject<boolean>("ssl");
    },
    enumerable: true,
});

/**
 * API User
 */
export declare const user: string | undefined;
Object.defineProperty(exports, "user", {
    get() {
        return __config.get("user");
    },
    enumerable: true,
});

