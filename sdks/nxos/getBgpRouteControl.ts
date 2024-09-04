// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBgpRouteControl(args: GetBgpRouteControlArgs, opts?: pulumi.InvokeOptions): Promise<GetBgpRouteControlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getBgpRouteControl:getBgpRouteControl", {
        "asn": args.asn,
        "device": args.device,
        "vrf": args.vrf,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBgpRouteControl.
 */
export interface GetBgpRouteControlArgs {
    asn: string;
    device?: string;
    vrf: string;
}

/**
 * A collection of values returned by getBgpRouteControl.
 */
export interface GetBgpRouteControlResult {
    readonly asn: string;
    readonly device?: string;
    readonly enforceFirstAs: string;
    readonly fibAccelerate: string;
    readonly id: string;
    readonly logNeighborChanges: string;
    readonly suppressRoutes: string;
    readonly vrf: string;
}
export function getBgpRouteControlOutput(args: GetBgpRouteControlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBgpRouteControlResult> {
    return pulumi.output(args).apply((a: any) => getBgpRouteControl(a, opts))
}

/**
 * A collection of arguments for invoking getBgpRouteControl.
 */
export interface GetBgpRouteControlOutputArgs {
    asn: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    vrf: pulumi.Input<string>;
}
