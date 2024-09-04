// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKeyChain(args: GetKeyChainArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyChainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getKeyChain:getKeyChain", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKeyChain.
 */
export interface GetKeyChainArgs {
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getKeyChain.
 */
export interface GetKeyChainResult {
    readonly device?: string;
    readonly id: string;
    readonly keys: outputs.GetKeyChainKey[];
    readonly name: string;
}
export function getKeyChainOutput(args: GetKeyChainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyChainResult> {
    return pulumi.output(args).apply((a: any) => getKeyChain(a, opts))
}

/**
 * A collection of arguments for invoking getKeyChain.
 */
export interface GetKeyChainOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
