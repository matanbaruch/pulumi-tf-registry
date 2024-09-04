// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjectTag(args: GetProjectTagArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectTagResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectTag:getProjectTag", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectTag.
 */
export interface GetProjectTagArgs {
    id?: string;
    name: string;
    project: string;
}

/**
 * A collection of values returned by getProjectTag.
 */
export interface GetProjectTagResult {
    readonly commits: outputs.GetProjectTagCommit[];
    readonly id: string;
    readonly message: string;
    readonly name: string;
    readonly project: string;
    readonly protected: boolean;
    readonly releases: outputs.GetProjectTagRelease[];
    readonly target: string;
}
export function getProjectTagOutput(args: GetProjectTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectTagResult> {
    return pulumi.output(args).apply((a: any) => getProjectTag(a, opts))
}

/**
 * A collection of arguments for invoking getProjectTag.
 */
export interface GetProjectTagOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
