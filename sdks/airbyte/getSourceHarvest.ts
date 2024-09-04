// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceHarvest(args: GetSourceHarvestArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHarvestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHarvest:getSourceHarvest", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHarvest.
 */
export interface GetSourceHarvestArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHarvest.
 */
export interface GetSourceHarvestResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHarvestOutput(args: GetSourceHarvestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceHarvestResult> {
    return pulumi.output(args).apply((a: any) => getSourceHarvest(a, opts))
}

/**
 * A collection of arguments for invoking getSourceHarvest.
 */
export interface GetSourceHarvestOutputArgs {
    sourceId: pulumi.Input<string>;
}
