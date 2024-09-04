// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getVirtualMachine:getVirtualMachine", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualMachine.
 */
export interface GetVirtualMachineArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetVirtualMachineTimeouts;
}

/**
 * A collection of values returned by getVirtualMachine.
 */
export interface GetVirtualMachineResult {
    readonly id: string;
    readonly identities: outputs.GetVirtualMachineIdentity[];
    readonly location: string;
    readonly name: string;
    readonly powerState: string;
    readonly privateIpAddress: string;
    readonly privateIpAddresses: string[];
    readonly publicIpAddress: string;
    readonly publicIpAddresses: string[];
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetVirtualMachineTimeouts;
}
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualMachine.
 */
export interface GetVirtualMachineOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetVirtualMachineTimeoutsArgs>;
}
