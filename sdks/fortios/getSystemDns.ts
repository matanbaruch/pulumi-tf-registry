// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemDns(args?: GetSystemDnsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemDnsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemDns:getSystemDns", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemDns.
 */
export interface GetSystemDnsArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemDns.
 */
export interface GetSystemDnsResult {
    readonly altPrimary: string;
    readonly altSecondary: string;
    readonly cacheNotfoundResponses: string;
    readonly dnsCacheLimit: number;
    readonly dnsCacheTtl: number;
    readonly dnsOverTls: string;
    readonly domains: outputs.GetSystemDnsDomain[];
    readonly fqdnCacheTtl: number;
    readonly fqdnMaxRefresh: number;
    readonly fqdnMinRefresh: number;
    readonly id: string;
    readonly interface: string;
    readonly interfaceSelectMethod: string;
    readonly ip6Primary: string;
    readonly ip6Secondary: string;
    readonly log: string;
    readonly primary: string;
    readonly protocol: string;
    readonly retry: number;
    readonly secondary: string;
    readonly serverHostnames: outputs.GetSystemDnsServerHostname[];
    readonly serverSelectMethod: string;
    readonly sourceIp: string;
    readonly sslCertificate: string;
    readonly timeout: number;
    readonly vdomparam?: string;
}
export function getSystemDnsOutput(args?: GetSystemDnsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemDnsResult> {
    return pulumi.output(args).apply((a: any) => getSystemDns(a, opts))
}

/**
 * A collection of arguments for invoking getSystemDns.
 */
export interface GetSystemDnsOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
