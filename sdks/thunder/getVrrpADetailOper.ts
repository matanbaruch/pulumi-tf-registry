// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVrrpADetailOper(args?: GetVrrpADetailOperArgs, opts?: pulumi.InvokeOptions): Promise<GetVrrpADetailOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getVrrpADetailOper:getVrrpADetailOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVrrpADetailOper.
 */
export interface GetVrrpADetailOperArgs {
    id?: string;
    oper?: inputs.GetVrrpADetailOperOper;
}

/**
 * A collection of values returned by getVrrpADetailOper.
 */
export interface GetVrrpADetailOperResult {
    readonly id: string;
    readonly oper?: outputs.GetVrrpADetailOperOper;
}
export function getVrrpADetailOperOutput(args?: GetVrrpADetailOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVrrpADetailOperResult> {
    return pulumi.output(args).apply((a: any) => getVrrpADetailOper(a, opts))
}

/**
 * A collection of arguments for invoking getVrrpADetailOper.
 */
export interface GetVrrpADetailOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetVrrpADetailOperOperArgs>;
}
