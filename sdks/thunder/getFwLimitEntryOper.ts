// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwLimitEntryOper(args?: GetFwLimitEntryOperArgs, opts?: pulumi.InvokeOptions): Promise<GetFwLimitEntryOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwLimitEntryOper:getFwLimitEntryOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwLimitEntryOper.
 */
export interface GetFwLimitEntryOperArgs {
    id?: string;
    oper?: inputs.GetFwLimitEntryOperOper;
}

/**
 * A collection of values returned by getFwLimitEntryOper.
 */
export interface GetFwLimitEntryOperResult {
    readonly id: string;
    readonly oper?: outputs.GetFwLimitEntryOperOper;
}
export function getFwLimitEntryOperOutput(args?: GetFwLimitEntryOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwLimitEntryOperResult> {
    return pulumi.output(args).apply((a: any) => getFwLimitEntryOper(a, opts))
}

/**
 * A collection of arguments for invoking getFwLimitEntryOper.
 */
export interface GetFwLimitEntryOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetFwLimitEntryOperOperArgs>;
}
