// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("cloudeos");

/**
 * CVaaS Domain name
 */
export declare const cvaasDomain: string | undefined;
Object.defineProperty(exports, "cvaasDomain", {
    get() {
        return __config.get("cvaasDomain");
    },
    enumerable: true,
});

export declare const cvaasServer: string | undefined;
Object.defineProperty(exports, "cvaasServer", {
    get() {
        return __config.get("cvaasServer");
    },
    enumerable: true,
});

/**
 * Service account web token
 */
export declare const serviceAccountWebToken: string | undefined;
Object.defineProperty(exports, "serviceAccountWebToken", {
    get() {
        return __config.get("serviceAccountWebToken");
    },
    enumerable: true,
});

