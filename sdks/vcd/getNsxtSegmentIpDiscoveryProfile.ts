// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNsxtSegmentIpDiscoveryProfile(args: GetNsxtSegmentIpDiscoveryProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNsxtSegmentIpDiscoveryProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getNsxtSegmentIpDiscoveryProfile:getNsxtSegmentIpDiscoveryProfile", {
        "id": args.id,
        "name": args.name,
        "nsxtManagerId": args.nsxtManagerId,
        "vdcGroupId": args.vdcGroupId,
        "vdcId": args.vdcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNsxtSegmentIpDiscoveryProfile.
 */
export interface GetNsxtSegmentIpDiscoveryProfileArgs {
    id?: string;
    name: string;
    nsxtManagerId?: string;
    vdcGroupId?: string;
    vdcId?: string;
}

/**
 * A collection of values returned by getNsxtSegmentIpDiscoveryProfile.
 */
export interface GetNsxtSegmentIpDiscoveryProfileResult {
    readonly arpBindingLimit: number;
    readonly arpBindingTimeout: number;
    readonly description: string;
    readonly id: string;
    readonly isArpSnoopingEnabled: boolean;
    readonly isDhcpSnoopingV4Enabled: boolean;
    readonly isDhcpSnoopingV6Enabled: boolean;
    readonly isDuplicateIpDetectionEnabled: boolean;
    readonly isNdSnoopingEnabled: boolean;
    readonly isTofuEnabled: boolean;
    readonly isVmtoolsV4Enabled: boolean;
    readonly isVmtoolsV6Enabled: boolean;
    readonly name: string;
    readonly ndSnoopingLimit: number;
    readonly nsxtManagerId?: string;
    readonly vdcGroupId?: string;
    readonly vdcId?: string;
}
export function getNsxtSegmentIpDiscoveryProfileOutput(args: GetNsxtSegmentIpDiscoveryProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNsxtSegmentIpDiscoveryProfileResult> {
    return pulumi.output(args).apply((a: any) => getNsxtSegmentIpDiscoveryProfile(a, opts))
}

/**
 * A collection of arguments for invoking getNsxtSegmentIpDiscoveryProfile.
 */
export interface GetNsxtSegmentIpDiscoveryProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nsxtManagerId?: pulumi.Input<string>;
    vdcGroupId?: pulumi.Input<string>;
    vdcId?: pulumi.Input<string>;
}
