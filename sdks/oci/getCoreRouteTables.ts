// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreRouteTables(args: GetCoreRouteTablesArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreRouteTablesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreRouteTables:getCoreRouteTables", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "vcnId": args.vcnId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreRouteTables.
 */
export interface GetCoreRouteTablesArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetCoreRouteTablesFilter[];
    id?: string;
    state?: string;
    vcnId?: string;
}

/**
 * A collection of values returned by getCoreRouteTables.
 */
export interface GetCoreRouteTablesResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreRouteTablesFilter[];
    readonly id: string;
    readonly routeTables: outputs.GetCoreRouteTablesRouteTable[];
    readonly state?: string;
    readonly vcnId?: string;
}
export function getCoreRouteTablesOutput(args: GetCoreRouteTablesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreRouteTablesResult> {
    return pulumi.output(args).apply((a: any) => getCoreRouteTables(a, opts))
}

/**
 * A collection of arguments for invoking getCoreRouteTables.
 */
export interface GetCoreRouteTablesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreRouteTablesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    vcnId?: pulumi.Input<string>;
}
