// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwStatusOper(args?: GetFwStatusOperArgs, opts?: pulumi.InvokeOptions): Promise<GetFwStatusOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwStatusOper:getFwStatusOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwStatusOper.
 */
export interface GetFwStatusOperArgs {
    id?: string;
    oper?: inputs.GetFwStatusOperOper;
}

/**
 * A collection of values returned by getFwStatusOper.
 */
export interface GetFwStatusOperResult {
    readonly id: string;
    readonly oper?: outputs.GetFwStatusOperOper;
}
export function getFwStatusOperOutput(args?: GetFwStatusOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwStatusOperResult> {
    return pulumi.output(args).apply((a: any) => getFwStatusOper(a, opts))
}

/**
 * A collection of arguments for invoking getFwStatusOper.
 */
export interface GetFwStatusOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetFwStatusOperOperArgs>;
}
