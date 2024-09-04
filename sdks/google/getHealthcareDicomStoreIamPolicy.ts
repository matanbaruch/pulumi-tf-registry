// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getHealthcareDicomStoreIamPolicy(args: GetHealthcareDicomStoreIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthcareDicomStoreIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getHealthcareDicomStoreIamPolicy:getHealthcareDicomStoreIamPolicy", {
        "dicomStoreId": args.dicomStoreId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthcareDicomStoreIamPolicy.
 */
export interface GetHealthcareDicomStoreIamPolicyArgs {
    dicomStoreId: string;
    id?: string;
}

/**
 * A collection of values returned by getHealthcareDicomStoreIamPolicy.
 */
export interface GetHealthcareDicomStoreIamPolicyResult {
    readonly dicomStoreId: string;
    readonly etag: string;
    readonly id: string;
    readonly policyData: string;
}
export function getHealthcareDicomStoreIamPolicyOutput(args: GetHealthcareDicomStoreIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthcareDicomStoreIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHealthcareDicomStoreIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHealthcareDicomStoreIamPolicy.
 */
export interface GetHealthcareDicomStoreIamPolicyOutputArgs {
    dicomStoreId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
