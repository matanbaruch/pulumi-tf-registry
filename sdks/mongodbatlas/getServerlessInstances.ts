// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServerlessInstances(args: GetServerlessInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetServerlessInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getServerlessInstances:getServerlessInstances", {
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServerlessInstances.
 */
export interface GetServerlessInstancesArgs {
    id?: string;
    projectId: string;
}

/**
 * A collection of values returned by getServerlessInstances.
 */
export interface GetServerlessInstancesResult {
    readonly id: string;
    readonly projectId: string;
    readonly results: outputs.GetServerlessInstancesResult[];
}
export function getServerlessInstancesOutput(args: GetServerlessInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerlessInstancesResult> {
    return pulumi.output(args).apply((a: any) => getServerlessInstances(a, opts))
}

/**
 * A collection of arguments for invoking getServerlessInstances.
 */
export interface GetServerlessInstancesOutputArgs {
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
