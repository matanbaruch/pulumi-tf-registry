// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkPeering(args: GetNetworkPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getNetworkPeering:getNetworkPeering", {
        "id": args.id,
        "peeringId": args.peeringId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkPeering.
 */
export interface GetNetworkPeeringArgs {
    id?: string;
    peeringId: string;
    projectId: string;
}

/**
 * A collection of values returned by getNetworkPeering.
 */
export interface GetNetworkPeeringResult {
    readonly accepterRegionName: string;
    readonly atlasCidrBlock: string;
    readonly atlasId: string;
    readonly awsAccountId: string;
    readonly azureDirectoryId: string;
    readonly azureSubscriptionId: string;
    readonly connectionId: string;
    readonly containerId: string;
    readonly errorMessage: string;
    readonly errorState: string;
    readonly errorStateName: string;
    readonly gcpProjectId: string;
    readonly id: string;
    readonly networkName: string;
    readonly peeringId: string;
    readonly projectId: string;
    readonly providerName: string;
    readonly resourceGroupName: string;
    readonly routeTableCidrBlock: string;
    readonly status: string;
    readonly statusName: string;
    readonly vnetName: string;
    readonly vpcId: string;
}
export function getNetworkPeeringOutput(args: GetNetworkPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkPeeringResult> {
    return pulumi.output(args).apply((a: any) => getNetworkPeering(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkPeering.
 */
export interface GetNetworkPeeringOutputArgs {
    id?: pulumi.Input<string>;
    peeringId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
