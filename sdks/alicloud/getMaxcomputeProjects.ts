// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMaxcomputeProjects(args?: GetMaxcomputeProjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetMaxcomputeProjectsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getMaxcomputeProjects:getMaxcomputeProjects", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMaxcomputeProjects.
 */
export interface GetMaxcomputeProjectsArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getMaxcomputeProjects.
 */
export interface GetMaxcomputeProjectsResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly projects: outputs.GetMaxcomputeProjectsProject[];
}
export function getMaxcomputeProjectsOutput(args?: GetMaxcomputeProjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMaxcomputeProjectsResult> {
    return pulumi.output(args).apply((a: any) => getMaxcomputeProjects(a, opts))
}

/**
 * A collection of arguments for invoking getMaxcomputeProjects.
 */
export interface GetMaxcomputeProjectsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
