// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("panos");

/**
 * Additional HTTP headers to send with API calls
 */
export declare const additionalHeaders: {[key: string]: string} | undefined;
Object.defineProperty(exports, "additionalHeaders", {
    get() {
        return __config.getObject<{[key: string]: string}>("additionalHeaders");
    },
    enumerable: true,
});

/**
 * The api key of the firewall
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

/**
 * Hostname/IP address of the Palo Alto Networks firewall to connect to
 */
export declare const hostname: string | undefined;
Object.defineProperty(exports, "hostname", {
    get() {
        return __config.get("hostname");
    },
    enumerable: true,
});

/**
 * Retrieve the provider configuration from this JSON file
 */
export declare const jsonConfigFile: string | undefined;
Object.defineProperty(exports, "jsonConfigFile", {
    get() {
        return __config.get("jsonConfigFile");
    },
    enumerable: true,
});

/**
 * Logging options for the API connection
 */
export declare const loggings: string[] | undefined;
Object.defineProperty(exports, "loggings", {
    get() {
        return __config.getObject<string[]>("loggings");
    },
    enumerable: true,
});

/**
 * The password (not used if the API key is set)
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * If the port is non-standard for the protocol, the port number to use
 */
export declare const port: number | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.getObject<number>("port");
    },
    enumerable: true,
});

/**
 * The protocol (https or http)
 */
export declare const protocol: string | undefined;
Object.defineProperty(exports, "protocol", {
    get() {
        return __config.get("protocol");
    },
    enumerable: true,
});

/**
 * Target setting (NGFW serial number)
 */
export declare const target: string | undefined;
Object.defineProperty(exports, "target", {
    get() {
        return __config.get("target");
    },
    enumerable: true,
});

/**
 * The timeout for all communications with the firewall
 */
export declare const timeout: number | undefined;
Object.defineProperty(exports, "timeout", {
    get() {
        return __config.getObject<number>("timeout");
    },
    enumerable: true,
});

/**
 * The username (not used if the API key is set)
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

/**
 * For HTTPS protocol connections, verify the certificate
 */
export declare const verifyCertificate: boolean | undefined;
Object.defineProperty(exports, "verifyCertificate", {
    get() {
        return __config.getObject<boolean>("verifyCertificate");
    },
    enumerable: true,
});

