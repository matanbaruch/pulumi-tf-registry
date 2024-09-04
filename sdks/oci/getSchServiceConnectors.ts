// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSchServiceConnectors(args: GetSchServiceConnectorsArgs, opts?: pulumi.InvokeOptions): Promise<GetSchServiceConnectorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getSchServiceConnectors:getSchServiceConnectors", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchServiceConnectors.
 */
export interface GetSchServiceConnectorsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetSchServiceConnectorsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getSchServiceConnectors.
 */
export interface GetSchServiceConnectorsResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetSchServiceConnectorsFilter[];
    readonly id: string;
    readonly serviceConnectorCollections: outputs.GetSchServiceConnectorsServiceConnectorCollection[];
    readonly state?: string;
}
export function getSchServiceConnectorsOutput(args: GetSchServiceConnectorsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchServiceConnectorsResult> {
    return pulumi.output(args).apply((a: any) => getSchServiceConnectors(a, opts))
}

/**
 * A collection of arguments for invoking getSchServiceConnectors.
 */
export interface GetSchServiceConnectorsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetSchServiceConnectorsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
