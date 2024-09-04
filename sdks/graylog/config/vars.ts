// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("graylog");

export declare const apiVersion: string | undefined;
Object.defineProperty(exports, "apiVersion", {
    get() {
        return __config.get("apiVersion");
    },
    enumerable: true,
});

export declare const authName: string | undefined;
Object.defineProperty(exports, "authName", {
    get() {
        return __config.get("authName");
    },
    enumerable: true,
});

export declare const authPassword: string | undefined;
Object.defineProperty(exports, "authPassword", {
    get() {
        return __config.get("authPassword");
    },
    enumerable: true,
});

export declare const webEndpointUri: string | undefined;
Object.defineProperty(exports, "webEndpointUri", {
    get() {
        return __config.get("webEndpointUri");
    },
    enumerable: true,
});

export declare const xRequestedBy: string | undefined;
Object.defineProperty(exports, "xRequestedBy", {
    get() {
        return __config.get("xRequestedBy");
    },
    enumerable: true,
});

