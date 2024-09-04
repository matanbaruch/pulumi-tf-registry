// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getQbusinessRetriever(args: GetQbusinessRetrieverArgs, opts?: pulumi.InvokeOptions): Promise<GetQbusinessRetrieverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getQbusinessRetriever:getQbusinessRetriever", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQbusinessRetriever.
 */
export interface GetQbusinessRetrieverArgs {
    id: string;
}

/**
 * A collection of values returned by getQbusinessRetriever.
 */
export interface GetQbusinessRetrieverResult {
    readonly applicationId: string;
    readonly configuration: outputs.GetQbusinessRetrieverConfiguration;
    readonly createdAt: string;
    readonly displayName: string;
    readonly id: string;
    readonly retrieverArn: string;
    readonly retrieverId: string;
    readonly roleArn: string;
    readonly status: string;
    readonly tags: outputs.GetQbusinessRetrieverTag[];
    readonly type: string;
    readonly updatedAt: string;
}
export function getQbusinessRetrieverOutput(args: GetQbusinessRetrieverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQbusinessRetrieverResult> {
    return pulumi.output(args).apply((a: any) => getQbusinessRetriever(a, opts))
}

/**
 * A collection of arguments for invoking getQbusinessRetriever.
 */
export interface GetQbusinessRetrieverOutputArgs {
    id: pulumi.Input<string>;
}
