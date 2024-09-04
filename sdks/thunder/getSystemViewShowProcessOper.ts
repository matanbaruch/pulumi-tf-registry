// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemViewShowProcessOper(args?: GetSystemViewShowProcessOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemViewShowProcessOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemViewShowProcessOper:getSystemViewShowProcessOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemViewShowProcessOper.
 */
export interface GetSystemViewShowProcessOperArgs {
    id?: string;
    oper?: inputs.GetSystemViewShowProcessOperOper;
}

/**
 * A collection of values returned by getSystemViewShowProcessOper.
 */
export interface GetSystemViewShowProcessOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSystemViewShowProcessOperOper;
}
export function getSystemViewShowProcessOperOutput(args?: GetSystemViewShowProcessOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemViewShowProcessOperResult> {
    return pulumi.output(args).apply((a: any) => getSystemViewShowProcessOper(a, opts))
}

/**
 * A collection of arguments for invoking getSystemViewShowProcessOper.
 */
export interface GetSystemViewShowProcessOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSystemViewShowProcessOperOperArgs>;
}
