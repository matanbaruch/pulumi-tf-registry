// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetwork(args?: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getNetwork:getNetwork", {
        "id": args.id,
        "ipRange": args.ipRange,
        "labels": args.labels,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "withSelector": args.withSelector,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    id?: number;
    ipRange?: string;
    labels?: {[key: string]: string};
    /**
     * @deprecated Deprecated
     */
    mostRecent?: boolean;
    name?: string;
    withSelector?: string;
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    readonly deleteProtection: boolean;
    readonly exposeRoutesToVswitch: boolean;
    readonly id: number;
    readonly ipRange: string;
    readonly labels: {[key: string]: string};
    /**
     * @deprecated Deprecated
     */
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly withSelector?: string;
}
export function getNetworkOutput(args?: GetNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkResult> {
    return pulumi.output(args).apply((a: any) => getNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkOutputArgs {
    id?: pulumi.Input<number>;
    ipRange?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated Deprecated
     */
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    withSelector?: pulumi.Input<string>;
}
