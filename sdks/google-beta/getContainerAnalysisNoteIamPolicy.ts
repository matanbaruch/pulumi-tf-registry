// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getContainerAnalysisNoteIamPolicy(args: GetContainerAnalysisNoteIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAnalysisNoteIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getContainerAnalysisNoteIamPolicy:getContainerAnalysisNoteIamPolicy", {
        "id": args.id,
        "note": args.note,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerAnalysisNoteIamPolicy.
 */
export interface GetContainerAnalysisNoteIamPolicyArgs {
    id?: string;
    note: string;
    project?: string;
}

/**
 * A collection of values returned by getContainerAnalysisNoteIamPolicy.
 */
export interface GetContainerAnalysisNoteIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly note: string;
    readonly policyData: string;
    readonly project: string;
}
export function getContainerAnalysisNoteIamPolicyOutput(args: GetContainerAnalysisNoteIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAnalysisNoteIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getContainerAnalysisNoteIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getContainerAnalysisNoteIamPolicy.
 */
export interface GetContainerAnalysisNoteIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    note: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
