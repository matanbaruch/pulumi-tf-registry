// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFsxOntapStorageVirtualMachine(args?: GetFsxOntapStorageVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetFsxOntapStorageVirtualMachineResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getFsxOntapStorageVirtualMachine:getFsxOntapStorageVirtualMachine", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFsxOntapStorageVirtualMachine.
 */
export interface GetFsxOntapStorageVirtualMachineArgs {
    filters?: inputs.GetFsxOntapStorageVirtualMachineFilter[];
    id?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getFsxOntapStorageVirtualMachine.
 */
export interface GetFsxOntapStorageVirtualMachineResult {
    readonly activeDirectoryConfigurations: outputs.GetFsxOntapStorageVirtualMachineActiveDirectoryConfiguration[];
    readonly arn: string;
    readonly creationTime: string;
    readonly endpoints: outputs.GetFsxOntapStorageVirtualMachineEndpoint[];
    readonly fileSystemId: string;
    readonly filters?: outputs.GetFsxOntapStorageVirtualMachineFilter[];
    readonly id: string;
    readonly lifecycleStatus: string;
    readonly lifecycleTransitionReasons: outputs.GetFsxOntapStorageVirtualMachineLifecycleTransitionReason[];
    readonly name: string;
    readonly subtype: string;
    readonly tags: {[key: string]: string};
    readonly uuid: string;
}
export function getFsxOntapStorageVirtualMachineOutput(args?: GetFsxOntapStorageVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFsxOntapStorageVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getFsxOntapStorageVirtualMachine(a, opts))
}

/**
 * A collection of arguments for invoking getFsxOntapStorageVirtualMachine.
 */
export interface GetFsxOntapStorageVirtualMachineOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetFsxOntapStorageVirtualMachineFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
