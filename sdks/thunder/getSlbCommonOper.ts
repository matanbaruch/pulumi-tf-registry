// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbCommonOper(args?: GetSlbCommonOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbCommonOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbCommonOper:getSlbCommonOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbCommonOper.
 */
export interface GetSlbCommonOperArgs {
    id?: string;
    oper?: inputs.GetSlbCommonOperOper;
}

/**
 * A collection of values returned by getSlbCommonOper.
 */
export interface GetSlbCommonOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSlbCommonOperOper;
}
export function getSlbCommonOperOutput(args?: GetSlbCommonOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbCommonOperResult> {
    return pulumi.output(args).apply((a: any) => getSlbCommonOper(a, opts))
}

/**
 * A collection of arguments for invoking getSlbCommonOper.
 */
export interface GetSlbCommonOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSlbCommonOperOperArgs>;
}
