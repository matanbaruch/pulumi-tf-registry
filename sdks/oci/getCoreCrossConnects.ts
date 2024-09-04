// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreCrossConnects(args: GetCoreCrossConnectsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreCrossConnectsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreCrossConnects:getCoreCrossConnects", {
        "compartmentId": args.compartmentId,
        "crossConnectGroupId": args.crossConnectGroupId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreCrossConnects.
 */
export interface GetCoreCrossConnectsArgs {
    compartmentId: string;
    crossConnectGroupId?: string;
    displayName?: string;
    filters?: inputs.GetCoreCrossConnectsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getCoreCrossConnects.
 */
export interface GetCoreCrossConnectsResult {
    readonly compartmentId: string;
    readonly crossConnectGroupId?: string;
    readonly crossConnects: outputs.GetCoreCrossConnectsCrossConnect[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreCrossConnectsFilter[];
    readonly id: string;
    readonly state?: string;
}
export function getCoreCrossConnectsOutput(args: GetCoreCrossConnectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreCrossConnectsResult> {
    return pulumi.output(args).apply((a: any) => getCoreCrossConnects(a, opts))
}

/**
 * A collection of arguments for invoking getCoreCrossConnects.
 */
export interface GetCoreCrossConnectsOutputArgs {
    compartmentId: pulumi.Input<string>;
    crossConnectGroupId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreCrossConnectsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
