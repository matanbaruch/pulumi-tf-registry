// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemCpuDataCpuOper(args?: GetSystemCpuDataCpuOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemCpuDataCpuOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemCpuDataCpuOper:getSystemCpuDataCpuOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemCpuDataCpuOper.
 */
export interface GetSystemCpuDataCpuOperArgs {
    id?: string;
    oper?: inputs.GetSystemCpuDataCpuOperOper;
}

/**
 * A collection of values returned by getSystemCpuDataCpuOper.
 */
export interface GetSystemCpuDataCpuOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSystemCpuDataCpuOperOper;
}
export function getSystemCpuDataCpuOperOutput(args?: GetSystemCpuDataCpuOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemCpuDataCpuOperResult> {
    return pulumi.output(args).apply((a: any) => getSystemCpuDataCpuOper(a, opts))
}

/**
 * A collection of arguments for invoking getSystemCpuDataCpuOper.
 */
export interface GetSystemCpuDataCpuOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSystemCpuDataCpuOperOperArgs>;
}
