// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCoreIpv6(args: GetCoreIpv6Args, opts?: pulumi.InvokeOptions): Promise<GetCoreIpv6Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreIpv6:getCoreIpv6", {
        "ipv6id": args.ipv6id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreIpv6.
 */
export interface GetCoreIpv6Args {
    ipv6id: string;
}

/**
 * A collection of values returned by getCoreIpv6.
 */
export interface GetCoreIpv6Result {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly ipAddress: string;
    readonly ipv6id: string;
    readonly ipv6subnetCidr: string;
    readonly state: string;
    readonly subnetId: string;
    readonly timeCreated: string;
    readonly vnicId: string;
}
export function getCoreIpv6Output(args: GetCoreIpv6OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreIpv6Result> {
    return pulumi.output(args).apply((a: any) => getCoreIpv6(a, opts))
}

/**
 * A collection of arguments for invoking getCoreIpv6.
 */
export interface GetCoreIpv6OutputArgs {
    ipv6id: pulumi.Input<string>;
}
