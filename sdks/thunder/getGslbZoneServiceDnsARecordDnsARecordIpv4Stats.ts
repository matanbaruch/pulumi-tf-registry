// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGslbZoneServiceDnsARecordDnsARecordIpv4Stats(args: GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsArgs, opts?: pulumi.InvokeOptions): Promise<GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getGslbZoneServiceDnsARecordDnsARecordIpv4Stats:getGslbZoneServiceDnsARecordDnsARecordIpv4Stats", {
        "dnsARecordIp": args.dnsARecordIp,
        "id": args.id,
        "name": args.name,
        "serviceName": args.serviceName,
        "servicePort": args.servicePort,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGslbZoneServiceDnsARecordDnsARecordIpv4Stats.
 */
export interface GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsArgs {
    dnsARecordIp: string;
    id?: string;
    name: string;
    serviceName: string;
    servicePort: string;
    stats?: inputs.GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsStats;
}

/**
 * A collection of values returned by getGslbZoneServiceDnsARecordDnsARecordIpv4Stats.
 */
export interface GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsResult {
    readonly dnsARecordIp: string;
    readonly id: string;
    readonly name: string;
    readonly serviceName: string;
    readonly servicePort: string;
    readonly stats?: outputs.GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsStats;
}
export function getGslbZoneServiceDnsARecordDnsARecordIpv4StatsOutput(args: GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsResult> {
    return pulumi.output(args).apply((a: any) => getGslbZoneServiceDnsARecordDnsARecordIpv4Stats(a, opts))
}

/**
 * A collection of arguments for invoking getGslbZoneServiceDnsARecordDnsARecordIpv4Stats.
 */
export interface GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsOutputArgs {
    dnsARecordIp: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    servicePort: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetGslbZoneServiceDnsARecordDnsARecordIpv4StatsStatsArgs>;
}
