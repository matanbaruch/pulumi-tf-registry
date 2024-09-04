// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSubnetResources(args: GetSubnetResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getSubnetResources:getSubnetResources", {
        "contents": args.contents,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "linkedObjectType": args.linkedObjectType,
        "page": args.page,
        "size": args.size,
        "subnetId": args.subnetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSubnetResources.
 */
export interface GetSubnetResourcesArgs {
    contents?: inputs.GetSubnetResourcesContent[];
    id?: string;
    ipAddress?: string;
    linkedObjectType?: string;
    page?: number;
    size?: number;
    subnetId: string;
}

/**
 * A collection of values returned by getSubnetResources.
 */
export interface GetSubnetResourcesResult {
    readonly contents?: outputs.GetSubnetResourcesContent[];
    readonly id: string;
    readonly ipAddress?: string;
    readonly linkedObjectType?: string;
    readonly page?: number;
    readonly size?: number;
    readonly subnetId: string;
    readonly totalCount: number;
}
export function getSubnetResourcesOutput(args: GetSubnetResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubnetResourcesResult> {
    return pulumi.output(args).apply((a: any) => getSubnetResources(a, opts))
}

/**
 * A collection of arguments for invoking getSubnetResources.
 */
export interface GetSubnetResourcesOutputArgs {
    contents?: pulumi.Input<pulumi.Input<inputs.GetSubnetResourcesContentArgs>[]>;
    id?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    linkedObjectType?: pulumi.Input<string>;
    page?: pulumi.Input<number>;
    size?: pulumi.Input<number>;
    subnetId: pulumi.Input<string>;
}
