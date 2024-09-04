// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemViewHotfixOper(args?: GetSystemViewHotfixOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemViewHotfixOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemViewHotfixOper:getSystemViewHotfixOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemViewHotfixOper.
 */
export interface GetSystemViewHotfixOperArgs {
    id?: string;
    oper?: inputs.GetSystemViewHotfixOperOper;
}

/**
 * A collection of values returned by getSystemViewHotfixOper.
 */
export interface GetSystemViewHotfixOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSystemViewHotfixOperOper;
}
export function getSystemViewHotfixOperOutput(args?: GetSystemViewHotfixOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemViewHotfixOperResult> {
    return pulumi.output(args).apply((a: any) => getSystemViewHotfixOper(a, opts))
}

/**
 * A collection of arguments for invoking getSystemViewHotfixOper.
 */
export interface GetSystemViewHotfixOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSystemViewHotfixOperOperArgs>;
}
