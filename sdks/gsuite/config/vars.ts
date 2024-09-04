// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("gsuite");

export declare const credentials: string | undefined;
Object.defineProperty(exports, "credentials", {
    get() {
        return __config.get("credentials");
    },
    enumerable: true,
});

export declare const customerId: string | undefined;
Object.defineProperty(exports, "customerId", {
    get() {
        return __config.get("customerId");
    },
    enumerable: true,
});

export declare const impersonatedUserEmail: string | undefined;
Object.defineProperty(exports, "impersonatedUserEmail", {
    get() {
        return __config.get("impersonatedUserEmail");
    },
    enumerable: true,
});

export declare const oauthScopes: string[] | undefined;
Object.defineProperty(exports, "oauthScopes", {
    get() {
        return __config.getObject<string[]>("oauthScopes");
    },
    enumerable: true,
});

export declare const timeoutMinutes: number | undefined;
Object.defineProperty(exports, "timeoutMinutes", {
    get() {
        return __config.getObject<number>("timeoutMinutes");
    },
    enumerable: true,
});

export declare const updateExisting: boolean | undefined;
Object.defineProperty(exports, "updateExisting", {
    get() {
        return __config.getObject<boolean>("updateExisting");
    },
    enumerable: true,
});

