// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemDdns(args: GetSystemDdnsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemDdnsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemDdns:getSystemDdns", {
        "ddnsid": args.ddnsid,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemDdns.
 */
export interface GetSystemDdnsArgs {
    ddnsid: number;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemDdns.
 */
export interface GetSystemDdnsResult {
    readonly addrType: string;
    readonly boundIp: string;
    readonly clearText: string;
    readonly ddnsAuth: string;
    readonly ddnsDomain: string;
    readonly ddnsKey: string;
    readonly ddnsKeyname: string;
    readonly ddnsPassword: string;
    readonly ddnsServer: string;
    readonly ddnsServerAddrs: outputs.GetSystemDdnsDdnsServerAddr[];
    readonly ddnsServerIp: string;
    readonly ddnsSn: string;
    readonly ddnsTtl: number;
    readonly ddnsUsername: string;
    readonly ddnsZone: string;
    readonly ddnsid: number;
    readonly id: string;
    readonly monitorInterfaces: outputs.GetSystemDdnsMonitorInterface[];
    readonly serverType: string;
    readonly sslCertificate: string;
    readonly updateInterval: number;
    readonly usePublicIp: string;
    readonly vdomparam?: string;
}
export function getSystemDdnsOutput(args: GetSystemDdnsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemDdnsResult> {
    return pulumi.output(args).apply((a: any) => getSystemDdns(a, opts))
}

/**
 * A collection of arguments for invoking getSystemDdns.
 */
export interface GetSystemDdnsOutputArgs {
    ddnsid: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
