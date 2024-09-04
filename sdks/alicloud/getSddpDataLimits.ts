// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSddpDataLimits(args?: GetSddpDataLimitsArgs, opts?: pulumi.InvokeOptions): Promise<GetSddpDataLimitsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSddpDataLimits:getSddpDataLimits", {
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "parentId": args.parentId,
        "resourceType": args.resourceType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSddpDataLimits.
 */
export interface GetSddpDataLimitsArgs {
    id?: string;
    ids?: string[];
    outputFile?: string;
    parentId?: string;
    resourceType?: string;
}

/**
 * A collection of values returned by getSddpDataLimits.
 */
export interface GetSddpDataLimitsResult {
    readonly id: string;
    readonly ids: string[];
    readonly limits: outputs.GetSddpDataLimitsLimit[];
    readonly outputFile?: string;
    readonly parentId?: string;
    readonly resourceType?: string;
}
export function getSddpDataLimitsOutput(args?: GetSddpDataLimitsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSddpDataLimitsResult> {
    return pulumi.output(args).apply((a: any) => getSddpDataLimits(a, opts))
}

/**
 * A collection of arguments for invoking getSddpDataLimits.
 */
export interface GetSddpDataLimitsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    parentId?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
}
