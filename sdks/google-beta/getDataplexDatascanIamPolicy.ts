// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataplexDatascanIamPolicy(args: GetDataplexDatascanIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDataplexDatascanIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getDataplexDatascanIamPolicy:getDataplexDatascanIamPolicy", {
        "dataScanId": args.dataScanId,
        "id": args.id,
        "location": args.location,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataplexDatascanIamPolicy.
 */
export interface GetDataplexDatascanIamPolicyArgs {
    dataScanId: string;
    id?: string;
    location?: string;
    project?: string;
}

/**
 * A collection of values returned by getDataplexDatascanIamPolicy.
 */
export interface GetDataplexDatascanIamPolicyResult {
    readonly dataScanId: string;
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly policyData: string;
    readonly project: string;
}
export function getDataplexDatascanIamPolicyOutput(args: GetDataplexDatascanIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataplexDatascanIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDataplexDatascanIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getDataplexDatascanIamPolicy.
 */
export interface GetDataplexDatascanIamPolicyOutputArgs {
    dataScanId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
