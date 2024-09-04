// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataprocJobIamPolicy(args: GetDataprocJobIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDataprocJobIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getDataprocJobIamPolicy:getDataprocJobIamPolicy", {
        "id": args.id,
        "jobId": args.jobId,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataprocJobIamPolicy.
 */
export interface GetDataprocJobIamPolicyArgs {
    id?: string;
    jobId: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getDataprocJobIamPolicy.
 */
export interface GetDataprocJobIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly jobId: string;
    readonly policyData: string;
    readonly project: string;
    readonly region: string;
}
export function getDataprocJobIamPolicyOutput(args: GetDataprocJobIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataprocJobIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDataprocJobIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getDataprocJobIamPolicy.
 */
export interface GetDataprocJobIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    jobId: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
