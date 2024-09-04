// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDistributedVirtualSwitch(args: GetDistributedVirtualSwitchArgs, opts?: pulumi.InvokeOptions): Promise<GetDistributedVirtualSwitchResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vsphere:index/getDistributedVirtualSwitch:getDistributedVirtualSwitch", {
        "datacenterId": args.datacenterId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDistributedVirtualSwitch.
 */
export interface GetDistributedVirtualSwitchArgs {
    datacenterId?: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getDistributedVirtualSwitch.
 */
export interface GetDistributedVirtualSwitchResult {
    readonly datacenterId?: string;
    readonly id: string;
    readonly name: string;
    readonly uplinks: string[];
}
export function getDistributedVirtualSwitchOutput(args: GetDistributedVirtualSwitchOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDistributedVirtualSwitchResult> {
    return pulumi.output(args).apply((a: any) => getDistributedVirtualSwitch(a, opts))
}

/**
 * A collection of arguments for invoking getDistributedVirtualSwitch.
 */
export interface GetDistributedVirtualSwitchOutputArgs {
    datacenterId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
