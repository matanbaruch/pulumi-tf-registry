// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProjectHook(args: GetProjectHookArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectHookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProjectHook:getProjectHook", {
        "hookId": args.hookId,
        "id": args.id,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectHook.
 */
export interface GetProjectHookArgs {
    hookId: number;
    id?: string;
    project: string;
}

/**
 * A collection of values returned by getProjectHook.
 */
export interface GetProjectHookResult {
    readonly confidentialIssuesEvents: boolean;
    readonly confidentialNoteEvents: boolean;
    readonly customWebhookTemplate: string;
    readonly deploymentEvents: boolean;
    readonly enableSslVerification: boolean;
    readonly hookId: number;
    readonly id: string;
    readonly issuesEvents: boolean;
    readonly jobEvents: boolean;
    readonly mergeRequestsEvents: boolean;
    readonly noteEvents: boolean;
    readonly pipelineEvents: boolean;
    readonly project: string;
    readonly projectId: number;
    readonly pushEvents: boolean;
    readonly pushEventsBranchFilter: string;
    readonly releasesEvents: boolean;
    readonly tagPushEvents: boolean;
    readonly token: string;
    readonly url: string;
    readonly wikiPageEvents: boolean;
}
export function getProjectHookOutput(args: GetProjectHookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectHookResult> {
    return pulumi.output(args).apply((a: any) => getProjectHook(a, opts))
}

/**
 * A collection of arguments for invoking getProjectHook.
 */
export interface GetProjectHookOutputArgs {
    hookId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
