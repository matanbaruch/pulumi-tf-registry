// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataset(args: GetDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("honeycombio:index/getDataset:getDataset", {
        "slug": args.slug,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataset.
 */
export interface GetDatasetArgs {
    slug: string;
}

/**
 * A collection of values returned by getDataset.
 */
export interface GetDatasetResult {
    readonly createdAt: string;
    readonly deleteProtected: boolean;
    readonly description: string;
    readonly expandJsonDepth: number;
    readonly id: string;
    readonly lastWrittenAt: string;
    readonly name: string;
    readonly slug: string;
}
export function getDatasetOutput(args: GetDatasetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasetResult> {
    return pulumi.output(args).apply((a: any) => getDataset(a, opts))
}

/**
 * A collection of arguments for invoking getDataset.
 */
export interface GetDatasetOutputArgs {
    slug: pulumi.Input<string>;
}
