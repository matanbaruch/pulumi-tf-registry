// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkmanagerTransitGatewayPeering(args: GetNetworkmanagerTransitGatewayPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkmanagerTransitGatewayPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkmanagerTransitGatewayPeering:getNetworkmanagerTransitGatewayPeering", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkmanagerTransitGatewayPeering.
 */
export interface GetNetworkmanagerTransitGatewayPeeringArgs {
    id: string;
}

/**
 * A collection of values returned by getNetworkmanagerTransitGatewayPeering.
 */
export interface GetNetworkmanagerTransitGatewayPeeringResult {
    readonly coreNetworkArn: string;
    readonly coreNetworkId: string;
    readonly createdAt: string;
    readonly edgeLocation: string;
    readonly id: string;
    readonly ownerAccountId: string;
    readonly peeringId: string;
    readonly peeringType: string;
    readonly resourceArn: string;
    readonly state: string;
    readonly tags: outputs.GetNetworkmanagerTransitGatewayPeeringTag[];
    readonly transitGatewayArn: string;
    readonly transitGatewayPeeringAttachmentId: string;
}
export function getNetworkmanagerTransitGatewayPeeringOutput(args: GetNetworkmanagerTransitGatewayPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkmanagerTransitGatewayPeeringResult> {
    return pulumi.output(args).apply((a: any) => getNetworkmanagerTransitGatewayPeering(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkmanagerTransitGatewayPeering.
 */
export interface GetNetworkmanagerTransitGatewayPeeringOutputArgs {
    id: pulumi.Input<string>;
}
