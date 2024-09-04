// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("scaleway");

/**
 * The Scaleway access key.
 */
export declare const accessKey: string | undefined;
Object.defineProperty(exports, "accessKey", {
    get() {
        return __config.get("accessKey");
    },
    enumerable: true,
});

/**
 * The Scaleway API URL to use.
 */
export declare const apiUrl: string | undefined;
Object.defineProperty(exports, "apiUrl", {
    get() {
        return __config.get("apiUrl");
    },
    enumerable: true,
});

/**
 * The Scaleway organization ID.
 */
export declare const organizationId: string | undefined;
Object.defineProperty(exports, "organizationId", {
    get() {
        return __config.get("organizationId");
    },
    enumerable: true,
});

/**
 * The Scaleway profile to use.
 */
export declare const profile: string | undefined;
Object.defineProperty(exports, "profile", {
    get() {
        return __config.get("profile");
    },
    enumerable: true,
});

/**
 * The Scaleway project ID.
 */
export declare const projectId: string | undefined;
Object.defineProperty(exports, "projectId", {
    get() {
        return __config.get("projectId");
    },
    enumerable: true,
});

/**
 * The region you want to attach the resource to
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

/**
 * The Scaleway secret Key.
 */
export declare const secretKey: string | undefined;
Object.defineProperty(exports, "secretKey", {
    get() {
        return __config.get("secretKey");
    },
    enumerable: true,
});

/**
 * The zone you want to attach the resource to
 */
export declare const zone: string | undefined;
Object.defineProperty(exports, "zone", {
    get() {
        return __config.get("zone");
    },
    enumerable: true,
});

