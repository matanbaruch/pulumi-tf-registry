// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusterProfile(args?: GetClusterProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("spectrocloud:index/getClusterProfile:getClusterProfile", {
        "context": args.context,
        "id": args.id,
        "name": args.name,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterProfile.
 */
export interface GetClusterProfileArgs {
    context?: string;
    id?: string;
    name?: string;
    version?: string;
}

/**
 * A collection of values returned by getClusterProfile.
 */
export interface GetClusterProfileResult {
    readonly context?: string;
    readonly id: string;
    readonly name: string;
    readonly packs: outputs.GetClusterProfilePack[];
    readonly version: string;
}
export function getClusterProfileOutput(args?: GetClusterProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterProfileResult> {
    return pulumi.output(args).apply((a: any) => getClusterProfile(a, opts))
}

/**
 * A collection of arguments for invoking getClusterProfile.
 */
export interface GetClusterProfileOutputArgs {
    context?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
