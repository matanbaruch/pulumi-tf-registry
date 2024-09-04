// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualMachineGroup(args?: GetVirtualMachineGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opennebula:index/getVirtualMachineGroup:getVirtualMachineGroup", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualMachineGroup.
 */
export interface GetVirtualMachineGroupArgs {
    id?: number;
    name?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getVirtualMachineGroup.
 */
export interface GetVirtualMachineGroupResult {
    readonly id?: number;
    readonly name?: string;
    readonly tags?: {[key: string]: string};
}
export function getVirtualMachineGroupOutput(args?: GetVirtualMachineGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineGroupResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineGroup(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualMachineGroup.
 */
export interface GetVirtualMachineGroupOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
