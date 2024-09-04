// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageTableEntities(args: GetStorageTableEntitiesArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTableEntitiesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getStorageTableEntities:getStorageTableEntities", {
        "filter": args.filter,
        "id": args.id,
        "selects": args.selects,
        "storageTableId": args.storageTableId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageTableEntities.
 */
export interface GetStorageTableEntitiesArgs {
    filter: string;
    id?: string;
    selects?: string[];
    storageTableId: string;
    timeouts?: inputs.GetStorageTableEntitiesTimeouts;
}

/**
 * A collection of values returned by getStorageTableEntities.
 */
export interface GetStorageTableEntitiesResult {
    readonly filter: string;
    readonly id: string;
    readonly items: outputs.GetStorageTableEntitiesItem[];
    readonly selects?: string[];
    readonly storageTableId: string;
    readonly timeouts?: outputs.GetStorageTableEntitiesTimeouts;
}
export function getStorageTableEntitiesOutput(args: GetStorageTableEntitiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageTableEntitiesResult> {
    return pulumi.output(args).apply((a: any) => getStorageTableEntities(a, opts))
}

/**
 * A collection of arguments for invoking getStorageTableEntities.
 */
export interface GetStorageTableEntitiesOutputArgs {
    filter: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    selects?: pulumi.Input<pulumi.Input<string>[]>;
    storageTableId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetStorageTableEntitiesTimeoutsArgs>;
}
