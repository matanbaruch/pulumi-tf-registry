// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImagebuilderImageRecipe(args: GetImagebuilderImageRecipeArgs, opts?: pulumi.InvokeOptions): Promise<GetImagebuilderImageRecipeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getImagebuilderImageRecipe:getImagebuilderImageRecipe", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImagebuilderImageRecipe.
 */
export interface GetImagebuilderImageRecipeArgs {
    id: string;
}

/**
 * A collection of values returned by getImagebuilderImageRecipe.
 */
export interface GetImagebuilderImageRecipeResult {
    readonly additionalInstanceConfiguration: outputs.GetImagebuilderImageRecipeAdditionalInstanceConfiguration;
    readonly arn: string;
    readonly blockDeviceMappings: outputs.GetImagebuilderImageRecipeBlockDeviceMapping[];
    readonly components: outputs.GetImagebuilderImageRecipeComponent[];
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly parentImage: string;
    readonly tags: {[key: string]: string};
    readonly version: string;
    readonly workingDirectory: string;
}
export function getImagebuilderImageRecipeOutput(args: GetImagebuilderImageRecipeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImagebuilderImageRecipeResult> {
    return pulumi.output(args).apply((a: any) => getImagebuilderImageRecipe(a, opts))
}

/**
 * A collection of arguments for invoking getImagebuilderImageRecipe.
 */
export interface GetImagebuilderImageRecipeOutputArgs {
    id: pulumi.Input<string>;
}
