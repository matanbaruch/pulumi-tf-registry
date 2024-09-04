// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("vra7");

/**
 * host name.domain name of the vRealize Automation server, for example, mycompany.mktg.mydomain.com.
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * Specify whether to validate TLS certificates.
 */
export declare const insecure: boolean | undefined;
Object.defineProperty(exports, "insecure", {
    get() {
        return __config.getObject<boolean>("insecure");
    },
    enumerable: true,
});

/**
 * Tenant administrator password.
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Specifies the tenant URL token determined by the system administratorwhen creating the tenant, for example, support.
 */
export declare const tenant: string | undefined;
Object.defineProperty(exports, "tenant", {
    get() {
        return __config.get("tenant");
    },
    enumerable: true,
});

/**
 * Tenant administrator username.
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

