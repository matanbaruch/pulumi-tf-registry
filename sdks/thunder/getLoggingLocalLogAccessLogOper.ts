// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingLocalLogAccessLogOper(args?: GetLoggingLocalLogAccessLogOperArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingLocalLogAccessLogOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getLoggingLocalLogAccessLogOper:getLoggingLocalLogAccessLogOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingLocalLogAccessLogOper.
 */
export interface GetLoggingLocalLogAccessLogOperArgs {
    id?: string;
    oper?: inputs.GetLoggingLocalLogAccessLogOperOper;
}

/**
 * A collection of values returned by getLoggingLocalLogAccessLogOper.
 */
export interface GetLoggingLocalLogAccessLogOperResult {
    readonly id: string;
    readonly oper?: outputs.GetLoggingLocalLogAccessLogOperOper;
}
export function getLoggingLocalLogAccessLogOperOutput(args?: GetLoggingLocalLogAccessLogOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingLocalLogAccessLogOperResult> {
    return pulumi.output(args).apply((a: any) => getLoggingLocalLogAccessLogOper(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingLocalLogAccessLogOper.
 */
export interface GetLoggingLocalLogAccessLogOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetLoggingLocalLogAccessLogOperOperArgs>;
}
