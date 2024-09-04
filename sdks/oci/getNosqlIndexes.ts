// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNosqlIndexes(args: GetNosqlIndexesArgs, opts?: pulumi.InvokeOptions): Promise<GetNosqlIndexesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNosqlIndexes:getNosqlIndexes", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "state": args.state,
        "tableNameOrId": args.tableNameOrId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNosqlIndexes.
 */
export interface GetNosqlIndexesArgs {
    compartmentId?: string;
    filters?: inputs.GetNosqlIndexesFilter[];
    id?: string;
    name?: string;
    state?: string;
    tableNameOrId: string;
}

/**
 * A collection of values returned by getNosqlIndexes.
 */
export interface GetNosqlIndexesResult {
    readonly compartmentId?: string;
    readonly filters?: outputs.GetNosqlIndexesFilter[];
    readonly id: string;
    readonly indexCollections: outputs.GetNosqlIndexesIndexCollection[];
    readonly name?: string;
    readonly state?: string;
    readonly tableNameOrId: string;
}
export function getNosqlIndexesOutput(args: GetNosqlIndexesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNosqlIndexesResult> {
    return pulumi.output(args).apply((a: any) => getNosqlIndexes(a, opts))
}

/**
 * A collection of arguments for invoking getNosqlIndexes.
 */
export interface GetNosqlIndexesOutputArgs {
    compartmentId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetNosqlIndexesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tableNameOrId: pulumi.Input<string>;
}
