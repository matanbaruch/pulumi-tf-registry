// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwRateLimitOper(args?: GetFwRateLimitOperArgs, opts?: pulumi.InvokeOptions): Promise<GetFwRateLimitOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwRateLimitOper:getFwRateLimitOper", {
        "id": args.id,
        "oper": args.oper,
        "summary": args.summary,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwRateLimitOper.
 */
export interface GetFwRateLimitOperArgs {
    id?: string;
    oper?: inputs.GetFwRateLimitOperOper;
    summary?: inputs.GetFwRateLimitOperSummary;
}

/**
 * A collection of values returned by getFwRateLimitOper.
 */
export interface GetFwRateLimitOperResult {
    readonly id: string;
    readonly oper?: outputs.GetFwRateLimitOperOper;
    readonly summary?: outputs.GetFwRateLimitOperSummary;
}
export function getFwRateLimitOperOutput(args?: GetFwRateLimitOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwRateLimitOperResult> {
    return pulumi.output(args).apply((a: any) => getFwRateLimitOper(a, opts))
}

/**
 * A collection of arguments for invoking getFwRateLimitOper.
 */
export interface GetFwRateLimitOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetFwRateLimitOperOperArgs>;
    summary?: pulumi.Input<inputs.GetFwRateLimitOperSummaryArgs>;
}
