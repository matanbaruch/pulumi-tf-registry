// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProjectMilestone(args: GetProjectMilestoneArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectMilestoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectMilestone:getProjectMilestone", {
        "id": args.id,
        "milestoneId": args.milestoneId,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectMilestone.
 */
export interface GetProjectMilestoneArgs {
    id?: string;
    milestoneId: number;
    project: string;
}

/**
 * A collection of values returned by getProjectMilestone.
 */
export interface GetProjectMilestoneResult {
    readonly createdAt: string;
    readonly description: string;
    readonly dueDate: string;
    readonly expired: boolean;
    readonly id: string;
    readonly iid: number;
    readonly milestoneId: number;
    readonly project: string;
    readonly projectId: number;
    readonly startDate: string;
    readonly state: string;
    readonly title: string;
    readonly updatedAt: string;
    readonly webUrl: string;
}
export function getProjectMilestoneOutput(args: GetProjectMilestoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectMilestoneResult> {
    return pulumi.output(args).apply((a: any) => getProjectMilestone(a, opts))
}

/**
 * A collection of arguments for invoking getProjectMilestone.
 */
export interface GetProjectMilestoneOutputArgs {
    id?: pulumi.Input<string>;
    milestoneId: pulumi.Input<number>;
    project: pulumi.Input<string>;
}
