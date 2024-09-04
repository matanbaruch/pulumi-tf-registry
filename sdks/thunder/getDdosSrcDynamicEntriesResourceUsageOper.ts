// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosSrcDynamicEntriesResourceUsageOper(args?: GetDdosSrcDynamicEntriesResourceUsageOperArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosSrcDynamicEntriesResourceUsageOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosSrcDynamicEntriesResourceUsageOper:getDdosSrcDynamicEntriesResourceUsageOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosSrcDynamicEntriesResourceUsageOper.
 */
export interface GetDdosSrcDynamicEntriesResourceUsageOperArgs {
    id?: string;
    oper?: inputs.GetDdosSrcDynamicEntriesResourceUsageOperOper;
}

/**
 * A collection of values returned by getDdosSrcDynamicEntriesResourceUsageOper.
 */
export interface GetDdosSrcDynamicEntriesResourceUsageOperResult {
    readonly id: string;
    readonly oper?: outputs.GetDdosSrcDynamicEntriesResourceUsageOperOper;
}
export function getDdosSrcDynamicEntriesResourceUsageOperOutput(args?: GetDdosSrcDynamicEntriesResourceUsageOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosSrcDynamicEntriesResourceUsageOperResult> {
    return pulumi.output(args).apply((a: any) => getDdosSrcDynamicEntriesResourceUsageOper(a, opts))
}

/**
 * A collection of arguments for invoking getDdosSrcDynamicEntriesResourceUsageOper.
 */
export interface GetDdosSrcDynamicEntriesResourceUsageOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetDdosSrcDynamicEntriesResourceUsageOperOperArgs>;
}
