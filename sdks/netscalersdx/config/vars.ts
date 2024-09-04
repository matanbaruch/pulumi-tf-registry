// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("netscalersdx");

/**
 * TODO
 */
export declare const headers: {[key: string]: string} | undefined;
Object.defineProperty(exports, "headers", {
    get() {
        return __config.getObject<{[key: string]: string}>("headers");
    },
    enumerable: true,
});

/**
 * NetScaler SDX host. Can be specified with `NETSCALERSDX_HOST` environment variable. This has to start with https://
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * TODO
 */
export declare const jsonLogFormat: boolean | undefined;
Object.defineProperty(exports, "jsonLogFormat", {
    get() {
        return __config.getObject<boolean>("jsonLogFormat");
    },
    enumerable: true,
});

/**
 * Log level (Default is INFO). Can be specified with `NETSCALERSDX_LOG_LEVEL` environment variable.
 */
export declare const logLevel: string | undefined;
Object.defineProperty(exports, "logLevel", {
    get() {
        return __config.get("logLevel");
    },
    enumerable: true,
});

/**
 * NetScaler SDX password. Can be specified with `NETSCALERSDX_PASSWORD` environment variable.
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * TODO
 */
export declare const rootCaPath: string | undefined;
Object.defineProperty(exports, "rootCaPath", {
    get() {
        return __config.get("rootCaPath");
    },
    enumerable: true,
});

/**
 * TODO
 */
export declare const serverName: string | undefined;
Object.defineProperty(exports, "serverName", {
    get() {
        return __config.get("serverName");
    },
    enumerable: true,
});

/**
 * Ignore validity of SDX TLS certificate if true. Can be specified with `NETSCALERSDX_SSL_VERIFY` environment variable.
 */
export declare const sslVerify: boolean | undefined;
Object.defineProperty(exports, "sslVerify", {
    get() {
        return __config.getObject<boolean>("sslVerify");
    },
    enumerable: true,
});

/**
 * NetScaler SDX username. Can be specified with `NETSCALERSDX_USERNAME` environment variable.
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

