// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAwsUnityCatalogPolicy(args: GetAwsUnityCatalogPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsUnityCatalogPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("databricks:index/getAwsUnityCatalogPolicy:getAwsUnityCatalogPolicy", {
        "awsAccountId": args.awsAccountId,
        "bucketName": args.bucketName,
        "id": args.id,
        "kmsName": args.kmsName,
        "roleName": args.roleName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAwsUnityCatalogPolicy.
 */
export interface GetAwsUnityCatalogPolicyArgs {
    awsAccountId: string;
    bucketName: string;
    id?: string;
    kmsName?: string;
    roleName: string;
}

/**
 * A collection of values returned by getAwsUnityCatalogPolicy.
 */
export interface GetAwsUnityCatalogPolicyResult {
    readonly awsAccountId: string;
    readonly bucketName: string;
    readonly id: string;
    readonly json: string;
    readonly kmsName?: string;
    readonly roleName: string;
}
export function getAwsUnityCatalogPolicyOutput(args: GetAwsUnityCatalogPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwsUnityCatalogPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAwsUnityCatalogPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getAwsUnityCatalogPolicy.
 */
export interface GetAwsUnityCatalogPolicyOutputArgs {
    awsAccountId: pulumi.Input<string>;
    bucketName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    kmsName?: pulumi.Input<string>;
    roleName: pulumi.Input<string>;
}
