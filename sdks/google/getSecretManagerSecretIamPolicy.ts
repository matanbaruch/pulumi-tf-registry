// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecretManagerSecretIamPolicy(args: GetSecretManagerSecretIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretManagerSecretIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getSecretManagerSecretIamPolicy:getSecretManagerSecretIamPolicy", {
        "id": args.id,
        "project": args.project,
        "secretId": args.secretId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecretManagerSecretIamPolicy.
 */
export interface GetSecretManagerSecretIamPolicyArgs {
    id?: string;
    project?: string;
    secretId: string;
}

/**
 * A collection of values returned by getSecretManagerSecretIamPolicy.
 */
export interface GetSecretManagerSecretIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly policyData: string;
    readonly project: string;
    readonly secretId: string;
}
export function getSecretManagerSecretIamPolicyOutput(args: GetSecretManagerSecretIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretManagerSecretIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getSecretManagerSecretIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getSecretManagerSecretIamPolicy.
 */
export interface GetSecretManagerSecretIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    secretId: pulumi.Input<string>;
}
