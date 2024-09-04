// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("versadirector");

/**
 * IP Address for versadirector, May also be provided via VERSA_DIRECTOR_HOST environment variable.
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * OAUTH2 Client-ID for authentication, May also be provided via VERSA_DIRECTOR_OAUTH_CLIENT_ID environment variable.
 */
export declare const oauthClientId: string | undefined;
Object.defineProperty(exports, "oauthClientId", {
    get() {
        return __config.get("oauthClientId");
    },
    enumerable: true,
});

/**
 * OAUTH2 Client-secret for authentication, May also be provided via VERSA_DIRECTOR_OAUTH_CLIENT_SECRET environment
 * variable.
 */
export declare const oauthClientSecret: string | undefined;
Object.defineProperty(exports, "oauthClientSecret", {
    get() {
        return __config.get("oauthClientSecret");
    },
    enumerable: true,
});

/**
 * Grant-Type for OAUTH2 authentication, May also be provided via VERSA_DIRECTOR_OAUTH_GRANT_TYPE environment variable.
 */
export declare const oauthGrantType: string | undefined;
Object.defineProperty(exports, "oauthGrantType", {
    get() {
        return __config.get("oauthGrantType");
    },
    enumerable: true,
});

/**
 * Password for versadirector, May also be provided via VERSA_DIRECTOR_PASSWORD environment variable.
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * Port for versadirector, May also be provided via VERSA_DIRECTOR_PORT environment variable.
 */
export declare const port: string | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.get("port");
    },
    enumerable: true,
});

/**
 * Username for versadirector, May also be provided via VERSA_DIRECTOR_USERNAME environment variable.
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

