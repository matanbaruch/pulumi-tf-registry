// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMetalOperatingSystem(args?: GetMetalOperatingSystemArgs, opts?: pulumi.InvokeOptions): Promise<GetMetalOperatingSystemResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getMetalOperatingSystem:getMetalOperatingSystem", {
        "distro": args.distro,
        "id": args.id,
        "name": args.name,
        "provisionableOn": args.provisionableOn,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMetalOperatingSystem.
 */
export interface GetMetalOperatingSystemArgs {
    distro?: string;
    id?: string;
    name?: string;
    provisionableOn?: string;
    version?: string;
}

/**
 * A collection of values returned by getMetalOperatingSystem.
 */
export interface GetMetalOperatingSystemResult {
    readonly distro?: string;
    readonly id: string;
    readonly name?: string;
    readonly provisionableOn?: string;
    readonly slug: string;
    readonly version?: string;
}
export function getMetalOperatingSystemOutput(args?: GetMetalOperatingSystemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetalOperatingSystemResult> {
    return pulumi.output(args).apply((a: any) => getMetalOperatingSystem(a, opts))
}

/**
 * A collection of arguments for invoking getMetalOperatingSystem.
 */
export interface GetMetalOperatingSystemOutputArgs {
    distro?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    provisionableOn?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
