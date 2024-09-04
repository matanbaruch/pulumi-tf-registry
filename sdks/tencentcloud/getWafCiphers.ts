// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafCiphers(args?: GetWafCiphersArgs, opts?: pulumi.InvokeOptions): Promise<GetWafCiphersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getWafCiphers:getWafCiphers", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafCiphers.
 */
export interface GetWafCiphersArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getWafCiphers.
 */
export interface GetWafCiphersResult {
    readonly ciphers: outputs.GetWafCiphersCipher[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getWafCiphersOutput(args?: GetWafCiphersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafCiphersResult> {
    return pulumi.output(args).apply((a: any) => getWafCiphers(a, opts))
}

/**
 * A collection of arguments for invoking getWafCiphers.
 */
export interface GetWafCiphersOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
