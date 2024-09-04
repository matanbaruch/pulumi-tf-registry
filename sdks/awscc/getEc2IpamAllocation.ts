// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2IpamAllocation(args: GetEc2IpamAllocationArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2IpamAllocationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2IpamAllocation:getEc2IpamAllocation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2IpamAllocation.
 */
export interface GetEc2IpamAllocationArgs {
    id: string;
}

/**
 * A collection of values returned by getEc2IpamAllocation.
 */
export interface GetEc2IpamAllocationResult {
    readonly cidr: string;
    readonly description: string;
    readonly id: string;
    readonly ipamPoolAllocationId: string;
    readonly ipamPoolId: string;
    readonly netmaskLength: number;
}
export function getEc2IpamAllocationOutput(args: GetEc2IpamAllocationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2IpamAllocationResult> {
    return pulumi.output(args).apply((a: any) => getEc2IpamAllocation(a, opts))
}

/**
 * A collection of arguments for invoking getEc2IpamAllocation.
 */
export interface GetEc2IpamAllocationOutputArgs {
    id: pulumi.Input<string>;
}
