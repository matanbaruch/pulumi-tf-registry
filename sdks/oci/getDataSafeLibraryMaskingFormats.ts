// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeLibraryMaskingFormats(args: GetDataSafeLibraryMaskingFormatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeLibraryMaskingFormatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeLibraryMaskingFormats:getDataSafeLibraryMaskingFormats", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "libraryMaskingFormatId": args.libraryMaskingFormatId,
        "libraryMaskingFormatSource": args.libraryMaskingFormatSource,
        "state": args.state,
        "timeCreatedGreaterThanOrEqualTo": args.timeCreatedGreaterThanOrEqualTo,
        "timeCreatedLessThan": args.timeCreatedLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeLibraryMaskingFormats.
 */
export interface GetDataSafeLibraryMaskingFormatsArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetDataSafeLibraryMaskingFormatsFilter[];
    id?: string;
    libraryMaskingFormatId?: string;
    libraryMaskingFormatSource?: string;
    state?: string;
    timeCreatedGreaterThanOrEqualTo?: string;
    timeCreatedLessThan?: string;
}

/**
 * A collection of values returned by getDataSafeLibraryMaskingFormats.
 */
export interface GetDataSafeLibraryMaskingFormatsResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeLibraryMaskingFormatsFilter[];
    readonly id: string;
    readonly libraryMaskingFormatCollections: outputs.GetDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection[];
    readonly libraryMaskingFormatId?: string;
    readonly libraryMaskingFormatSource?: string;
    readonly state?: string;
    readonly timeCreatedGreaterThanOrEqualTo?: string;
    readonly timeCreatedLessThan?: string;
}
export function getDataSafeLibraryMaskingFormatsOutput(args: GetDataSafeLibraryMaskingFormatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeLibraryMaskingFormatsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeLibraryMaskingFormats(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeLibraryMaskingFormats.
 */
export interface GetDataSafeLibraryMaskingFormatsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeLibraryMaskingFormatsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    libraryMaskingFormatId?: pulumi.Input<string>;
    libraryMaskingFormatSource?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreatedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeCreatedLessThan?: pulumi.Input<string>;
}
