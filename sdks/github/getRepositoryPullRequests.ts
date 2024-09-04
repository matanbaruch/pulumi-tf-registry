// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRepositoryPullRequests(args: GetRepositoryPullRequestsArgs, opts?: pulumi.InvokeOptions): Promise<GetRepositoryPullRequestsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getRepositoryPullRequests:getRepositoryPullRequests", {
        "baseRef": args.baseRef,
        "baseRepository": args.baseRepository,
        "headRef": args.headRef,
        "id": args.id,
        "owner": args.owner,
        "sortBy": args.sortBy,
        "sortDirection": args.sortDirection,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRepositoryPullRequests.
 */
export interface GetRepositoryPullRequestsArgs {
    baseRef?: string;
    baseRepository: string;
    headRef?: string;
    id?: string;
    owner?: string;
    sortBy?: string;
    sortDirection?: string;
    state?: string;
}

/**
 * A collection of values returned by getRepositoryPullRequests.
 */
export interface GetRepositoryPullRequestsResult {
    readonly baseRef?: string;
    readonly baseRepository: string;
    readonly headRef?: string;
    readonly id: string;
    readonly owner?: string;
    readonly results: outputs.GetRepositoryPullRequestsResult[];
    readonly sortBy?: string;
    readonly sortDirection?: string;
    readonly state?: string;
}
export function getRepositoryPullRequestsOutput(args: GetRepositoryPullRequestsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRepositoryPullRequestsResult> {
    return pulumi.output(args).apply((a: any) => getRepositoryPullRequests(a, opts))
}

/**
 * A collection of arguments for invoking getRepositoryPullRequests.
 */
export interface GetRepositoryPullRequestsOutputArgs {
    baseRef?: pulumi.Input<string>;
    baseRepository: pulumi.Input<string>;
    headRef?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    sortDirection?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
