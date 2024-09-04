// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMarketplace(args?: GetMarketplaceArgs, opts?: pulumi.InvokeOptions): Promise<GetMarketplaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opennebula:index/getMarketplace:getMarketplace", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMarketplace.
 */
export interface GetMarketplaceArgs {
    id?: number;
    name?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getMarketplace.
 */
export interface GetMarketplaceResult {
    readonly id?: number;
    readonly name?: string;
    readonly tags?: {[key: string]: string};
}
export function getMarketplaceOutput(args?: GetMarketplaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMarketplaceResult> {
    return pulumi.output(args).apply((a: any) => getMarketplace(a, opts))
}

/**
 * A collection of arguments for invoking getMarketplace.
 */
export interface GetMarketplaceOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
