// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecureSourceManagerRepositoryIamPolicy(args: GetSecureSourceManagerRepositoryIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSecureSourceManagerRepositoryIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getSecureSourceManagerRepositoryIamPolicy:getSecureSourceManagerRepositoryIamPolicy", {
        "id": args.id,
        "location": args.location,
        "project": args.project,
        "repositoryId": args.repositoryId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecureSourceManagerRepositoryIamPolicy.
 */
export interface GetSecureSourceManagerRepositoryIamPolicyArgs {
    id?: string;
    location?: string;
    project?: string;
    repositoryId: string;
}

/**
 * A collection of values returned by getSecureSourceManagerRepositoryIamPolicy.
 */
export interface GetSecureSourceManagerRepositoryIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
    readonly repositoryId: string;
}
export function getSecureSourceManagerRepositoryIamPolicyOutput(args: GetSecureSourceManagerRepositoryIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecureSourceManagerRepositoryIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getSecureSourceManagerRepositoryIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getSecureSourceManagerRepositoryIamPolicy.
 */
export interface GetSecureSourceManagerRepositoryIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    repositoryId: pulumi.Input<string>;
}
