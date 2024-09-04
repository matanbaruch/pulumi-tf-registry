// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNsxtManager(args: GetNsxtManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetNsxtManagerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getNsxtManager:getNsxtManager", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNsxtManager.
 */
export interface GetNsxtManagerArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getNsxtManager.
 */
export interface GetNsxtManagerResult {
    readonly href: string;
    readonly id: string;
    readonly name: string;
}
export function getNsxtManagerOutput(args: GetNsxtManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNsxtManagerResult> {
    return pulumi.output(args).apply((a: any) => getNsxtManager(a, opts))
}

/**
 * A collection of arguments for invoking getNsxtManager.
 */
export interface GetNsxtManagerOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
