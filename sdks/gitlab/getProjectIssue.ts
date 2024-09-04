// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjectIssue(args: GetProjectIssueArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectIssueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectIssue:getProjectIssue", {
        "id": args.id,
        "iid": args.iid,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectIssue.
 */
export interface GetProjectIssueArgs {
    id?: string;
    iid: number;
    project: string;
}

/**
 * A collection of values returned by getProjectIssue.
 */
export interface GetProjectIssueResult {
    readonly assigneeIds: number[];
    readonly authorId: number;
    readonly closedAt: string;
    readonly closedByUserId: number;
    readonly confidential: boolean;
    readonly createdAt: string;
    readonly description: string;
    readonly discussionLocked: boolean;
    readonly discussionToResolve: string;
    readonly downvotes: number;
    readonly dueDate: string;
    readonly epicId: number;
    readonly epicIssueId: number;
    readonly externalId: string;
    readonly humanTimeEstimate: string;
    readonly humanTotalTimeSpent: string;
    readonly id: string;
    readonly iid: number;
    readonly issueId: number;
    readonly issueLinkId: number;
    readonly issueType: string;
    readonly labels: string[];
    readonly links: {[key: string]: string};
    readonly mergeRequestToResolveDiscussionsOf: number;
    readonly mergeRequestsCount: number;
    readonly milestoneId: number;
    readonly movedToId: number;
    readonly project: string;
    readonly references: {[key: string]: string};
    readonly state: string;
    readonly subscribed: boolean;
    readonly taskCompletionStatuses: outputs.GetProjectIssueTaskCompletionStatus[];
    readonly timeEstimate: number;
    readonly title: string;
    readonly totalTimeSpent: number;
    readonly updatedAt: string;
    readonly upvotes: number;
    readonly userNotesCount: number;
    readonly webUrl: string;
    readonly weight: number;
}
export function getProjectIssueOutput(args: GetProjectIssueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectIssueResult> {
    return pulumi.output(args).apply((a: any) => getProjectIssue(a, opts))
}

/**
 * A collection of arguments for invoking getProjectIssue.
 */
export interface GetProjectIssueOutputArgs {
    id?: pulumi.Input<string>;
    iid: pulumi.Input<number>;
    project: pulumi.Input<string>;
}
