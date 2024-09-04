// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingLocalLogAppFwDotPlotOper(args?: GetLoggingLocalLogAppFwDotPlotOperArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingLocalLogAppFwDotPlotOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getLoggingLocalLogAppFwDotPlotOper:getLoggingLocalLogAppFwDotPlotOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingLocalLogAppFwDotPlotOper.
 */
export interface GetLoggingLocalLogAppFwDotPlotOperArgs {
    id?: string;
    oper?: inputs.GetLoggingLocalLogAppFwDotPlotOperOper;
}

/**
 * A collection of values returned by getLoggingLocalLogAppFwDotPlotOper.
 */
export interface GetLoggingLocalLogAppFwDotPlotOperResult {
    readonly id: string;
    readonly oper?: outputs.GetLoggingLocalLogAppFwDotPlotOperOper;
}
export function getLoggingLocalLogAppFwDotPlotOperOutput(args?: GetLoggingLocalLogAppFwDotPlotOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingLocalLogAppFwDotPlotOperResult> {
    return pulumi.output(args).apply((a: any) => getLoggingLocalLogAppFwDotPlotOper(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingLocalLogAppFwDotPlotOper.
 */
export interface GetLoggingLocalLogAppFwDotPlotOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetLoggingLocalLogAppFwDotPlotOperOperArgs>;
}
