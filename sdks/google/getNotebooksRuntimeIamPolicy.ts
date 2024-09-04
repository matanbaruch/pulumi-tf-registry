// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNotebooksRuntimeIamPolicy(args: GetNotebooksRuntimeIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebooksRuntimeIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getNotebooksRuntimeIamPolicy:getNotebooksRuntimeIamPolicy", {
        "id": args.id,
        "location": args.location,
        "project": args.project,
        "runtimeName": args.runtimeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNotebooksRuntimeIamPolicy.
 */
export interface GetNotebooksRuntimeIamPolicyArgs {
    id?: string;
    location?: string;
    project?: string;
    runtimeName: string;
}

/**
 * A collection of values returned by getNotebooksRuntimeIamPolicy.
 */
export interface GetNotebooksRuntimeIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
    readonly runtimeName: string;
}
export function getNotebooksRuntimeIamPolicyOutput(args: GetNotebooksRuntimeIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotebooksRuntimeIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getNotebooksRuntimeIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getNotebooksRuntimeIamPolicy.
 */
export interface GetNotebooksRuntimeIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    runtimeName: pulumi.Input<string>;
}
