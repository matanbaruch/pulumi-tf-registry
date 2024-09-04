// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNtp(args?: GetNtpArgs, opts?: pulumi.InvokeOptions): Promise<GetNtpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getNtp:getNtp", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNtp.
 */
export interface GetNtpArgs {
    device?: string;
}

/**
 * A collection of values returned by getNtp.
 */
export interface GetNtpResult {
    readonly accessGroupIpv4Peer: string;
    readonly accessGroupIpv4QueryOnly: string;
    readonly accessGroupIpv4Serve: string;
    readonly accessGroupIpv4ServeOnly: string;
    readonly accessGroupIpv6Peer: string;
    readonly accessGroupIpv6QueryOnly: string;
    readonly accessGroupIpv6Serve: string;
    readonly accessGroupIpv6ServeOnly: string;
    readonly accessGroupVrfs: outputs.GetNtpAccessGroupVrf[];
    readonly adminPlaneBurst: boolean;
    readonly adminPlaneIburst: boolean;
    readonly adminPlaneKey: number;
    readonly adminPlaneMaxpoll: number;
    readonly adminPlaneMinpoll: number;
    readonly adminPlanePrefer: boolean;
    readonly adminPlaneVersion: number;
    readonly authenticate: boolean;
    readonly authenticationKeys: outputs.GetNtpAuthenticationKey[];
    readonly broadcastdelay: number;
    readonly cmacAuthenticationKeys: outputs.GetNtpCmacAuthenticationKey[];
    readonly device?: string;
    readonly hmacSha1AuthenticationKeys: outputs.GetNtpHmacSha1AuthenticationKey[];
    readonly hmacSha2AuthenticationKeys: outputs.GetNtpHmacSha2AuthenticationKey[];
    readonly id: string;
    readonly interfaceVrfs: outputs.GetNtpInterfaceVrf[];
    readonly interfaces: outputs.GetNtpInterface[];
    readonly ipv4Dscp: string;
    readonly ipv4PeersServers: outputs.GetNtpIpv4PeersServer[];
    readonly ipv4Precedence: string;
    readonly ipv6Dscp: string;
    readonly ipv6PeersServers: outputs.GetNtpIpv6PeersServer[];
    readonly ipv6Precedence: string;
    readonly logInternalSync: boolean;
    readonly maxAssociations: number;
    readonly passive: boolean;
    readonly peersServersVrfs: outputs.GetNtpPeersServersVrf[];
    readonly primaryReferenceClock: boolean;
    readonly primaryStratumNumber: number;
    readonly sourceInterfaceName: string;
    readonly sourceVrfs: outputs.GetNtpSourceVrf[];
    readonly trustedKeys: outputs.GetNtpTrustedKey[];
    readonly updateCalendar: boolean;
}
export function getNtpOutput(args?: GetNtpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNtpResult> {
    return pulumi.output(args).apply((a: any) => getNtp(a, opts))
}

/**
 * A collection of arguments for invoking getNtp.
 */
export interface GetNtpOutputArgs {
    device?: pulumi.Input<string>;
}
