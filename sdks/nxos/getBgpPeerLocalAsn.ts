// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBgpPeerLocalAsn(args: GetBgpPeerLocalAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetBgpPeerLocalAsnResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getBgpPeerLocalAsn:getBgpPeerLocalAsn", {
        "address": args.address,
        "device": args.device,
        "vrf": args.vrf,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBgpPeerLocalAsn.
 */
export interface GetBgpPeerLocalAsnArgs {
    address: string;
    device?: string;
    vrf: string;
}

/**
 * A collection of values returned by getBgpPeerLocalAsn.
 */
export interface GetBgpPeerLocalAsnResult {
    readonly address: string;
    readonly asnPropagation: string;
    readonly device?: string;
    readonly id: string;
    readonly localAsn: string;
    readonly vrf: string;
}
export function getBgpPeerLocalAsnOutput(args: GetBgpPeerLocalAsnOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBgpPeerLocalAsnResult> {
    return pulumi.output(args).apply((a: any) => getBgpPeerLocalAsn(a, opts))
}

/**
 * A collection of arguments for invoking getBgpPeerLocalAsn.
 */
export interface GetBgpPeerLocalAsnOutputArgs {
    address: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    vrf: pulumi.Input<string>;
}
