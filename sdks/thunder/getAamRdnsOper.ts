// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamRdnsOper(args?: GetAamRdnsOperArgs, opts?: pulumi.InvokeOptions): Promise<GetAamRdnsOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamRdnsOper:getAamRdnsOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamRdnsOper.
 */
export interface GetAamRdnsOperArgs {
    id?: string;
    oper?: inputs.GetAamRdnsOperOper;
}

/**
 * A collection of values returned by getAamRdnsOper.
 */
export interface GetAamRdnsOperResult {
    readonly id: string;
    readonly oper?: outputs.GetAamRdnsOperOper;
}
export function getAamRdnsOperOutput(args?: GetAamRdnsOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamRdnsOperResult> {
    return pulumi.output(args).apply((a: any) => getAamRdnsOper(a, opts))
}

/**
 * A collection of arguments for invoking getAamRdnsOper.
 */
export interface GetAamRdnsOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetAamRdnsOperOperArgs>;
}
