// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("signalfx");

/**
 * API URL for your Splunk Observability Cloud org, may include a realm
 */
export declare const apiUrl: string | undefined;
Object.defineProperty(exports, "apiUrl", {
    get() {
        return __config.get("apiUrl");
    },
    enumerable: true,
});

/**
 * Splunk Observability Cloud auth token
 */
export declare const authToken: string | undefined;
Object.defineProperty(exports, "authToken", {
    get() {
        return __config.get("authToken");
    },
    enumerable: true,
});

/**
 * Application URL for your Splunk Observability Cloud org, often customized for organizations using SSO
 */
export declare const customAppUrl: string | undefined;
Object.defineProperty(exports, "customAppUrl", {
    get() {
        return __config.get("customAppUrl");
    },
    enumerable: true,
});

/**
 * Max retries for a single HTTP call. Defaults to 4
 */
export declare const retryMaxAttempts: number | undefined;
Object.defineProperty(exports, "retryMaxAttempts", {
    get() {
        return __config.getObject<number>("retryMaxAttempts");
    },
    enumerable: true,
});

/**
 * Maximum retry wait for a single HTTP call in seconds. Defaults to 30
 */
export declare const retryWaitMaxSeconds: number | undefined;
Object.defineProperty(exports, "retryWaitMaxSeconds", {
    get() {
        return __config.getObject<number>("retryWaitMaxSeconds");
    },
    enumerable: true,
});

/**
 * Minimum retry wait for a single HTTP call in seconds. Defaults to 1
 */
export declare const retryWaitMinSeconds: number | undefined;
Object.defineProperty(exports, "retryWaitMinSeconds", {
    get() {
        return __config.getObject<number>("retryWaitMinSeconds");
    },
    enumerable: true,
});

/**
 * Timeout duration for a single HTTP call in seconds. Defaults to 120
 */
export declare const timeoutSeconds: number | undefined;
Object.defineProperty(exports, "timeoutSeconds", {
    get() {
        return __config.getObject<number>("timeoutSeconds");
    },
    enumerable: true,
});

