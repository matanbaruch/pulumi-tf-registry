// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("sakuracloud");

/**
 * The value of AcceptLanguage header used when calling SakuraCloud API. It can also be sourced from the
 * `SAKURACLOUD_ACCEPT_LANGUAGE` environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const acceptLanguage: string | undefined;
Object.defineProperty(exports, "acceptLanguage", {
    get() {
        return __config.get("acceptLanguage");
    },
    enumerable: true,
});

/**
 * The maximum number of SakuraCloud API calls per second. It can also be sourced from the `SAKURACLOUD_RATE_LIMIT`
 * environment variables, or via a shared credentials file if `profile` is specified. Default:`10`
 */
export declare const apiRequestRateLimit: number | undefined;
Object.defineProperty(exports, "apiRequestRateLimit", {
    get() {
        return __config.getObject<number>("apiRequestRateLimit");
    },
    enumerable: true,
});

/**
 * The timeout seconds for each SakuraCloud API call. It can also be sourced from the `SAKURACLOUD_API_REQUEST_TIMEOUT`
 * environment variables, or via a shared credentials file if `profile` is specified. Default:`300`
 */
export declare const apiRequestTimeout: number | undefined;
Object.defineProperty(exports, "apiRequestTimeout", {
    get() {
        return __config.getObject<number>("apiRequestTimeout");
    },
    enumerable: true,
});

/**
 * The root URL of SakuraCloud API. It can also be sourced from the `SAKURACLOUD_API_ROOT_URL` environment variables, or
 * via a shared credentials file if `profile` is specified. Default:`https://secure.sakura.ad.jp/cloud/zone`
 */
export declare const apiRootUrl: string | undefined;
Object.defineProperty(exports, "apiRootUrl", {
    get() {
        return __config.get("apiRootUrl");
    },
    enumerable: true,
});

/**
 * The name of zone to use as default for global resources. It must be provided, but it can also be sourced from the
 * `SAKURACLOUD_DEFAULT_ZONE` environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const defaultZone: string | undefined;
Object.defineProperty(exports, "defaultZone", {
    get() {
        return __config.get("defaultZone");
    },
    enumerable: true,
});

/**
 * The flag to enable fake of SakuraCloud API call. It is for debugging or developing the provider. It can also be sourced
 * from the `FAKE_MODE` environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const fakeMode: string | undefined;
Object.defineProperty(exports, "fakeMode", {
    get() {
        return __config.get("fakeMode");
    },
    enumerable: true,
});

/**
 * The file path used by SakuraCloud API fake driver for storing fake data. It is for debugging or developing the provider.
 * It can also be sourced from the `FAKE_STORE_PATH` environment variables, or via a shared credentials file if `profile`
 * is specified
 */
export declare const fakeStorePath: string | undefined;
Object.defineProperty(exports, "fakeStorePath", {
    get() {
        return __config.get("fakeStorePath");
    },
    enumerable: true,
});

/**
 * The profile name of your SakuraCloud account. Default:`default`
 */
export declare const profile: string | undefined;
Object.defineProperty(exports, "profile", {
    get() {
        return __config.get("profile");
    },
    enumerable: true,
});

/**
 * The maximum number of API call retries used when SakuraCloud API returns status code `423` or `503`. It can also be
 * sourced from the `SAKURACLOUD_RETRY_MAX` environment variables, or via a shared credentials file if `profile` is
 * specified. Default:`100`
 */
export declare const retryMax: number | undefined;
Object.defineProperty(exports, "retryMax", {
    get() {
        return __config.getObject<number>("retryMax");
    },
    enumerable: true,
});

/**
 * The maximum wait interval(in seconds) for retrying API call used when SakuraCloud API returns status code `423` or
 * `503`. It can also be sourced from the `SAKURACLOUD_RETRY_WAIT_MAX` environment variables, or via a shared credentials
 * file if `profile` is specified
 */
export declare const retryWaitMax: number | undefined;
Object.defineProperty(exports, "retryWaitMax", {
    get() {
        return __config.getObject<number>("retryWaitMax");
    },
    enumerable: true,
});

/**
 * The minimum wait interval(in seconds) for retrying API call used when SakuraCloud API returns status code `423` or
 * `503`. It can also be sourced from the `SAKURACLOUD_RETRY_WAIT_MIN` environment variables, or via a shared credentials
 * file if `profile` is specified
 */
export declare const retryWaitMin: number | undefined;
Object.defineProperty(exports, "retryWaitMin", {
    get() {
        return __config.getObject<number>("retryWaitMin");
    },
    enumerable: true,
});

/**
 * The API secret of your SakuraCloud account. It must be provided, but it can also be sourced from the
 * `SAKURACLOUD_ACCESS_TOKEN_SECRET` environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const secret: string | undefined;
Object.defineProperty(exports, "secret", {
    get() {
        return __config.get("secret");
    },
    enumerable: true,
});

/**
 * The API token of your SakuraCloud account. It must be provided, but it can also be sourced from the
 * `SAKURACLOUD_ACCESS_TOKEN` environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const token: string | undefined;
Object.defineProperty(exports, "token", {
    get() {
        return __config.get("token");
    },
    enumerable: true,
});

/**
 * The flag to enable output trace log. It can also be sourced from the `SAKURACLOUD_TRACE` environment variables, or via a
 * shared credentials file if `profile` is specified
 */
export declare const trace: string | undefined;
Object.defineProperty(exports, "trace", {
    get() {
        return __config.get("trace");
    },
    enumerable: true,
});

/**
 * The name of zone to use as default. It must be provided, but it can also be sourced from the `SAKURACLOUD_ZONE`
 * environment variables, or via a shared credentials file if `profile` is specified
 */
export declare const zone: string | undefined;
Object.defineProperty(exports, "zone", {
    get() {
        return __config.get("zone");
    },
    enumerable: true,
});

/**
 * A list of available SakuraCloud zone name. It can also be sourced via a shared credentials file if `profile` is
 * specified. Default:[`is1a`, `is1b`, `tk1a`, `tk1v`]
 */
export declare const zones: string[] | undefined;
Object.defineProperty(exports, "zones", {
    get() {
        return __config.getObject<string[]>("zones");
    },
    enumerable: true,
});

