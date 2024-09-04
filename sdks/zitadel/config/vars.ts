// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("zitadel");

/**
 * Domain used to connect to the ZITADEL instance
 */
export declare const domain: string | undefined;
Object.defineProperty(exports, "domain", {
    get() {
        return __config.get("domain");
    },
    enumerable: true,
});

/**
 * Use insecure connection
 */
export declare const insecure: boolean | undefined;
Object.defineProperty(exports, "insecure", {
    get() {
        return __config.getObject<boolean>("insecure");
    },
    enumerable: true,
});

/**
 * Path to the file containing credentials to connect to ZITADEL. Either 'jwt_profile_file' or 'jwt_profile_json' is
 * required
 */
export declare const jwtProfileFile: string | undefined;
Object.defineProperty(exports, "jwtProfileFile", {
    get() {
        return __config.get("jwtProfileFile");
    },
    enumerable: true,
});

/**
 * JSON value of credentials to connect to ZITADEL. Either 'jwt_profile_file' or 'jwt_profile_json' is required
 */
export declare const jwtProfileJson: string | undefined;
Object.defineProperty(exports, "jwtProfileJson", {
    get() {
        return __config.get("jwtProfileJson");
    },
    enumerable: true,
});

/**
 * Used port if not the default ports 80 or 443 are configured
 */
export declare const port: string | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.get("port");
    },
    enumerable: true,
});

/**
 * Path to the file containing credentials to connect to ZITADEL
 */
export declare const token: string | undefined;
Object.defineProperty(exports, "token", {
    get() {
        return __config.get("token");
    },
    enumerable: true,
});

