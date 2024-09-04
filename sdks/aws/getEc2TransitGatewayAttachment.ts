// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2TransitGatewayAttachment(args?: GetEc2TransitGatewayAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayAttachmentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2TransitGatewayAttachment:getEc2TransitGatewayAttachment", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
        "transitGatewayAttachmentId": args.transitGatewayAttachmentId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayAttachment.
 */
export interface GetEc2TransitGatewayAttachmentArgs {
    filters?: inputs.GetEc2TransitGatewayAttachmentFilter[];
    id?: string;
    tags?: {[key: string]: string};
    transitGatewayAttachmentId?: string;
}

/**
 * A collection of values returned by getEc2TransitGatewayAttachment.
 */
export interface GetEc2TransitGatewayAttachmentResult {
    readonly arn: string;
    readonly associationState: string;
    readonly associationTransitGatewayRouteTableId: string;
    readonly filters?: outputs.GetEc2TransitGatewayAttachmentFilter[];
    readonly id: string;
    readonly resourceId: string;
    readonly resourceOwnerId: string;
    readonly resourceType: string;
    readonly state: string;
    readonly tags: {[key: string]: string};
    readonly transitGatewayAttachmentId: string;
    readonly transitGatewayId: string;
    readonly transitGatewayOwnerId: string;
}
export function getEc2TransitGatewayAttachmentOutput(args?: GetEc2TransitGatewayAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getEc2TransitGatewayAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayAttachment.
 */
export interface GetEc2TransitGatewayAttachmentOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEc2TransitGatewayAttachmentFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    transitGatewayAttachmentId?: pulumi.Input<string>;
}
