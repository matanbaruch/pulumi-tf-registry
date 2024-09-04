// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkManagerNetworkGroup(args: GetNetworkManagerNetworkGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkManagerNetworkGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getNetworkManagerNetworkGroup:getNetworkManagerNetworkGroup", {
        "id": args.id,
        "name": args.name,
        "networkManagerId": args.networkManagerId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkManagerNetworkGroup.
 */
export interface GetNetworkManagerNetworkGroupArgs {
    id?: string;
    name: string;
    networkManagerId: string;
    timeouts?: inputs.GetNetworkManagerNetworkGroupTimeouts;
}

/**
 * A collection of values returned by getNetworkManagerNetworkGroup.
 */
export interface GetNetworkManagerNetworkGroupResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly networkManagerId: string;
    readonly timeouts?: outputs.GetNetworkManagerNetworkGroupTimeouts;
}
export function getNetworkManagerNetworkGroupOutput(args: GetNetworkManagerNetworkGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkManagerNetworkGroupResult> {
    return pulumi.output(args).apply((a: any) => getNetworkManagerNetworkGroup(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkManagerNetworkGroup.
 */
export interface GetNetworkManagerNetworkGroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    networkManagerId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetNetworkManagerNetworkGroupTimeoutsArgs>;
}
