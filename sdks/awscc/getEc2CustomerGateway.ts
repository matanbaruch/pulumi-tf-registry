// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2CustomerGateway(args: GetEc2CustomerGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2CustomerGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2CustomerGateway:getEc2CustomerGateway", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2CustomerGateway.
 */
export interface GetEc2CustomerGatewayArgs {
    id: string;
}

/**
 * A collection of values returned by getEc2CustomerGateway.
 */
export interface GetEc2CustomerGatewayResult {
    readonly bgpAsn: number;
    readonly bgpAsnExtended: number;
    readonly certificateArn: string;
    readonly customerGatewayId: string;
    readonly deviceName: string;
    readonly id: string;
    readonly ipAddress: string;
    readonly tags: outputs.GetEc2CustomerGatewayTag[];
    readonly type: string;
}
export function getEc2CustomerGatewayOutput(args: GetEc2CustomerGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2CustomerGatewayResult> {
    return pulumi.output(args).apply((a: any) => getEc2CustomerGateway(a, opts))
}

/**
 * A collection of arguments for invoking getEc2CustomerGateway.
 */
export interface GetEc2CustomerGatewayOutputArgs {
    id: pulumi.Input<string>;
}
