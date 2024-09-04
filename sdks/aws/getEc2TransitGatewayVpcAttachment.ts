// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2TransitGatewayVpcAttachment(args?: GetEc2TransitGatewayVpcAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayVpcAttachmentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2TransitGatewayVpcAttachment:getEc2TransitGatewayVpcAttachment", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayVpcAttachment.
 */
export interface GetEc2TransitGatewayVpcAttachmentArgs {
    filters?: inputs.GetEc2TransitGatewayVpcAttachmentFilter[];
    id?: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetEc2TransitGatewayVpcAttachmentTimeouts;
}

/**
 * A collection of values returned by getEc2TransitGatewayVpcAttachment.
 */
export interface GetEc2TransitGatewayVpcAttachmentResult {
    readonly applianceModeSupport: string;
    readonly dnsSupport: string;
    readonly filters?: outputs.GetEc2TransitGatewayVpcAttachmentFilter[];
    readonly id: string;
    readonly ipv6Support: string;
    readonly subnetIds: string[];
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetEc2TransitGatewayVpcAttachmentTimeouts;
    readonly transitGatewayId: string;
    readonly vpcId: string;
    readonly vpcOwnerId: string;
}
export function getEc2TransitGatewayVpcAttachmentOutput(args?: GetEc2TransitGatewayVpcAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayVpcAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getEc2TransitGatewayVpcAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayVpcAttachment.
 */
export interface GetEc2TransitGatewayVpcAttachmentOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEc2TransitGatewayVpcAttachmentFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetEc2TransitGatewayVpcAttachmentTimeoutsArgs>;
}
