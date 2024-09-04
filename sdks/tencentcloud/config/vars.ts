// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("tencentcloud");

export declare const assumeRole: outputs.config.AssumeRole | undefined;
Object.defineProperty(exports, "assumeRole", {
    get() {
        return __config.getObject<outputs.config.AssumeRole>("assumeRole");
    },
    enumerable: true,
});

export declare const assumeRoleWithSaml: outputs.config.AssumeRoleWithSaml | undefined;
Object.defineProperty(exports, "assumeRoleWithSaml", {
    get() {
        return __config.getObject<outputs.config.AssumeRoleWithSaml>("assumeRoleWithSaml");
    },
    enumerable: true,
});

export declare const assumeRoleWithWebIdentity: outputs.config.AssumeRoleWithWebIdentity | undefined;
Object.defineProperty(exports, "assumeRoleWithWebIdentity", {
    get() {
        return __config.getObject<outputs.config.AssumeRoleWithWebIdentity>("assumeRoleWithWebIdentity");
    },
    enumerable: true,
});

/**
 * The name of the CVM instance CAM role. It can be sourced from the `TENCENTCLOUD_CAM_ROLE_NAME` environment variable.
 */
export declare const camRoleName: string | undefined;
Object.defineProperty(exports, "camRoleName", {
    get() {
        return __config.get("camRoleName");
    },
    enumerable: true,
});

/**
 * The root domain of the API request, Default is `tencentcloudapi.com`.
 */
export declare const domain: string | undefined;
Object.defineProperty(exports, "domain", {
    get() {
        return __config.get("domain");
    },
    enumerable: true,
});

/**
 * Whether to enable pod oidc.
 */
export declare const enablePodOidc: boolean | undefined;
Object.defineProperty(exports, "enablePodOidc", {
    get() {
        return __config.getObject<boolean>("enablePodOidc");
    },
    enumerable: true,
});

/**
 * The profile name as set in the shared credentials. It can also be sourced from the `TENCENTCLOUD_PROFILE` environment
 * variable. If not set, the default profile created with `tccli configure` will be used.
 */
export declare const profile: string | undefined;
Object.defineProperty(exports, "profile", {
    get() {
        return __config.get("profile");
    },
    enumerable: true,
});

/**
 * The protocol of the API request. Valid values: `HTTP` and `HTTPS`. Default is `HTTPS`.
 */
export declare const protocol: string | undefined;
Object.defineProperty(exports, "protocol", {
    get() {
        return __config.get("protocol");
    },
    enumerable: true,
});

/**
 * This is the TencentCloud region. It can also be sourced from the `TENCENTCLOUD_REGION` environment variables. The
 * default input value is ap-guangzhou.
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

/**
 * This is the TencentCloud access key. It can also be sourced from the `TENCENTCLOUD_SECRET_ID` environment variable.
 */
export declare const secretId: string | undefined;
Object.defineProperty(exports, "secretId", {
    get() {
        return __config.get("secretId");
    },
    enumerable: true,
});

/**
 * This is the TencentCloud secret key. It can also be sourced from the `TENCENTCLOUD_SECRET_KEY` environment variable.
 */
export declare const secretKey: string | undefined;
Object.defineProperty(exports, "secretKey", {
    get() {
        return __config.get("secretKey");
    },
    enumerable: true,
});

/**
 * TencentCloud Security Token of temporary access credentials. It can be sourced from the `TENCENTCLOUD_SECURITY_TOKEN`
 * environment variable. Notice: for supported products, please refer to: [temporary key supported
 * products](https://intl.cloud.tencent.com/document/product/598/10588).
 */
export declare const securityToken: string | undefined;
Object.defineProperty(exports, "securityToken", {
    get() {
        return __config.get("securityToken");
    },
    enumerable: true,
});

/**
 * The directory of the shared credentials. It can also be sourced from the `TENCENTCLOUD_SHARED_CREDENTIALS_DIR`
 * environment variable. If not set this defaults to ~/.tccli.
 */
export declare const sharedCredentialsDir: string | undefined;
Object.defineProperty(exports, "sharedCredentialsDir", {
    get() {
        return __config.get("sharedCredentialsDir");
    },
    enumerable: true,
});

