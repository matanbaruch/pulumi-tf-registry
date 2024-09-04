// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterKeychain(args: GetRouterKeychainArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterKeychainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getRouterKeychain:getRouterKeychain", {
        "id": args.id,
        "name": args.name,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterKeychain.
 */
export interface GetRouterKeychainArgs {
    id?: string;
    name: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getRouterKeychain.
 */
export interface GetRouterKeychainResult {
    readonly id: string;
    readonly keys: outputs.GetRouterKeychainKey[];
    readonly name: string;
    readonly vdomparam?: string;
}
export function getRouterKeychainOutput(args: GetRouterKeychainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterKeychainResult> {
    return pulumi.output(args).apply((a: any) => getRouterKeychain(a, opts))
}

/**
 * A collection of arguments for invoking getRouterKeychain.
 */
export interface GetRouterKeychainOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
