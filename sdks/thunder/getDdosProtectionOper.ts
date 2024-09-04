// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosProtectionOper(args?: GetDdosProtectionOperArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosProtectionOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosProtectionOper:getDdosProtectionOper", {
        "id": args.id,
        "ipv6SrcHashMaskBits": args.ipv6SrcHashMaskBits,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosProtectionOper.
 */
export interface GetDdosProtectionOperArgs {
    id?: string;
    ipv6SrcHashMaskBits?: inputs.GetDdosProtectionOperIpv6SrcHashMaskBits;
    oper?: inputs.GetDdosProtectionOperOper;
}

/**
 * A collection of values returned by getDdosProtectionOper.
 */
export interface GetDdosProtectionOperResult {
    readonly id: string;
    readonly ipv6SrcHashMaskBits?: outputs.GetDdosProtectionOperIpv6SrcHashMaskBits;
    readonly oper?: outputs.GetDdosProtectionOperOper;
}
export function getDdosProtectionOperOutput(args?: GetDdosProtectionOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosProtectionOperResult> {
    return pulumi.output(args).apply((a: any) => getDdosProtectionOper(a, opts))
}

/**
 * A collection of arguments for invoking getDdosProtectionOper.
 */
export interface GetDdosProtectionOperOutputArgs {
    id?: pulumi.Input<string>;
    ipv6SrcHashMaskBits?: pulumi.Input<inputs.GetDdosProtectionOperIpv6SrcHashMaskBitsArgs>;
    oper?: pulumi.Input<inputs.GetDdosProtectionOperOperArgs>;
}
