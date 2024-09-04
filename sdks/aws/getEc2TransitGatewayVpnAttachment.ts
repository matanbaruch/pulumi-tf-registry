// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2TransitGatewayVpnAttachment(args?: GetEc2TransitGatewayVpnAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayVpnAttachmentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2TransitGatewayVpnAttachment:getEc2TransitGatewayVpnAttachment", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
        "timeouts": args.timeouts,
        "transitGatewayId": args.transitGatewayId,
        "vpnConnectionId": args.vpnConnectionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayVpnAttachment.
 */
export interface GetEc2TransitGatewayVpnAttachmentArgs {
    filters?: inputs.GetEc2TransitGatewayVpnAttachmentFilter[];
    id?: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetEc2TransitGatewayVpnAttachmentTimeouts;
    transitGatewayId?: string;
    vpnConnectionId?: string;
}

/**
 * A collection of values returned by getEc2TransitGatewayVpnAttachment.
 */
export interface GetEc2TransitGatewayVpnAttachmentResult {
    readonly filters?: outputs.GetEc2TransitGatewayVpnAttachmentFilter[];
    readonly id: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetEc2TransitGatewayVpnAttachmentTimeouts;
    readonly transitGatewayId?: string;
    readonly vpnConnectionId?: string;
}
export function getEc2TransitGatewayVpnAttachmentOutput(args?: GetEc2TransitGatewayVpnAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayVpnAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getEc2TransitGatewayVpnAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayVpnAttachment.
 */
export interface GetEc2TransitGatewayVpnAttachmentOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEc2TransitGatewayVpnAttachmentFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetEc2TransitGatewayVpnAttachmentTimeoutsArgs>;
    transitGatewayId?: pulumi.Input<string>;
    vpnConnectionId?: pulumi.Input<string>;
}
