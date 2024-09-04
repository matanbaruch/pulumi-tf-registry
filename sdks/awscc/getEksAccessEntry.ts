// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEksAccessEntry(args: GetEksAccessEntryArgs, opts?: pulumi.InvokeOptions): Promise<GetEksAccessEntryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEksAccessEntry:getEksAccessEntry", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEksAccessEntry.
 */
export interface GetEksAccessEntryArgs {
    id: string;
}

/**
 * A collection of values returned by getEksAccessEntry.
 */
export interface GetEksAccessEntryResult {
    readonly accessEntryArn: string;
    readonly accessPolicies: outputs.GetEksAccessEntryAccessPolicy[];
    readonly clusterName: string;
    readonly id: string;
    readonly kubernetesGroups: string[];
    readonly principalArn: string;
    readonly tags: outputs.GetEksAccessEntryTag[];
    readonly type: string;
    readonly username: string;
}
export function getEksAccessEntryOutput(args: GetEksAccessEntryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEksAccessEntryResult> {
    return pulumi.output(args).apply((a: any) => getEksAccessEntry(a, opts))
}

/**
 * A collection of arguments for invoking getEksAccessEntry.
 */
export interface GetEksAccessEntryOutputArgs {
    id: pulumi.Input<string>;
}
