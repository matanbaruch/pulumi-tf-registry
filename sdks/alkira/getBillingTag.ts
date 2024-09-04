// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBillingTag(args: GetBillingTagArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingTagResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alkira:index/getBillingTag:getBillingTag", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBillingTag.
 */
export interface GetBillingTagArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getBillingTag.
 */
export interface GetBillingTagResult {
    readonly id: string;
    readonly name: string;
}
export function getBillingTagOutput(args: GetBillingTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBillingTagResult> {
    return pulumi.output(args).apply((a: any) => getBillingTag(a, opts))
}

/**
 * A collection of arguments for invoking getBillingTag.
 */
export interface GetBillingTagOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
