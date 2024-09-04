// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjectMembership(args?: GetProjectMembershipArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectMembershipResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectMembership:getProjectMembership", {
        "fullPath": args.fullPath,
        "id": args.id,
        "inherited": args.inherited,
        "projectId": args.projectId,
        "query": args.query,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectMembership.
 */
export interface GetProjectMembershipArgs {
    fullPath?: string;
    id?: string;
    inherited?: boolean;
    projectId?: number;
    query?: string;
}

/**
 * A collection of values returned by getProjectMembership.
 */
export interface GetProjectMembershipResult {
    readonly fullPath: string;
    readonly id: string;
    readonly inherited?: boolean;
    readonly members: outputs.GetProjectMembershipMember[];
    readonly projectId: number;
    readonly query?: string;
}
export function getProjectMembershipOutput(args?: GetProjectMembershipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectMembershipResult> {
    return pulumi.output(args).apply((a: any) => getProjectMembership(a, opts))
}

/**
 * A collection of arguments for invoking getProjectMembership.
 */
export interface GetProjectMembershipOutputArgs {
    fullPath?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inherited?: pulumi.Input<boolean>;
    projectId?: pulumi.Input<number>;
    query?: pulumi.Input<string>;
}
