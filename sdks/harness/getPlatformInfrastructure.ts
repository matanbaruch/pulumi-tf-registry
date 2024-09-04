// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformInfrastructure(args: GetPlatformInfrastructureArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformInfrastructureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformInfrastructure:getPlatformInfrastructure", {
        "envId": args.envId,
        "gitDetails": args.gitDetails,
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformInfrastructure.
 */
export interface GetPlatformInfrastructureArgs {
    envId: string;
    gitDetails?: inputs.GetPlatformInfrastructureGitDetails;
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformInfrastructure.
 */
export interface GetPlatformInfrastructureResult {
    readonly deploymentType: string;
    readonly description: string;
    readonly envId: string;
    readonly gitDetails?: outputs.GetPlatformInfrastructureGitDetails;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
    readonly type: string;
    readonly yaml: string;
}
export function getPlatformInfrastructureOutput(args: GetPlatformInfrastructureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformInfrastructureResult> {
    return pulumi.output(args).apply((a: any) => getPlatformInfrastructure(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformInfrastructure.
 */
export interface GetPlatformInfrastructureOutputArgs {
    envId: pulumi.Input<string>;
    gitDetails?: pulumi.Input<inputs.GetPlatformInfrastructureGitDetailsArgs>;
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
