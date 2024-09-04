// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImages(args: GetImagesArgs, opts?: pulumi.InvokeOptions): Promise<GetImagesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zenlayercloud:index/getImages:getImages", {
        "availabilityZone": args.availabilityZone,
        "category": args.category,
        "id": args.id,
        "imageId": args.imageId,
        "imageNameRegex": args.imageNameRegex,
        "imageType": args.imageType,
        "osType": args.osType,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImages.
 */
export interface GetImagesArgs {
    availabilityZone: string;
    category?: string;
    id?: string;
    imageId?: string;
    imageNameRegex?: string;
    imageType?: string;
    osType?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getImages.
 */
export interface GetImagesResult {
    readonly availabilityZone: string;
    readonly category?: string;
    readonly id: string;
    readonly imageId?: string;
    readonly imageNameRegex?: string;
    readonly imageType?: string;
    readonly images: outputs.GetImagesImage[];
    readonly osType?: string;
    readonly resultOutputFile?: string;
}
export function getImagesOutput(args: GetImagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImagesResult> {
    return pulumi.output(args).apply((a: any) => getImages(a, opts))
}

/**
 * A collection of arguments for invoking getImages.
 */
export interface GetImagesOutputArgs {
    availabilityZone: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    imageNameRegex?: pulumi.Input<string>;
    imageType?: pulumi.Input<string>;
    osType?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
