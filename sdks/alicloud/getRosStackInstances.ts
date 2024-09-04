// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRosStackInstances(args: GetRosStackInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetRosStackInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getRosStackInstances:getRosStackInstances", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "stackGroupName": args.stackGroupName,
        "stackInstanceAccountId": args.stackInstanceAccountId,
        "stackInstanceRegionId": args.stackInstanceRegionId,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRosStackInstances.
 */
export interface GetRosStackInstancesArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    outputFile?: string;
    stackGroupName: string;
    stackInstanceAccountId?: string;
    stackInstanceRegionId?: string;
    status?: string;
}

/**
 * A collection of values returned by getRosStackInstances.
 */
export interface GetRosStackInstancesResult {
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetRosStackInstancesInstance[];
    readonly outputFile?: string;
    readonly stackGroupName: string;
    readonly stackInstanceAccountId?: string;
    readonly stackInstanceRegionId?: string;
    readonly status?: string;
}
export function getRosStackInstancesOutput(args: GetRosStackInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRosStackInstancesResult> {
    return pulumi.output(args).apply((a: any) => getRosStackInstances(a, opts))
}

/**
 * A collection of arguments for invoking getRosStackInstances.
 */
export interface GetRosStackInstancesOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    stackGroupName: pulumi.Input<string>;
    stackInstanceAccountId?: pulumi.Input<string>;
    stackInstanceRegionId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
