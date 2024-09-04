// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLocationsCloud(args: GetLocationsCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetLocationsCloudResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("packetfabric:index/getLocationsCloud:getLocationsCloud", {
        "anyType": args.anyType,
        "city": args.city,
        "cloudConnectionType": args.cloudConnectionType,
        "cloudProvider": args.cloudProvider,
        "hasCloudRouter": args.hasCloudRouter,
        "id": args.id,
        "market": args.market,
        "natCapable": args.natCapable,
        "pop": args.pop,
        "region": args.region,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocationsCloud.
 */
export interface GetLocationsCloudArgs {
    anyType?: boolean;
    city?: string;
    cloudConnectionType: string;
    cloudProvider: string;
    hasCloudRouter?: boolean;
    id?: string;
    market?: string;
    natCapable?: boolean;
    pop?: string;
    region?: string;
    state?: string;
}

/**
 * A collection of values returned by getLocationsCloud.
 */
export interface GetLocationsCloudResult {
    readonly anyType?: boolean;
    readonly city?: string;
    readonly cloudConnectionType: string;
    readonly cloudLocations: outputs.GetLocationsCloudCloudLocation[];
    readonly cloudProvider: string;
    readonly hasCloudRouter?: boolean;
    readonly id: string;
    readonly market?: string;
    readonly natCapable?: boolean;
    readonly pop?: string;
    readonly region?: string;
    readonly state?: string;
}
export function getLocationsCloudOutput(args: GetLocationsCloudOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocationsCloudResult> {
    return pulumi.output(args).apply((a: any) => getLocationsCloud(a, opts))
}

/**
 * A collection of arguments for invoking getLocationsCloud.
 */
export interface GetLocationsCloudOutputArgs {
    anyType?: pulumi.Input<boolean>;
    city?: pulumi.Input<string>;
    cloudConnectionType: pulumi.Input<string>;
    cloudProvider: pulumi.Input<string>;
    hasCloudRouter?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    market?: pulumi.Input<string>;
    natCapable?: pulumi.Input<boolean>;
    pop?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
