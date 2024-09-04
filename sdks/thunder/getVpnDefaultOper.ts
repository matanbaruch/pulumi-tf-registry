// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnDefaultOper(args?: GetVpnDefaultOperArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnDefaultOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getVpnDefaultOper:getVpnDefaultOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnDefaultOper.
 */
export interface GetVpnDefaultOperArgs {
    id?: string;
    oper?: inputs.GetVpnDefaultOperOper;
}

/**
 * A collection of values returned by getVpnDefaultOper.
 */
export interface GetVpnDefaultOperResult {
    readonly id: string;
    readonly oper?: outputs.GetVpnDefaultOperOper;
}
export function getVpnDefaultOperOutput(args?: GetVpnDefaultOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnDefaultOperResult> {
    return pulumi.output(args).apply((a: any) => getVpnDefaultOper(a, opts))
}

/**
 * A collection of arguments for invoking getVpnDefaultOper.
 */
export interface GetVpnDefaultOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetVpnDefaultOperOperArgs>;
}
