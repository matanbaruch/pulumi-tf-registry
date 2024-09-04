// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjectIssues(args: GetProjectIssuesArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectIssuesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectIssues:getProjectIssues", {
        "assigneeId": args.assigneeId,
        "assigneeUsername": args.assigneeUsername,
        "authorId": args.authorId,
        "confidential": args.confidential,
        "createdAfter": args.createdAfter,
        "createdBefore": args.createdBefore,
        "dueDate": args.dueDate,
        "id": args.id,
        "iids": args.iids,
        "issueType": args.issueType,
        "labels": args.labels,
        "milestone": args.milestone,
        "myReactionEmoji": args.myReactionEmoji,
        "notAssigneeIds": args.notAssigneeIds,
        "notAuthorIds": args.notAuthorIds,
        "notLabels": args.notLabels,
        "notMilestone": args.notMilestone,
        "notMyReactionEmojis": args.notMyReactionEmojis,
        "orderBy": args.orderBy,
        "project": args.project,
        "scope": args.scope,
        "search": args.search,
        "sort": args.sort,
        "updatedAfter": args.updatedAfter,
        "updatedBefore": args.updatedBefore,
        "weight": args.weight,
        "withLabelsDetails": args.withLabelsDetails,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectIssues.
 */
export interface GetProjectIssuesArgs {
    assigneeId?: number;
    assigneeUsername?: string;
    authorId?: number;
    confidential?: boolean;
    createdAfter?: string;
    createdBefore?: string;
    dueDate?: string;
    id?: string;
    iids?: number[];
    issueType?: string;
    labels?: string[];
    milestone?: string;
    myReactionEmoji?: string;
    notAssigneeIds?: number[];
    notAuthorIds?: number[];
    notLabels?: string[];
    notMilestone?: string;
    notMyReactionEmojis?: string[];
    orderBy?: string;
    project: string;
    scope?: string;
    search?: string;
    sort?: string;
    updatedAfter?: string;
    updatedBefore?: string;
    weight?: number;
    withLabelsDetails?: boolean;
}

/**
 * A collection of values returned by getProjectIssues.
 */
export interface GetProjectIssuesResult {
    readonly assigneeId?: number;
    readonly assigneeUsername?: string;
    readonly authorId?: number;
    readonly confidential?: boolean;
    readonly createdAfter?: string;
    readonly createdBefore?: string;
    readonly dueDate?: string;
    readonly id: string;
    readonly iids?: number[];
    readonly issueType?: string;
    readonly issues: outputs.GetProjectIssuesIssue[];
    readonly labels?: string[];
    readonly milestone?: string;
    readonly myReactionEmoji?: string;
    readonly notAssigneeIds?: number[];
    readonly notAuthorIds?: number[];
    readonly notLabels?: string[];
    readonly notMilestone?: string;
    readonly notMyReactionEmojis?: string[];
    readonly orderBy?: string;
    readonly project: string;
    readonly scope?: string;
    readonly search?: string;
    readonly sort?: string;
    readonly updatedAfter?: string;
    readonly updatedBefore?: string;
    readonly weight?: number;
    readonly withLabelsDetails?: boolean;
}
export function getProjectIssuesOutput(args: GetProjectIssuesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectIssuesResult> {
    return pulumi.output(args).apply((a: any) => getProjectIssues(a, opts))
}

/**
 * A collection of arguments for invoking getProjectIssues.
 */
export interface GetProjectIssuesOutputArgs {
    assigneeId?: pulumi.Input<number>;
    assigneeUsername?: pulumi.Input<string>;
    authorId?: pulumi.Input<number>;
    confidential?: pulumi.Input<boolean>;
    createdAfter?: pulumi.Input<string>;
    createdBefore?: pulumi.Input<string>;
    dueDate?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    iids?: pulumi.Input<pulumi.Input<number>[]>;
    issueType?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    milestone?: pulumi.Input<string>;
    myReactionEmoji?: pulumi.Input<string>;
    notAssigneeIds?: pulumi.Input<pulumi.Input<number>[]>;
    notAuthorIds?: pulumi.Input<pulumi.Input<number>[]>;
    notLabels?: pulumi.Input<pulumi.Input<string>[]>;
    notMilestone?: pulumi.Input<string>;
    notMyReactionEmojis?: pulumi.Input<pulumi.Input<string>[]>;
    orderBy?: pulumi.Input<string>;
    project: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    search?: pulumi.Input<string>;
    sort?: pulumi.Input<string>;
    updatedAfter?: pulumi.Input<string>;
    updatedBefore?: pulumi.Input<string>;
    weight?: pulumi.Input<number>;
    withLabelsDetails?: pulumi.Input<boolean>;
}
