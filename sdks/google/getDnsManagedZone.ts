// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDnsManagedZone(args: GetDnsManagedZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsManagedZoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getDnsManagedZone:getDnsManagedZone", {
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsManagedZone.
 */
export interface GetDnsManagedZoneArgs {
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getDnsManagedZone.
 */
export interface GetDnsManagedZoneResult {
    readonly description: string;
    readonly dnsName: string;
    readonly id: string;
    readonly managedZoneId: number;
    readonly name: string;
    readonly nameServers: string[];
    readonly project?: string;
    readonly visibility: string;
}
export function getDnsManagedZoneOutput(args: GetDnsManagedZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsManagedZoneResult> {
    return pulumi.output(args).apply((a: any) => getDnsManagedZone(a, opts))
}

/**
 * A collection of arguments for invoking getDnsManagedZone.
 */
export interface GetDnsManagedZoneOutputArgs {
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
