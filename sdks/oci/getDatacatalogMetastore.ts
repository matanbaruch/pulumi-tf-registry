// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacatalogMetastore(args: GetDatacatalogMetastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacatalogMetastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatacatalogMetastore:getDatacatalogMetastore", {
        "metastoreId": args.metastoreId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacatalogMetastore.
 */
export interface GetDatacatalogMetastoreArgs {
    metastoreId: string;
}

/**
 * A collection of values returned by getDatacatalogMetastore.
 */
export interface GetDatacatalogMetastoreResult {
    readonly compartmentId: string;
    readonly defaultExternalTableLocation: string;
    readonly defaultManagedTableLocation: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly locks: outputs.GetDatacatalogMetastoreLock[];
    readonly metastoreId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDatacatalogMetastoreOutput(args: GetDatacatalogMetastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacatalogMetastoreResult> {
    return pulumi.output(args).apply((a: any) => getDatacatalogMetastore(a, opts))
}

/**
 * A collection of arguments for invoking getDatacatalogMetastore.
 */
export interface GetDatacatalogMetastoreOutputArgs {
    metastoreId: pulumi.Input<string>;
}
