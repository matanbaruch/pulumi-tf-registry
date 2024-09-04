// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getClouddeployTargetIamPolicy(args: GetClouddeployTargetIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetClouddeployTargetIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getClouddeployTargetIamPolicy:getClouddeployTargetIamPolicy", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClouddeployTargetIamPolicy.
 */
export interface GetClouddeployTargetIamPolicyArgs {
    id?: string;
    location?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getClouddeployTargetIamPolicy.
 */
export interface GetClouddeployTargetIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly policyData: string;
    readonly project: string;
}
export function getClouddeployTargetIamPolicyOutput(args: GetClouddeployTargetIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClouddeployTargetIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getClouddeployTargetIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getClouddeployTargetIamPolicy.
 */
export interface GetClouddeployTargetIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
