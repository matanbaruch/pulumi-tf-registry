// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMetalDevices(args?: GetMetalDevicesArgs, opts?: pulumi.InvokeOptions): Promise<GetMetalDevicesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getMetalDevices:getMetalDevices", {
        "filters": args.filters,
        "id": args.id,
        "organizationId": args.organizationId,
        "projectId": args.projectId,
        "search": args.search,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMetalDevices.
 */
export interface GetMetalDevicesArgs {
    filters?: inputs.GetMetalDevicesFilter[];
    id?: string;
    organizationId?: string;
    projectId?: string;
    search?: string;
    sorts?: inputs.GetMetalDevicesSort[];
}

/**
 * A collection of values returned by getMetalDevices.
 */
export interface GetMetalDevicesResult {
    readonly devices: outputs.GetMetalDevicesDevice[];
    readonly filters?: outputs.GetMetalDevicesFilter[];
    readonly id: string;
    readonly organizationId?: string;
    readonly projectId?: string;
    readonly search?: string;
    readonly sorts?: outputs.GetMetalDevicesSort[];
}
export function getMetalDevicesOutput(args?: GetMetalDevicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetalDevicesResult> {
    return pulumi.output(args).apply((a: any) => getMetalDevices(a, opts))
}

/**
 * A collection of arguments for invoking getMetalDevices.
 */
export interface GetMetalDevicesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetMetalDevicesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    search?: pulumi.Input<string>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetMetalDevicesSortArgs>[]>;
}
