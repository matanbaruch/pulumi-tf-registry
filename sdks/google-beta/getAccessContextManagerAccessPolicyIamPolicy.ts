// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAccessContextManagerAccessPolicyIamPolicy(args: GetAccessContextManagerAccessPolicyIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessContextManagerAccessPolicyIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getAccessContextManagerAccessPolicyIamPolicy:getAccessContextManagerAccessPolicyIamPolicy", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccessContextManagerAccessPolicyIamPolicy.
 */
export interface GetAccessContextManagerAccessPolicyIamPolicyArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAccessContextManagerAccessPolicyIamPolicy.
 */
export interface GetAccessContextManagerAccessPolicyIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly name: string;
    readonly policyData: string;
}
export function getAccessContextManagerAccessPolicyIamPolicyOutput(args: GetAccessContextManagerAccessPolicyIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessContextManagerAccessPolicyIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAccessContextManagerAccessPolicyIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getAccessContextManagerAccessPolicyIamPolicy.
 */
export interface GetAccessContextManagerAccessPolicyIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
