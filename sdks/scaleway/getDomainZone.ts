// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDomainZone(args?: GetDomainZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainZoneResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getDomainZone:getDomainZone", {
        "domain": args.domain,
        "id": args.id,
        "subdomain": args.subdomain,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDomainZone.
 */
export interface GetDomainZoneArgs {
    domain?: string;
    id?: string;
    subdomain?: string;
}

/**
 * A collection of values returned by getDomainZone.
 */
export interface GetDomainZoneResult {
    readonly domain?: string;
    readonly id: string;
    readonly message: string;
    readonly ns: string[];
    readonly nsDefaults: string[];
    readonly nsMasters: string[];
    readonly projectId: string;
    readonly status: string;
    readonly subdomain?: string;
    readonly updatedAt: string;
}
export function getDomainZoneOutput(args?: GetDomainZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainZoneResult> {
    return pulumi.output(args).apply((a: any) => getDomainZone(a, opts))
}

/**
 * A collection of arguments for invoking getDomainZone.
 */
export interface GetDomainZoneOutputArgs {
    domain?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subdomain?: pulumi.Input<string>;
}
