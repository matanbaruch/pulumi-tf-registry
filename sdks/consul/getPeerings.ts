// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPeerings(args?: GetPeeringsArgs, opts?: pulumi.InvokeOptions): Promise<GetPeeringsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("consul:index/getPeerings:getPeerings", {
        "id": args.id,
        "partition": args.partition,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPeerings.
 */
export interface GetPeeringsArgs {
    id?: string;
    partition?: string;
}

/**
 * A collection of values returned by getPeerings.
 */
export interface GetPeeringsResult {
    readonly id: string;
    readonly partition?: string;
    readonly peers: outputs.GetPeeringsPeer[];
}
export function getPeeringsOutput(args?: GetPeeringsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPeeringsResult> {
    return pulumi.output(args).apply((a: any) => getPeerings(a, opts))
}

/**
 * A collection of arguments for invoking getPeerings.
 */
export interface GetPeeringsOutputArgs {
    id?: pulumi.Input<string>;
    partition?: pulumi.Input<string>;
}
