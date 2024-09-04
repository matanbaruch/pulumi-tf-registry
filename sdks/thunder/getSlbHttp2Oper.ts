// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbHttp2Oper(args?: GetSlbHttp2OperArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbHttp2OperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbHttp2Oper:getSlbHttp2Oper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbHttp2Oper.
 */
export interface GetSlbHttp2OperArgs {
    id?: string;
    oper?: inputs.GetSlbHttp2OperOper;
}

/**
 * A collection of values returned by getSlbHttp2Oper.
 */
export interface GetSlbHttp2OperResult {
    readonly id: string;
    readonly oper?: outputs.GetSlbHttp2OperOper;
}
export function getSlbHttp2OperOutput(args?: GetSlbHttp2OperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbHttp2OperResult> {
    return pulumi.output(args).apply((a: any) => getSlbHttp2Oper(a, opts))
}

/**
 * A collection of arguments for invoking getSlbHttp2Oper.
 */
export interface GetSlbHttp2OperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSlbHttp2OperOperArgs>;
}
