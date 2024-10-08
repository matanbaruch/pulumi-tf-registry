// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVertexAiFeaturestoreEntitytypeIamPolicy(args: GetVertexAiFeaturestoreEntitytypeIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetVertexAiFeaturestoreEntitytypeIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getVertexAiFeaturestoreEntitytypeIamPolicy:getVertexAiFeaturestoreEntitytypeIamPolicy", {
        "entitytype": args.entitytype,
        "featurestore": args.featurestore,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVertexAiFeaturestoreEntitytypeIamPolicy.
 */
export interface GetVertexAiFeaturestoreEntitytypeIamPolicyArgs {
    entitytype: string;
    featurestore: string;
    id?: string;
}

/**
 * A collection of values returned by getVertexAiFeaturestoreEntitytypeIamPolicy.
 */
export interface GetVertexAiFeaturestoreEntitytypeIamPolicyResult {
    readonly entitytype: string;
    readonly etag: string;
    readonly featurestore: string;
    readonly id: string;
    readonly policyData: string;
}
export function getVertexAiFeaturestoreEntitytypeIamPolicyOutput(args: GetVertexAiFeaturestoreEntitytypeIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVertexAiFeaturestoreEntitytypeIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getVertexAiFeaturestoreEntitytypeIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getVertexAiFeaturestoreEntitytypeIamPolicy.
 */
export interface GetVertexAiFeaturestoreEntitytypeIamPolicyOutputArgs {
    entitytype: pulumi.Input<string>;
    featurestore: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
