// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudGuardProblemEntity(args: GetCloudGuardProblemEntityArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudGuardProblemEntityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudGuardProblemEntity:getCloudGuardProblemEntity", {
        "id": args.id,
        "problemId": args.problemId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudGuardProblemEntity.
 */
export interface GetCloudGuardProblemEntityArgs {
    id?: string;
    problemId: string;
}

/**
 * A collection of values returned by getCloudGuardProblemEntity.
 */
export interface GetCloudGuardProblemEntityResult {
    readonly id: string;
    readonly items: outputs.GetCloudGuardProblemEntityItem[];
    readonly problemId: string;
}
export function getCloudGuardProblemEntityOutput(args: GetCloudGuardProblemEntityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudGuardProblemEntityResult> {
    return pulumi.output(args).apply((a: any) => getCloudGuardProblemEntity(a, opts))
}

/**
 * A collection of arguments for invoking getCloudGuardProblemEntity.
 */
export interface GetCloudGuardProblemEntityOutputArgs {
    id?: pulumi.Input<string>;
    problemId: pulumi.Input<string>;
}
