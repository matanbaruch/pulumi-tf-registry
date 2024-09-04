// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBotmanAkamaiBotCategory(args?: GetBotmanAkamaiBotCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetBotmanAkamaiBotCategoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getBotmanAkamaiBotCategory:getBotmanAkamaiBotCategory", {
        "categoryName": args.categoryName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBotmanAkamaiBotCategory.
 */
export interface GetBotmanAkamaiBotCategoryArgs {
    categoryName?: string;
    id?: string;
}

/**
 * A collection of values returned by getBotmanAkamaiBotCategory.
 */
export interface GetBotmanAkamaiBotCategoryResult {
    readonly categoryName?: string;
    readonly id: string;
    readonly json: string;
}
export function getBotmanAkamaiBotCategoryOutput(args?: GetBotmanAkamaiBotCategoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBotmanAkamaiBotCategoryResult> {
    return pulumi.output(args).apply((a: any) => getBotmanAkamaiBotCategory(a, opts))
}

/**
 * A collection of arguments for invoking getBotmanAkamaiBotCategory.
 */
export interface GetBotmanAkamaiBotCategoryOutputArgs {
    categoryName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
