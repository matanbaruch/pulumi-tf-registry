// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjects(args?: GetProjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuredevops:index/getProjects:getProjects", {
        "id": args.id,
        "name": args.name,
        "state": args.state,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjects.
 */
export interface GetProjectsArgs {
    id?: string;
    name?: string;
    state?: string;
    timeouts?: inputs.GetProjectsTimeouts;
}

/**
 * A collection of values returned by getProjects.
 */
export interface GetProjectsResult {
    readonly id: string;
    readonly name?: string;
    readonly projects: outputs.GetProjectsProject[];
    readonly state?: string;
    readonly timeouts?: outputs.GetProjectsTimeouts;
}
export function getProjectsOutput(args?: GetProjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectsResult> {
    return pulumi.output(args).apply((a: any) => getProjects(a, opts))
}

/**
 * A collection of arguments for invoking getProjects.
 */
export interface GetProjectsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetProjectsTimeoutsArgs>;
}
