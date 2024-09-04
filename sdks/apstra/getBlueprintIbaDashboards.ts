// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBlueprintIbaDashboards(args: GetBlueprintIbaDashboardsArgs, opts?: pulumi.InvokeOptions): Promise<GetBlueprintIbaDashboardsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getBlueprintIbaDashboards:getBlueprintIbaDashboards", {
        "blueprintId": args.blueprintId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlueprintIbaDashboards.
 */
export interface GetBlueprintIbaDashboardsArgs {
    blueprintId: string;
}

/**
 * A collection of values returned by getBlueprintIbaDashboards.
 */
export interface GetBlueprintIbaDashboardsResult {
    readonly blueprintId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ids: string[];
}
export function getBlueprintIbaDashboardsOutput(args: GetBlueprintIbaDashboardsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlueprintIbaDashboardsResult> {
    return pulumi.output(args).apply((a: any) => getBlueprintIbaDashboards(a, opts))
}

/**
 * A collection of arguments for invoking getBlueprintIbaDashboards.
 */
export interface GetBlueprintIbaDashboardsOutputArgs {
    blueprintId: pulumi.Input<string>;
}
