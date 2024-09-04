// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTagCategory(args: GetTagCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetTagCategoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vsphere:index/getTagCategory:getTagCategory", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTagCategory.
 */
export interface GetTagCategoryArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getTagCategory.
 */
export interface GetTagCategoryResult {
    readonly associableTypes: string[];
    readonly cardinality: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
}
export function getTagCategoryOutput(args: GetTagCategoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagCategoryResult> {
    return pulumi.output(args).apply((a: any) => getTagCategory(a, opts))
}

/**
 * A collection of arguments for invoking getTagCategory.
 */
export interface GetTagCategoryOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
