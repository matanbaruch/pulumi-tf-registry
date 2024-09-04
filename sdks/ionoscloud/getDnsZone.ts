// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDnsZone(args?: GetDnsZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsZoneResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getDnsZone:getDnsZone", {
        "id": args.id,
        "name": args.name,
        "partialMatch": args.partialMatch,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsZone.
 */
export interface GetDnsZoneArgs {
    id?: string;
    name?: string;
    partialMatch?: boolean;
}

/**
 * A collection of values returned by getDnsZone.
 */
export interface GetDnsZoneResult {
    readonly description: string;
    readonly enabled: boolean;
    readonly id?: string;
    readonly name?: string;
    readonly nameservers: string[];
    readonly partialMatch?: boolean;
}
export function getDnsZoneOutput(args?: GetDnsZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsZoneResult> {
    return pulumi.output(args).apply((a: any) => getDnsZone(a, opts))
}

/**
 * A collection of arguments for invoking getDnsZone.
 */
export interface GetDnsZoneOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partialMatch?: pulumi.Input<boolean>;
}
