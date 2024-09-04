// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTransitGatewayVpcAttachment(args: GetTransitGatewayVpcAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetTransitGatewayVpcAttachmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getTransitGatewayVpcAttachment:getTransitGatewayVpcAttachment", {
        "id": args.id,
        "peerCloudAccount": args.peerCloudAccount,
        "peerVpc": args.peerVpc,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTransitGatewayVpcAttachment.
 */
export interface GetTransitGatewayVpcAttachmentArgs {
    id?: string;
    peerCloudAccount: string;
    peerVpc: string;
    vpcId: string;
}

/**
 * A collection of values returned by getTransitGatewayVpcAttachment.
 */
export interface GetTransitGatewayVpcAttachmentResult {
    readonly id: string;
    readonly peerCloudAccount: string;
    readonly peerRegion: string;
    readonly peerVpc: string;
    readonly peeringConnectionId: string;
    readonly state: string;
    readonly stateInfo: {[key: string]: string};
    readonly userPeerNetworkCidrs: string[];
    readonly vpcId: string;
}
export function getTransitGatewayVpcAttachmentOutput(args: GetTransitGatewayVpcAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransitGatewayVpcAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getTransitGatewayVpcAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getTransitGatewayVpcAttachment.
 */
export interface GetTransitGatewayVpcAttachmentOutputArgs {
    id?: pulumi.Input<string>;
    peerCloudAccount: pulumi.Input<string>;
    peerVpc: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
