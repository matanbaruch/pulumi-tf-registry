// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("dsm");

export declare const acctId: string | undefined;
Object.defineProperty(exports, "acctId", {
    get() {
        return __config.get("acctId");
    },
    enumerable: true,
});

export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

export declare const awsProfile: string | undefined;
Object.defineProperty(exports, "awsProfile", {
    get() {
        return __config.get("awsProfile");
    },
    enumerable: true,
});

export declare const awsRegion: string | undefined;
Object.defineProperty(exports, "awsRegion", {
    get() {
        return __config.get("awsRegion");
    },
    enumerable: true,
});

export declare const azureRegion: string | undefined;
Object.defineProperty(exports, "azureRegion", {
    get() {
        return __config.get("azureRegion");
    },
    enumerable: true,
});

export declare const endpoint: string | undefined;
Object.defineProperty(exports, "endpoint", {
    get() {
        return __config.get("endpoint");
    },
    enumerable: true,
});

export declare const insecure: boolean | undefined;
Object.defineProperty(exports, "insecure", {
    get() {
        return __config.getObject<boolean>("insecure");
    },
    enumerable: true,
});

export declare const ldapName: string | undefined;
Object.defineProperty(exports, "ldapName", {
    get() {
        return __config.get("ldapName");
    },
    enumerable: true,
});

export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

export declare const port: number | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.getObject<number>("port");
    },
    enumerable: true,
});

export declare const timeout: number | undefined;
Object.defineProperty(exports, "timeout", {
    get() {
        return __config.getObject<number>("timeout");
    },
    enumerable: true,
});

export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

