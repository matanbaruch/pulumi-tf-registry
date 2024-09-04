// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourcebuildProjects(args?: GetSourcebuildProjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcebuildProjectsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getSourcebuildProjects:getSourcebuildProjects", {
        "filters": args.filters,
        "id": args.id,
        "projectName": args.projectName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcebuildProjects.
 */
export interface GetSourcebuildProjectsArgs {
    filters?: inputs.GetSourcebuildProjectsFilter[];
    id?: string;
    projectName?: string;
}

/**
 * A collection of values returned by getSourcebuildProjects.
 */
export interface GetSourcebuildProjectsResult {
    readonly filters?: outputs.GetSourcebuildProjectsFilter[];
    readonly id: string;
    readonly projectName?: string;
    readonly projects: outputs.GetSourcebuildProjectsProject[];
}
export function getSourcebuildProjectsOutput(args?: GetSourcebuildProjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourcebuildProjectsResult> {
    return pulumi.output(args).apply((a: any) => getSourcebuildProjects(a, opts))
}

/**
 * A collection of arguments for invoking getSourcebuildProjects.
 */
export interface GetSourcebuildProjectsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSourcebuildProjectsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
}
