// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSharedfilesystemSharenetworkV2(args?: GetSharedfilesystemSharenetworkV2Args, opts?: pulumi.InvokeOptions): Promise<GetSharedfilesystemSharenetworkV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nhncloud:index/getSharedfilesystemSharenetworkV2:getSharedfilesystemSharenetworkV2", {
        "description": args.description,
        "id": args.id,
        "ipVersion": args.ipVersion,
        "name": args.name,
        "networkType": args.networkType,
        "neutronNetId": args.neutronNetId,
        "neutronSubnetId": args.neutronSubnetId,
        "region": args.region,
        "securityServiceId": args.securityServiceId,
        "segmentationId": args.segmentationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSharedfilesystemSharenetworkV2.
 */
export interface GetSharedfilesystemSharenetworkV2Args {
    description?: string;
    id?: string;
    ipVersion?: number;
    name?: string;
    networkType?: string;
    neutronNetId?: string;
    neutronSubnetId?: string;
    region?: string;
    securityServiceId?: string;
    segmentationId?: number;
}

/**
 * A collection of values returned by getSharedfilesystemSharenetworkV2.
 */
export interface GetSharedfilesystemSharenetworkV2Result {
    readonly cidr: string;
    readonly description: string;
    readonly id: string;
    readonly ipVersion: number;
    readonly name: string;
    readonly networkType: string;
    readonly neutronNetId: string;
    readonly neutronSubnetId: string;
    readonly projectId: string;
    readonly region: string;
    readonly securityServiceId?: string;
    readonly securityServiceIds: string[];
    readonly segmentationId: number;
}
export function getSharedfilesystemSharenetworkV2Output(args?: GetSharedfilesystemSharenetworkV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedfilesystemSharenetworkV2Result> {
    return pulumi.output(args).apply((a: any) => getSharedfilesystemSharenetworkV2(a, opts))
}

/**
 * A collection of arguments for invoking getSharedfilesystemSharenetworkV2.
 */
export interface GetSharedfilesystemSharenetworkV2OutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipVersion?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    networkType?: pulumi.Input<string>;
    neutronNetId?: pulumi.Input<string>;
    neutronSubnetId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityServiceId?: pulumi.Input<string>;
    segmentationId?: pulumi.Input<number>;
}
