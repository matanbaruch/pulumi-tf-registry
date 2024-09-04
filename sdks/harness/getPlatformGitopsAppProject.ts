// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformGitopsAppProject(args: GetPlatformGitopsAppProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformGitopsAppProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformGitopsAppProject:getPlatformGitopsAppProject", {
        "accountId": args.accountId,
        "agentId": args.agentId,
        "id": args.id,
        "orgId": args.orgId,
        "projectId": args.projectId,
        "queryName": args.queryName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformGitopsAppProject.
 */
export interface GetPlatformGitopsAppProjectArgs {
    accountId: string;
    agentId: string;
    id?: string;
    orgId?: string;
    projectId?: string;
    queryName?: string;
}

/**
 * A collection of values returned by getPlatformGitopsAppProject.
 */
export interface GetPlatformGitopsAppProjectResult {
    readonly accountId: string;
    readonly agentId: string;
    readonly id: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly queryName: string;
}
export function getPlatformGitopsAppProjectOutput(args: GetPlatformGitopsAppProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformGitopsAppProjectResult> {
    return pulumi.output(args).apply((a: any) => getPlatformGitopsAppProject(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformGitopsAppProject.
 */
export interface GetPlatformGitopsAppProjectOutputArgs {
    accountId: pulumi.Input<string>;
    agentId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    queryName?: pulumi.Input<string>;
}
