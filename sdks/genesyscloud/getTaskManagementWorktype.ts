// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTaskManagementWorktype(args: GetTaskManagementWorktypeArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskManagementWorktypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getTaskManagementWorktype:getTaskManagementWorktype", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTaskManagementWorktype.
 */
export interface GetTaskManagementWorktypeArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getTaskManagementWorktype.
 */
export interface GetTaskManagementWorktypeResult {
    readonly id: string;
    readonly name: string;
}
export function getTaskManagementWorktypeOutput(args: GetTaskManagementWorktypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTaskManagementWorktypeResult> {
    return pulumi.output(args).apply((a: any) => getTaskManagementWorktype(a, opts))
}

/**
 * A collection of arguments for invoking getTaskManagementWorktype.
 */
export interface GetTaskManagementWorktypeOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
