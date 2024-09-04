// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getHealthcareFhirStoreIamPolicy(args: GetHealthcareFhirStoreIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthcareFhirStoreIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getHealthcareFhirStoreIamPolicy:getHealthcareFhirStoreIamPolicy", {
        "fhirStoreId": args.fhirStoreId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthcareFhirStoreIamPolicy.
 */
export interface GetHealthcareFhirStoreIamPolicyArgs {
    fhirStoreId: string;
    id?: string;
}

/**
 * A collection of values returned by getHealthcareFhirStoreIamPolicy.
 */
export interface GetHealthcareFhirStoreIamPolicyResult {
    readonly etag: string;
    readonly fhirStoreId: string;
    readonly id: string;
    readonly policyData: string;
}
export function getHealthcareFhirStoreIamPolicyOutput(args: GetHealthcareFhirStoreIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthcareFhirStoreIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHealthcareFhirStoreIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHealthcareFhirStoreIamPolicy.
 */
export interface GetHealthcareFhirStoreIamPolicyOutputArgs {
    fhirStoreId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
