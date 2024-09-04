// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPimRouteMapEntry(args: GetPimRouteMapEntryArgs, opts?: pulumi.InvokeOptions): Promise<GetPimRouteMapEntryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getPimRouteMapEntry:getPimRouteMapEntry", {
        "order": args.order,
        "parentDn": args.parentDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPimRouteMapEntry.
 */
export interface GetPimRouteMapEntryArgs {
    order: string;
    parentDn: string;
}

/**
 * A collection of values returned by getPimRouteMapEntry.
 */
export interface GetPimRouteMapEntryResult {
    readonly action: string;
    readonly annotation: string;
    readonly annotations: outputs.GetPimRouteMapEntryAnnotation[];
    readonly description: string;
    readonly groupIp: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly order: string;
    readonly parentDn: string;
    readonly rendezvousPointIp: string;
    readonly sourceIp: string;
    readonly tags: outputs.GetPimRouteMapEntryTag[];
}
export function getPimRouteMapEntryOutput(args: GetPimRouteMapEntryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPimRouteMapEntryResult> {
    return pulumi.output(args).apply((a: any) => getPimRouteMapEntry(a, opts))
}

/**
 * A collection of arguments for invoking getPimRouteMapEntry.
 */
export interface GetPimRouteMapEntryOutputArgs {
    order: pulumi.Input<string>;
    parentDn: pulumi.Input<string>;
}
