// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIpv6(args: GetIpv6Args, opts?: pulumi.InvokeOptions): Promise<GetIpv6Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gridscale:index/getIpv6:getIpv6", {
        "id": args.id,
        "labels": args.labels,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv6.
 */
export interface GetIpv6Args {
    id?: string;
    labels?: string[];
    resourceId: string;
}

/**
 * A collection of values returned by getIpv6.
 */
export interface GetIpv6Result {
    readonly changeTime: string;
    readonly createTime: string;
    readonly currentPrice: number;
    readonly deleteBlock: boolean;
    readonly failover: boolean;
    readonly id: string;
    readonly ip: string;
    readonly labels?: string[];
    readonly locationCountry: string;
    readonly locationIata: string;
    readonly locationName: string;
    readonly locationUuid: string;
    readonly name: string;
    readonly prefix: string;
    readonly resourceId: string;
    readonly reverseDns: string;
    readonly status: string;
    readonly usageInMinutes: number;
}
export function getIpv6Output(args: GetIpv6OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6Result> {
    return pulumi.output(args).apply((a: any) => getIpv6(a, opts))
}

/**
 * A collection of arguments for invoking getIpv6.
 */
export interface GetIpv6OutputArgs {
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    resourceId: pulumi.Input<string>;
}
