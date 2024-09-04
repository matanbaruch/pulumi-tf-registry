// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataplexEntryGroupIamPolicy(args: GetDataplexEntryGroupIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDataplexEntryGroupIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getDataplexEntryGroupIamPolicy:getDataplexEntryGroupIamPolicy", {
        "entryGroupId": args.entryGroupId,
        "id": args.id,
        "location": args.location,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataplexEntryGroupIamPolicy.
 */
export interface GetDataplexEntryGroupIamPolicyArgs {
    entryGroupId: string;
    id?: string;
    location?: string;
    project?: string;
}

/**
 * A collection of values returned by getDataplexEntryGroupIamPolicy.
 */
export interface GetDataplexEntryGroupIamPolicyResult {
    readonly entryGroupId: string;
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
}
export function getDataplexEntryGroupIamPolicyOutput(args: GetDataplexEntryGroupIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataplexEntryGroupIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDataplexEntryGroupIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getDataplexEntryGroupIamPolicy.
 */
export interface GetDataplexEntryGroupIamPolicyOutputArgs {
    entryGroupId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
