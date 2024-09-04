// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDbbrainNoPrimaryKeyTables(args: GetDbbrainNoPrimaryKeyTablesArgs, opts?: pulumi.InvokeOptions): Promise<GetDbbrainNoPrimaryKeyTablesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDbbrainNoPrimaryKeyTables:getDbbrainNoPrimaryKeyTables", {
        "date": args.date,
        "id": args.id,
        "instanceId": args.instanceId,
        "product": args.product,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDbbrainNoPrimaryKeyTables.
 */
export interface GetDbbrainNoPrimaryKeyTablesArgs {
    date: string;
    id?: string;
    instanceId: string;
    product?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getDbbrainNoPrimaryKeyTables.
 */
export interface GetDbbrainNoPrimaryKeyTablesResult {
    readonly date: string;
    readonly id: string;
    readonly instanceId: string;
    readonly noPrimaryKeyTableCountDiff: number;
    readonly noPrimaryKeyTables: outputs.GetDbbrainNoPrimaryKeyTablesNoPrimaryKeyTable[];
    readonly product?: string;
    readonly resultOutputFile?: string;
    readonly timestamp: number;
}
export function getDbbrainNoPrimaryKeyTablesOutput(args: GetDbbrainNoPrimaryKeyTablesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDbbrainNoPrimaryKeyTablesResult> {
    return pulumi.output(args).apply((a: any) => getDbbrainNoPrimaryKeyTables(a, opts))
}

/**
 * A collection of arguments for invoking getDbbrainNoPrimaryKeyTables.
 */
export interface GetDbbrainNoPrimaryKeyTablesOutputArgs {
    date: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    product?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
