// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOtsSearchIndexes(args: GetOtsSearchIndexesArgs, opts?: pulumi.InvokeOptions): Promise<GetOtsSearchIndexesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getOtsSearchIndexes:getOtsSearchIndexes", {
        "id": args.id,
        "ids": args.ids,
        "instanceName": args.instanceName,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "tableName": args.tableName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOtsSearchIndexes.
 */
export interface GetOtsSearchIndexesArgs {
    id?: string;
    ids?: string[];
    instanceName: string;
    nameRegex?: string;
    outputFile?: string;
    tableName: string;
}

/**
 * A collection of values returned by getOtsSearchIndexes.
 */
export interface GetOtsSearchIndexesResult {
    readonly id: string;
    readonly ids: string[];
    readonly indexes: outputs.GetOtsSearchIndexesIndex[];
    readonly instanceName: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly tableName: string;
}
export function getOtsSearchIndexesOutput(args: GetOtsSearchIndexesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOtsSearchIndexesResult> {
    return pulumi.output(args).apply((a: any) => getOtsSearchIndexes(a, opts))
}

/**
 * A collection of arguments for invoking getOtsSearchIndexes.
 */
export interface GetOtsSearchIndexesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceName: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    tableName: pulumi.Input<string>;
}
