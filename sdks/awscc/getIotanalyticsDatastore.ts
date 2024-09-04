// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotanalyticsDatastore(args: GetIotanalyticsDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetIotanalyticsDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotanalyticsDatastore:getIotanalyticsDatastore", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotanalyticsDatastore.
 */
export interface GetIotanalyticsDatastoreArgs {
    id: string;
}

/**
 * A collection of values returned by getIotanalyticsDatastore.
 */
export interface GetIotanalyticsDatastoreResult {
    readonly datastoreId: string;
    readonly datastoreName: string;
    readonly datastorePartitions: outputs.GetIotanalyticsDatastoreDatastorePartitions;
    readonly datastoreStorage: outputs.GetIotanalyticsDatastoreDatastoreStorage;
    readonly fileFormatConfiguration: outputs.GetIotanalyticsDatastoreFileFormatConfiguration;
    readonly id: string;
    readonly retentionPeriod: outputs.GetIotanalyticsDatastoreRetentionPeriod;
    readonly tags: outputs.GetIotanalyticsDatastoreTag[];
}
export function getIotanalyticsDatastoreOutput(args: GetIotanalyticsDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotanalyticsDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getIotanalyticsDatastore(a, opts))
}

/**
 * A collection of arguments for invoking getIotanalyticsDatastore.
 */
export interface GetIotanalyticsDatastoreOutputArgs {
    id: pulumi.Input<string>;
}
