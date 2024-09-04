// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("citrix");

/**
 * Configuration for CVAD service.
 */
export declare const cvadConfig: outputs.config.CvadConfig | undefined;
Object.defineProperty(exports, "cvadConfig", {
    get() {
        return __config.getObject<outputs.config.CvadConfig>("cvadConfig");
    },
    enumerable: true,
});

/**
 * StoreFront Remote Host for Citrix DaaS service. <br />Only applicable for Citrix on-premises StoreFront. Use this to
 * specify StoreFront Remote Host. <br />
 */
export declare const storefrontRemoteHost: outputs.config.StorefrontRemoteHost | undefined;
Object.defineProperty(exports, "storefrontRemoteHost", {
    get() {
        return __config.getObject<outputs.config.StorefrontRemoteHost>("storefrontRemoteHost");
    },
    enumerable: true,
});

