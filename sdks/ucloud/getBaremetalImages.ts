// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBaremetalImages(args?: GetBaremetalImagesArgs, opts?: pulumi.InvokeOptions): Promise<GetBaremetalImagesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ucloud:index/getBaremetalImages:getBaremetalImages", {
        "availabilityZone": args.availabilityZone,
        "id": args.id,
        "ids": args.ids,
        "imageId": args.imageId,
        "imageType": args.imageType,
        "instanceType": args.instanceType,
        "nameRegex": args.nameRegex,
        "osType": args.osType,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBaremetalImages.
 */
export interface GetBaremetalImagesArgs {
    availabilityZone?: string;
    id?: string;
    ids?: string[];
    imageId?: string;
    imageType?: string;
    instanceType?: string;
    nameRegex?: string;
    osType?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getBaremetalImages.
 */
export interface GetBaremetalImagesResult {
    readonly availabilityZone?: string;
    readonly id: string;
    readonly ids: string[];
    readonly imageId?: string;
    readonly imageType?: string;
    readonly images: outputs.GetBaremetalImagesImage[];
    readonly instanceType?: string;
    readonly nameRegex?: string;
    readonly osType?: string;
    readonly outputFile?: string;
    readonly totalCount: number;
}
export function getBaremetalImagesOutput(args?: GetBaremetalImagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBaremetalImagesResult> {
    return pulumi.output(args).apply((a: any) => getBaremetalImages(a, opts))
}

/**
 * A collection of arguments for invoking getBaremetalImages.
 */
export interface GetBaremetalImagesOutputArgs {
    availabilityZone?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    imageId?: pulumi.Input<string>;
    imageType?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    osType?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
