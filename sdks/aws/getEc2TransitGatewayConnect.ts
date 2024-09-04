// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2TransitGatewayConnect(args?: GetEc2TransitGatewayConnectArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewayConnectResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2TransitGatewayConnect:getEc2TransitGatewayConnect", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
        "timeouts": args.timeouts,
        "transitGatewayConnectId": args.transitGatewayConnectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayConnect.
 */
export interface GetEc2TransitGatewayConnectArgs {
    filters?: inputs.GetEc2TransitGatewayConnectFilter[];
    id?: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetEc2TransitGatewayConnectTimeouts;
    transitGatewayConnectId?: string;
}

/**
 * A collection of values returned by getEc2TransitGatewayConnect.
 */
export interface GetEc2TransitGatewayConnectResult {
    readonly filters?: outputs.GetEc2TransitGatewayConnectFilter[];
    readonly id: string;
    readonly protocol: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetEc2TransitGatewayConnectTimeouts;
    readonly transitGatewayConnectId: string;
    readonly transitGatewayId: string;
    readonly transportAttachmentId: string;
}
export function getEc2TransitGatewayConnectOutput(args?: GetEc2TransitGatewayConnectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewayConnectResult> {
    return pulumi.output(args).apply((a: any) => getEc2TransitGatewayConnect(a, opts))
}

/**
 * A collection of arguments for invoking getEc2TransitGatewayConnect.
 */
export interface GetEc2TransitGatewayConnectOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEc2TransitGatewayConnectFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetEc2TransitGatewayConnectTimeoutsArgs>;
    transitGatewayConnectId?: pulumi.Input<string>;
}
