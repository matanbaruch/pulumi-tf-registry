// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoggingLogViewIamPolicy(args: GetLoggingLogViewIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingLogViewIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getLoggingLogViewIamPolicy:getLoggingLogViewIamPolicy", {
        "bucket": args.bucket,
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "parent": args.parent,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingLogViewIamPolicy.
 */
export interface GetLoggingLogViewIamPolicyArgs {
    bucket: string;
    id?: string;
    location?: string;
    name: string;
    parent: string;
}

/**
 * A collection of values returned by getLoggingLogViewIamPolicy.
 */
export interface GetLoggingLogViewIamPolicyResult {
    readonly bucket: string;
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly parent: string;
    readonly policyData: string;
}
export function getLoggingLogViewIamPolicyOutput(args: GetLoggingLogViewIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingLogViewIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getLoggingLogViewIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingLogViewIamPolicy.
 */
export interface GetLoggingLogViewIamPolicyOutputArgs {
    bucket: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    parent: pulumi.Input<string>;
}
