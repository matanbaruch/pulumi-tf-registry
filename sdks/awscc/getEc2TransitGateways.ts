// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2TransitGateways(opts?: pulumi.InvokeOptions): Promise<GetEc2TransitGatewaysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2TransitGateways:getEc2TransitGateways", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2TransitGateways.
 */
export interface GetEc2TransitGatewaysResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2TransitGatewaysOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2TransitGatewaysResult> {
    return pulumi.output(getEc2TransitGateways(opts))
}
