// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNotebooksInstanceIamPolicy(args: GetNotebooksInstanceIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebooksInstanceIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getNotebooksInstanceIamPolicy:getNotebooksInstanceIamPolicy", {
        "id": args.id,
        "instanceName": args.instanceName,
        "location": args.location,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNotebooksInstanceIamPolicy.
 */
export interface GetNotebooksInstanceIamPolicyArgs {
    id?: string;
    instanceName: string;
    location?: string;
    project?: string;
}

/**
 * A collection of values returned by getNotebooksInstanceIamPolicy.
 */
export interface GetNotebooksInstanceIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly instanceName: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
}
export function getNotebooksInstanceIamPolicyOutput(args: GetNotebooksInstanceIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotebooksInstanceIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getNotebooksInstanceIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getNotebooksInstanceIamPolicy.
 */
export interface GetNotebooksInstanceIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    instanceName: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
