// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("observability");

/**
 * Authentication type selected for observability API requests. Possible values(oauth, headless, service-principal)
 */
export declare const authMethod: string | undefined;
Object.defineProperty(exports, "authMethod", {
    get() {
        return __config.get("authMethod");
    },
    enumerable: true,
});

/**
 * Password to authenticate using headless
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Path to secrets file to authenticate using service-principal
 */
export declare const secretsFile: string | undefined;
Object.defineProperty(exports, "secretsFile", {
    get() {
        return __config.get("secretsFile");
    },
    enumerable: true,
});

/**
 * Tenant ID used to make requests to API
 */
export declare const tenant: string | undefined;
Object.defineProperty(exports, "tenant", {
    get() {
        return __config.get("tenant");
    },
    enumerable: true,
});

/**
 * URL used when authentication eg. <https://mytenant.com>
 */
export declare const url: string | undefined;
Object.defineProperty(exports, "url", {
    get() {
        return __config.get("url");
    },
    enumerable: true,
});

/**
 * Username to authenticate using headless
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

