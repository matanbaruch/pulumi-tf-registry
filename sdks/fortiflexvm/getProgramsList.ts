// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProgramsList(args?: GetProgramsListArgs, opts?: pulumi.InvokeOptions): Promise<GetProgramsListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiflexvm:index/getProgramsList:getProgramsList", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProgramsList.
 */
export interface GetProgramsListArgs {
    id?: string;
}

/**
 * A collection of values returned by getProgramsList.
 */
export interface GetProgramsListResult {
    readonly id: string;
    readonly programs: outputs.GetProgramsListProgram[];
}
export function getProgramsListOutput(args?: GetProgramsListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProgramsListResult> {
    return pulumi.output(args).apply((a: any) => getProgramsList(a, opts))
}

/**
 * A collection of arguments for invoking getProgramsList.
 */
export interface GetProgramsListOutputArgs {
    id?: pulumi.Input<string>;
}
