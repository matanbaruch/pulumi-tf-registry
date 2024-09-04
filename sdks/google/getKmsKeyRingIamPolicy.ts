// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKmsKeyRingIamPolicy(args: GetKmsKeyRingIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsKeyRingIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getKmsKeyRingIamPolicy:getKmsKeyRingIamPolicy", {
        "id": args.id,
        "keyRingId": args.keyRingId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsKeyRingIamPolicy.
 */
export interface GetKmsKeyRingIamPolicyArgs {
    id?: string;
    keyRingId: string;
}

/**
 * A collection of values returned by getKmsKeyRingIamPolicy.
 */
export interface GetKmsKeyRingIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly keyRingId: string;
    readonly policyData: string;
}
export function getKmsKeyRingIamPolicyOutput(args: GetKmsKeyRingIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsKeyRingIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getKmsKeyRingIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getKmsKeyRingIamPolicy.
 */
export interface GetKmsKeyRingIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    keyRingId: pulumi.Input<string>;
}
