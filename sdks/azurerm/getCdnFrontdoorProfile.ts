// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCdnFrontdoorProfile(args: GetCdnFrontdoorProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetCdnFrontdoorProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getCdnFrontdoorProfile:getCdnFrontdoorProfile", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCdnFrontdoorProfile.
 */
export interface GetCdnFrontdoorProfileArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetCdnFrontdoorProfileTimeouts;
}

/**
 * A collection of values returned by getCdnFrontdoorProfile.
 */
export interface GetCdnFrontdoorProfileResult {
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly resourceGuid: string;
    readonly responseTimeoutSeconds: number;
    readonly skuName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetCdnFrontdoorProfileTimeouts;
}
export function getCdnFrontdoorProfileOutput(args: GetCdnFrontdoorProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCdnFrontdoorProfileResult> {
    return pulumi.output(args).apply((a: any) => getCdnFrontdoorProfile(a, opts))
}

/**
 * A collection of arguments for invoking getCdnFrontdoorProfile.
 */
export interface GetCdnFrontdoorProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCdnFrontdoorProfileTimeoutsArgs>;
}
