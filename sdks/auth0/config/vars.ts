// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("auth0");

/**
 * Your Auth0 [management api access
 * token](https://auth0.com/docs/security/tokens/access-tokens/management-api-access-tokens). It can also be sourced from
 * the `AUTH0_API_TOKEN` environment variable. It can be used instead of `client_id` + `client_secret`. If both are
 * specified, `api_token` will be used over `client_id` + `client_secret` fields.
 */
export declare const apiToken: string | undefined;
Object.defineProperty(exports, "apiToken", {
    get() {
        return __config.get("apiToken");
    },
    enumerable: true,
});

/**
 * Your Auth0 audience when using a custom domain. It can also be sourced from the `AUTH0_AUDIENCE` environment variable.
 */
export declare const audience: string | undefined;
Object.defineProperty(exports, "audience", {
    get() {
        return __config.get("audience");
    },
    enumerable: true,
});

/**
 * Your Auth0 client ID. It can also be sourced from the `AUTH0_CLIENT_ID` environment variable.
 */
export declare const clientId: string | undefined;
Object.defineProperty(exports, "clientId", {
    get() {
        return __config.get("clientId");
    },
    enumerable: true,
});

/**
 * Your Auth0 client secret. It can also be sourced from the `AUTH0_CLIENT_SECRET` environment variable.
 */
export declare const clientSecret: string | undefined;
Object.defineProperty(exports, "clientSecret", {
    get() {
        return __config.get("clientSecret");
    },
    enumerable: true,
});

/**
 * Indicates whether to turn on debug mode.
 */
export declare const debug: boolean | undefined;
Object.defineProperty(exports, "debug", {
    get() {
        return __config.getObject<boolean>("debug");
    },
    enumerable: true,
});

/**
 * Your Auth0 domain name. It can also be sourced from the `AUTH0_DOMAIN` environment variable.
 */
export declare const domain: string | undefined;
Object.defineProperty(exports, "domain", {
    get() {
        return __config.get("domain");
    },
    enumerable: true,
});

