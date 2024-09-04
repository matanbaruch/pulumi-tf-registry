// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatastore(args: GetDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vsphere:index/getDatastore:getDatastore", {
        "datacenterId": args.datacenterId,
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatastore.
 */
export interface GetDatastoreArgs {
    datacenterId?: string;
    id?: string;
    name: string;
    stats?: {[key: string]: string};
}

/**
 * A collection of values returned by getDatastore.
 */
export interface GetDatastoreResult {
    readonly datacenterId?: string;
    readonly id: string;
    readonly name: string;
    readonly stats?: {[key: string]: string};
}
export function getDatastoreOutput(args: GetDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getDatastore(a, opts))
}

/**
 * A collection of arguments for invoking getDatastore.
 */
export interface GetDatastoreOutputArgs {
    datacenterId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
