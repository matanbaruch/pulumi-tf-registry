// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("cloudngfwaws");

/**
 * (Used for the initial `sts assume role`) AWS access key. Environment variable: `CLOUDNGFWAWS_ACCESS_KEY`. JSON conf file
 * variable: `access-key`.
 */
export declare const accessKey: string | undefined;
Object.defineProperty(exports, "accessKey", {
    get() {
        return __config.get("accessKey");
    },
    enumerable: true,
});

/**
 * The ARN allowing account admin permissions. Environment variable: `CLOUDNGFWAWS_ACCT_ADMIN_ARN`. JSON conf file
 * variable: `account-admin-arn`.
 */
export declare const accountAdminArn: string | undefined;
Object.defineProperty(exports, "accountAdminArn", {
    get() {
        return __config.get("accountAdminArn");
    },
    enumerable: true,
});

/**
 * The ARN allowing firewall, rulestack, and global rulestack admin permissions. Global rulestack admin permissions can be
 * enabled only if the AWS account is onboarded by AWS Firewall Manager. Use 'lfa_arn' and 'lra_arn' if you want to enable
 * only firewall and rulestack admin permissions. Environment variable: `CLOUDNGFWAWS_ARN`. JSON conf file variable: `arn`.
 */
export declare const arn: string | undefined;
Object.defineProperty(exports, "arn", {
    get() {
        return __config.get("arn");
    },
    enumerable: true,
});

/**
 * The ARN allowing global rulestack admin permissions. Global rulestack admin permissions can be enabled only if the AWS
 * account is onboarded by AWS Firewall Manager. 'gra_arn' is preferentially used over the `arn` param if both are
 * specified. Environment variable: `CLOUDNGFWAWS_GRA_ARN`. JSON conf file variable: `gra-arn`.
 */
export declare const graArn: string | undefined;
Object.defineProperty(exports, "graArn", {
    get() {
        return __config.get("graArn");
    },
    enumerable: true,
});

/**
 * Additional HTTP headers to send with API calls. Environment variable: `CLOUDNGFWAWS_HEADERS`. JSON conf file variable:
 * `headers`.
 */
export declare const headers: {[key: string]: string} | undefined;
Object.defineProperty(exports, "headers", {
    get() {
        return __config.getObject<{[key: string]: string}>("headers");
    },
    enumerable: true,
});

/**
 * The hostname of the API (default: `api.us-east-1.aws.cloudngfw.paloaltonetworks.com`). Environment variable:
 * `CLOUDNGFWAWS_HOST`. JSON conf file variable: `host`.
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * Retrieve provider configuration from this JSON file.
 */
export declare const jsonConfigFile: string | undefined;
Object.defineProperty(exports, "jsonConfigFile", {
    get() {
        return __config.get("jsonConfigFile");
    },
    enumerable: true,
});

/**
 * The ARN allowing firewall admin permissions. This is preferentially used over the `arn` param if both are specified.
 * Environment variable: `CLOUDNGFWAWS_LFA_ARN`. JSON conf file variable: `lfa-arn`.
 */
export declare const lfaArn: string | undefined;
Object.defineProperty(exports, "lfaArn", {
    get() {
        return __config.get("lfaArn");
    },
    enumerable: true,
});

/**
 * The logging options for the provider. Environment variable: `CLOUDNGFWAWS_LOGGING`. JSON conf file variable: `logging`.
 */
export declare const loggings: string[] | undefined;
Object.defineProperty(exports, "loggings", {
    get() {
        return __config.getObject<string[]>("loggings");
    },
    enumerable: true,
});

/**
 * The ARN allowing rulestack admin permissions. This is preferentially used over the `arn` param if both are specified.
 * Environment variable: `CLOUDNGFWAWS_LRA_ARN`. JSON conf file variable: `lra-arn`.
 */
export declare const lraArn: string | undefined;
Object.defineProperty(exports, "lraArn", {
    get() {
        return __config.get("lraArn");
    },
    enumerable: true,
});

/**
 * AWS management plane region. Environment variable: `CLOUDNGFWAWS_MP_REGION`. JSON conf file variable: `mp_region`.
 */
export declare const mpRegion: string | undefined;
Object.defineProperty(exports, "mpRegion", {
    get() {
        return __config.get("mpRegion");
    },
    enumerable: true,
});

/**
 * AWS management plane MP region host Environment variable: `CLOUDNGFWAWS_MP_REGION_HOST`. JSON conf file variable:
 * `mp_region_host`.
 */
export declare const mpRegionHost: string | undefined;
Object.defineProperty(exports, "mpRegionHost", {
    get() {
        return __config.get("mpRegionHost");
    },
    enumerable: true,
});

/**
 * (Used for the initial `sts assume role`) AWS PROFILE. Environment variable: `CLOUDNGFWAWS_PROFILE`. JSON conf file
 * variable: `profile`.
 */
export declare const profile: string | undefined;
Object.defineProperty(exports, "profile", {
    get() {
        return __config.get("profile");
    },
    enumerable: true,
});

/**
 * The protocol (defaults to `https`). Environment variable: `CLOUDNGFWAWS_PROTOCOL`. JSON conf file variable: `protocol`.
 * Valid values are `https` or `http`.
 */
export declare const protocol: string | undefined;
Object.defineProperty(exports, "protocol", {
    get() {
        return __config.get("protocol");
    },
    enumerable: true,
});

/**
 * AWS region. Environment variable: `CLOUDNGFWAWS_REGION`. JSON conf file variable: `region`.
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

export declare const resourceTimeout: number | undefined;
Object.defineProperty(exports, "resourceTimeout", {
    get() {
        return __config.getObject<number>("resourceTimeout");
    },
    enumerable: true,
});

/**
 * (Used for the initial `sts assume role`) AWS secret key. Environment variable: `CLOUDNGFWAWS_SECRET_KEY`. JSON conf file
 * variable: `secret-key`.
 */
export declare const secretKey: string | undefined;
Object.defineProperty(exports, "secretKey", {
    get() {
        return __config.get("secretKey");
    },
    enumerable: true,
});

/**
 * Skip verifying the SSL certificate. Environment variable: `CLOUDNGFWAWS_SKIP_VERIFY_CERTIFICATE`. JSON conf file
 * variable: `skip-verify-certificate`.
 */
export declare const skipVerifyCertificate: boolean | undefined;
Object.defineProperty(exports, "skipVerifyCertificate", {
    get() {
        return __config.getObject<boolean>("skipVerifyCertificate");
    },
    enumerable: true,
});

/**
 * Enable synchronous mode while creating resources Environment variable: `CLOUDNGFWAWS_SYNC_MODE`. JSON conf file
 * variable: `sync_mode`.
 */
export declare const syncMode: boolean | undefined;
Object.defineProperty(exports, "syncMode", {
    get() {
        return __config.getObject<boolean>("syncMode");
    },
    enumerable: true,
});

/**
 * The timeout for any single API call (default: `30`). Environment variable: `CLOUDNGFWAWS_TIMEOUT`. JSON conf file
 * variable: `timeout`.
 */
export declare const timeout: number | undefined;
Object.defineProperty(exports, "timeout", {
    get() {
        return __config.getObject<number>("timeout");
    },
    enumerable: true,
});

