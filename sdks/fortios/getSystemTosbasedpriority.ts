// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemTosbasedpriority(args: GetSystemTosbasedpriorityArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTosbasedpriorityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemTosbasedpriority:getSystemTosbasedpriority", {
        "fosid": args.fosid,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemTosbasedpriority.
 */
export interface GetSystemTosbasedpriorityArgs {
    fosid: number;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemTosbasedpriority.
 */
export interface GetSystemTosbasedpriorityResult {
    readonly fosid: number;
    readonly id: string;
    readonly priority: string;
    readonly tos: number;
    readonly vdomparam?: string;
}
export function getSystemTosbasedpriorityOutput(args: GetSystemTosbasedpriorityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemTosbasedpriorityResult> {
    return pulumi.output(args).apply((a: any) => getSystemTosbasedpriority(a, opts))
}

/**
 * A collection of arguments for invoking getSystemTosbasedpriority.
 */
export interface GetSystemTosbasedpriorityOutputArgs {
    fosid: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
