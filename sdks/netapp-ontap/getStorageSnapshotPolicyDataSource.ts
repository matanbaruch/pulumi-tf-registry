// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageSnapshotPolicyDataSource(args: GetStorageSnapshotPolicyDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageSnapshotPolicyDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getStorageSnapshotPolicyDataSource:getStorageSnapshotPolicyDataSource", {
        "cxProfileName": args.cxProfileName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageSnapshotPolicyDataSource.
 */
export interface GetStorageSnapshotPolicyDataSourceArgs {
    cxProfileName: string;
    name: string;
}

/**
 * A collection of values returned by getStorageSnapshotPolicyDataSource.
 */
export interface GetStorageSnapshotPolicyDataSourceResult {
    readonly comment: string;
    readonly copies: outputs.GetStorageSnapshotPolicyDataSourceCopy[];
    readonly cxProfileName: string;
    readonly enabled: boolean;
    readonly id: string;
    readonly name: string;
    readonly svmName: string;
}
export function getStorageSnapshotPolicyDataSourceOutput(args: GetStorageSnapshotPolicyDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageSnapshotPolicyDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getStorageSnapshotPolicyDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getStorageSnapshotPolicyDataSource.
 */
export interface GetStorageSnapshotPolicyDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
