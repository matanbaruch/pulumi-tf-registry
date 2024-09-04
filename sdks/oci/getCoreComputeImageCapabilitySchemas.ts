// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreComputeImageCapabilitySchemas(args?: GetCoreComputeImageCapabilitySchemasArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreComputeImageCapabilitySchemasResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreComputeImageCapabilitySchemas:getCoreComputeImageCapabilitySchemas", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "imageId": args.imageId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreComputeImageCapabilitySchemas.
 */
export interface GetCoreComputeImageCapabilitySchemasArgs {
    compartmentId?: string;
    displayName?: string;
    filters?: inputs.GetCoreComputeImageCapabilitySchemasFilter[];
    id?: string;
    imageId?: string;
}

/**
 * A collection of values returned by getCoreComputeImageCapabilitySchemas.
 */
export interface GetCoreComputeImageCapabilitySchemasResult {
    readonly compartmentId?: string;
    readonly computeImageCapabilitySchemas: outputs.GetCoreComputeImageCapabilitySchemasComputeImageCapabilitySchema[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreComputeImageCapabilitySchemasFilter[];
    readonly id: string;
    readonly imageId?: string;
}
export function getCoreComputeImageCapabilitySchemasOutput(args?: GetCoreComputeImageCapabilitySchemasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreComputeImageCapabilitySchemasResult> {
    return pulumi.output(args).apply((a: any) => getCoreComputeImageCapabilitySchemas(a, opts))
}

/**
 * A collection of arguments for invoking getCoreComputeImageCapabilitySchemas.
 */
export interface GetCoreComputeImageCapabilitySchemasOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreComputeImageCapabilitySchemasFilterArgs>[]>;
    id?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
}
