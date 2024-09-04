// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTsdbInstances(args?: GetTsdbInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetTsdbInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getTsdbInstances:getTsdbInstances", {
        "appKey": args.appKey,
        "enableDetails": args.enableDetails,
        "engineType": args.engineType,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "queryStr": args.queryStr,
        "status": args.status,
        "statusList": args.statusList,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTsdbInstances.
 */
export interface GetTsdbInstancesArgs {
    appKey?: string;
    enableDetails?: boolean;
    engineType?: string;
    id?: string;
    ids?: string[];
    outputFile?: string;
    queryStr?: string;
    status?: string;
    statusList?: string;
}

/**
 * A collection of values returned by getTsdbInstances.
 */
export interface GetTsdbInstancesResult {
    readonly appKey?: string;
    readonly enableDetails?: boolean;
    readonly engineType?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetTsdbInstancesInstance[];
    readonly outputFile?: string;
    readonly queryStr?: string;
    readonly status?: string;
    readonly statusList?: string;
}
export function getTsdbInstancesOutput(args?: GetTsdbInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTsdbInstancesResult> {
    return pulumi.output(args).apply((a: any) => getTsdbInstances(a, opts))
}

/**
 * A collection of arguments for invoking getTsdbInstances.
 */
export interface GetTsdbInstancesOutputArgs {
    appKey?: pulumi.Input<string>;
    enableDetails?: pulumi.Input<boolean>;
    engineType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    queryStr?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    statusList?: pulumi.Input<string>;
}
