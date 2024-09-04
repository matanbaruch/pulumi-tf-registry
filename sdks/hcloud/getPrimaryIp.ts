// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrimaryIp(args?: GetPrimaryIpArgs, opts?: pulumi.InvokeOptions): Promise<GetPrimaryIpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getPrimaryIp:getPrimaryIp", {
        "assigneeId": args.assigneeId,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "name": args.name,
        "withSelector": args.withSelector,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrimaryIp.
 */
export interface GetPrimaryIpArgs {
    assigneeId?: number;
    id?: number;
    ipAddress?: string;
    name?: string;
    withSelector?: string;
}

/**
 * A collection of values returned by getPrimaryIp.
 */
export interface GetPrimaryIpResult {
    readonly assigneeId: number;
    readonly assigneeType: string;
    readonly autoDelete: boolean;
    readonly datacenter: string;
    readonly deleteProtection: boolean;
    readonly id: number;
    readonly ipAddress: string;
    readonly ipNetwork: string;
    readonly labels: {[key: string]: string};
    readonly name?: string;
    readonly type: string;
    readonly withSelector?: string;
}
export function getPrimaryIpOutput(args?: GetPrimaryIpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrimaryIpResult> {
    return pulumi.output(args).apply((a: any) => getPrimaryIp(a, opts))
}

/**
 * A collection of arguments for invoking getPrimaryIp.
 */
export interface GetPrimaryIpOutputArgs {
    assigneeId?: pulumi.Input<number>;
    id?: pulumi.Input<number>;
    ipAddress?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    withSelector?: pulumi.Input<string>;
}
