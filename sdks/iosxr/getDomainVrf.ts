// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDomainVrf(args: GetDomainVrfArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainVrfResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getDomainVrf:getDomainVrf", {
        "device": args.device,
        "vrfName": args.vrfName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDomainVrf.
 */
export interface GetDomainVrfArgs {
    device?: string;
    vrfName: string;
}

/**
 * A collection of values returned by getDomainVrf.
 */
export interface GetDomainVrfResult {
    readonly device?: string;
    readonly domains: outputs.GetDomainVrfDomain[];
    readonly id: string;
    readonly ipv4Hosts: outputs.GetDomainVrfIpv4Host[];
    readonly ipv6Hosts: outputs.GetDomainVrfIpv6Host[];
    readonly lookupDisable: boolean;
    readonly lookupSourceInterface: string;
    readonly multicast: string;
    readonly name: string;
    readonly nameServers: outputs.GetDomainVrfNameServer[];
    readonly vrfName: string;
}
export function getDomainVrfOutput(args: GetDomainVrfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainVrfResult> {
    return pulumi.output(args).apply((a: any) => getDomainVrf(a, opts))
}

/**
 * A collection of arguments for invoking getDomainVrf.
 */
export interface GetDomainVrfOutputArgs {
    device?: pulumi.Input<string>;
    vrfName: pulumi.Input<string>;
}
