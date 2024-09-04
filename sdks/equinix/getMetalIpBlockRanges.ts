// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMetalIpBlockRanges(args: GetMetalIpBlockRangesArgs, opts?: pulumi.InvokeOptions): Promise<GetMetalIpBlockRangesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getMetalIpBlockRanges:getMetalIpBlockRanges", {
        "facility": args.facility,
        "id": args.id,
        "metro": args.metro,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMetalIpBlockRanges.
 */
export interface GetMetalIpBlockRangesArgs {
    /**
     * @deprecated Deprecated
     */
    facility?: string;
    id?: string;
    metro?: string;
    projectId: string;
}

/**
 * A collection of values returned by getMetalIpBlockRanges.
 */
export interface GetMetalIpBlockRangesResult {
    /**
     * @deprecated Deprecated
     */
    readonly facility?: string;
    readonly globalIpv4s: string[];
    readonly id: string;
    readonly ipv6s: string[];
    readonly metro?: string;
    readonly privateIpv4s: string[];
    readonly projectId: string;
    readonly publicIpv4s: string[];
}
export function getMetalIpBlockRangesOutput(args: GetMetalIpBlockRangesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetalIpBlockRangesResult> {
    return pulumi.output(args).apply((a: any) => getMetalIpBlockRanges(a, opts))
}

/**
 * A collection of arguments for invoking getMetalIpBlockRanges.
 */
export interface GetMetalIpBlockRangesOutputArgs {
    /**
     * @deprecated Deprecated
     */
    facility?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    metro?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
