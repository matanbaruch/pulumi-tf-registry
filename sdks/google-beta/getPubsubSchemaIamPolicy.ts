// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPubsubSchemaIamPolicy(args: GetPubsubSchemaIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPubsubSchemaIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getPubsubSchemaIamPolicy:getPubsubSchemaIamPolicy", {
        "id": args.id,
        "project": args.project,
        "schema": args.schema,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPubsubSchemaIamPolicy.
 */
export interface GetPubsubSchemaIamPolicyArgs {
    id?: string;
    project?: string;
    schema: string;
}

/**
 * A collection of values returned by getPubsubSchemaIamPolicy.
 */
export interface GetPubsubSchemaIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly policyData: string;
    readonly project: string;
    readonly schema: string;
}
export function getPubsubSchemaIamPolicyOutput(args: GetPubsubSchemaIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPubsubSchemaIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPubsubSchemaIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getPubsubSchemaIamPolicy.
 */
export interface GetPubsubSchemaIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    schema: pulumi.Input<string>;
}
