// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("infinity-next");

/**
 * The access key for API operations. You can retrieve this from the 'Global Settings > API Keys' section of the Infinity
 * Next portal
 */
export declare const accessKey: string | undefined;
Object.defineProperty(exports, "accessKey", {
    get() {
        return __config.get("accessKey");
    },
    enumerable: true,
});

/**
 * The client id for API operations, You can retrieve this from the 'Global Settings > API Keys' section of the Infinity
 * Next portal
 */
export declare const clientId: string | undefined;
Object.defineProperty(exports, "clientId", {
    get() {
        return __config.get("clientId");
    },
    enumerable: true,
});

/**
 * The region where Infinity Policy operations will take place. Options are: us, eu
 */
export declare const region: string | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.get("region");
    },
    enumerable: true,
});

