// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAuditCosRegions(args?: GetAuditCosRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetAuditCosRegionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getAuditCosRegions:getAuditCosRegions", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuditCosRegions.
 */
export interface GetAuditCosRegionsArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getAuditCosRegions.
 */
export interface GetAuditCosRegionsResult {
    readonly auditCosRegionLists: outputs.GetAuditCosRegionsAuditCosRegionList[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getAuditCosRegionsOutput(args?: GetAuditCosRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuditCosRegionsResult> {
    return pulumi.output(args).apply((a: any) => getAuditCosRegions(a, opts))
}

/**
 * A collection of arguments for invoking getAuditCosRegions.
 */
export interface GetAuditCosRegionsOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
