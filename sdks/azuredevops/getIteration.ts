// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIteration(args: GetIterationArgs, opts?: pulumi.InvokeOptions): Promise<GetIterationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuredevops:index/getIteration:getIteration", {
        "fetchChildren": args.fetchChildren,
        "id": args.id,
        "path": args.path,
        "projectId": args.projectId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIteration.
 */
export interface GetIterationArgs {
    fetchChildren?: boolean;
    id?: string;
    path?: string;
    projectId: string;
    timeouts?: inputs.GetIterationTimeouts;
}

/**
 * A collection of values returned by getIteration.
 */
export interface GetIterationResult {
    readonly childrens: outputs.GetIterationChildren[];
    readonly fetchChildren?: boolean;
    readonly hasChildren: boolean;
    readonly id: string;
    readonly name: string;
    readonly path: string;
    readonly projectId: string;
    readonly timeouts?: outputs.GetIterationTimeouts;
}
export function getIterationOutput(args: GetIterationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIterationResult> {
    return pulumi.output(args).apply((a: any) => getIteration(a, opts))
}

/**
 * A collection of arguments for invoking getIteration.
 */
export interface GetIterationOutputArgs {
    fetchChildren?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetIterationTimeoutsArgs>;
}
