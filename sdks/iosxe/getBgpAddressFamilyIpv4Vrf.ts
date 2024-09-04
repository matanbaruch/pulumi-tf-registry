// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBgpAddressFamilyIpv4Vrf(args: GetBgpAddressFamilyIpv4VrfArgs, opts?: pulumi.InvokeOptions): Promise<GetBgpAddressFamilyIpv4VrfResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getBgpAddressFamilyIpv4Vrf:getBgpAddressFamilyIpv4Vrf", {
        "afName": args.afName,
        "asn": args.asn,
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBgpAddressFamilyIpv4Vrf.
 */
export interface GetBgpAddressFamilyIpv4VrfArgs {
    afName: string;
    asn: string;
    device?: string;
}

/**
 * A collection of values returned by getBgpAddressFamilyIpv4Vrf.
 */
export interface GetBgpAddressFamilyIpv4VrfResult {
    readonly afName: string;
    readonly asn: string;
    readonly device?: string;
    readonly id: string;
    readonly vrfs: outputs.GetBgpAddressFamilyIpv4VrfVrf[];
}
export function getBgpAddressFamilyIpv4VrfOutput(args: GetBgpAddressFamilyIpv4VrfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBgpAddressFamilyIpv4VrfResult> {
    return pulumi.output(args).apply((a: any) => getBgpAddressFamilyIpv4Vrf(a, opts))
}

/**
 * A collection of arguments for invoking getBgpAddressFamilyIpv4Vrf.
 */
export interface GetBgpAddressFamilyIpv4VrfOutputArgs {
    afName: pulumi.Input<string>;
    asn: pulumi.Input<string>;
    device?: pulumi.Input<string>;
}
