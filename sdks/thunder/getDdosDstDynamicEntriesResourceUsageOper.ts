// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosDstDynamicEntriesResourceUsageOper(args?: GetDdosDstDynamicEntriesResourceUsageOperArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosDstDynamicEntriesResourceUsageOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosDstDynamicEntriesResourceUsageOper:getDdosDstDynamicEntriesResourceUsageOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosDstDynamicEntriesResourceUsageOper.
 */
export interface GetDdosDstDynamicEntriesResourceUsageOperArgs {
    id?: string;
    oper?: inputs.GetDdosDstDynamicEntriesResourceUsageOperOper;
}

/**
 * A collection of values returned by getDdosDstDynamicEntriesResourceUsageOper.
 */
export interface GetDdosDstDynamicEntriesResourceUsageOperResult {
    readonly id: string;
    readonly oper?: outputs.GetDdosDstDynamicEntriesResourceUsageOperOper;
}
export function getDdosDstDynamicEntriesResourceUsageOperOutput(args?: GetDdosDstDynamicEntriesResourceUsageOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosDstDynamicEntriesResourceUsageOperResult> {
    return pulumi.output(args).apply((a: any) => getDdosDstDynamicEntriesResourceUsageOper(a, opts))
}

/**
 * A collection of arguments for invoking getDdosDstDynamicEntriesResourceUsageOper.
 */
export interface GetDdosDstDynamicEntriesResourceUsageOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetDdosDstDynamicEntriesResourceUsageOperOperArgs>;
}
