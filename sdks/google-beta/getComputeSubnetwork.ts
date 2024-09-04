// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeSubnetwork(args?: GetComputeSubnetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeSubnetworkResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getComputeSubnetwork:getComputeSubnetwork", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
        "selfLink": args.selfLink,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeSubnetwork.
 */
export interface GetComputeSubnetworkArgs {
    id?: string;
    name?: string;
    project?: string;
    region?: string;
    selfLink?: string;
}

/**
 * A collection of values returned by getComputeSubnetwork.
 */
export interface GetComputeSubnetworkResult {
    readonly description: string;
    readonly gatewayAddress: string;
    readonly id: string;
    readonly internalIpv6Prefix: string;
    readonly ipCidrRange: string;
    readonly name?: string;
    readonly network: string;
    readonly privateIpGoogleAccess: boolean;
    readonly project: string;
    readonly region: string;
    readonly secondaryIpRanges: outputs.GetComputeSubnetworkSecondaryIpRange[];
    readonly selfLink: string;
}
export function getComputeSubnetworkOutput(args?: GetComputeSubnetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeSubnetworkResult> {
    return pulumi.output(args).apply((a: any) => getComputeSubnetwork(a, opts))
}

/**
 * A collection of arguments for invoking getComputeSubnetwork.
 */
export interface GetComputeSubnetworkOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
}
