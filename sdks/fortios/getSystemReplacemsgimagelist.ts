// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemReplacemsgimagelist(args?: GetSystemReplacemsgimagelistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemReplacemsgimagelistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemReplacemsgimagelist:getSystemReplacemsgimagelist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemReplacemsgimagelist.
 */
export interface GetSystemReplacemsgimagelistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemReplacemsgimagelist.
 */
export interface GetSystemReplacemsgimagelistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getSystemReplacemsgimagelistOutput(args?: GetSystemReplacemsgimagelistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemReplacemsgimagelistResult> {
    return pulumi.output(args).apply((a: any) => getSystemReplacemsgimagelist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemReplacemsgimagelist.
 */
export interface GetSystemReplacemsgimagelistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
