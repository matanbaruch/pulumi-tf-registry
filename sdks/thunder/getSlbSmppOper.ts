// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbSmppOper(args?: GetSlbSmppOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbSmppOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbSmppOper:getSlbSmppOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbSmppOper.
 */
export interface GetSlbSmppOperArgs {
    id?: string;
    oper?: inputs.GetSlbSmppOperOper;
}

/**
 * A collection of values returned by getSlbSmppOper.
 */
export interface GetSlbSmppOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSlbSmppOperOper;
}
export function getSlbSmppOperOutput(args?: GetSlbSmppOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbSmppOperResult> {
    return pulumi.output(args).apply((a: any) => getSlbSmppOper(a, opts))
}

/**
 * A collection of arguments for invoking getSlbSmppOper.
 */
export interface GetSlbSmppOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSlbSmppOperOperArgs>;
}
