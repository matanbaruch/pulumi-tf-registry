// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWafIpset(args: GetWafIpsetArgs, opts?: pulumi.InvokeOptions): Promise<GetWafIpsetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getWafIpset:getWafIpset", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafIpset.
 */
export interface GetWafIpsetArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getWafIpset.
 */
export interface GetWafIpsetResult {
    readonly id: string;
    readonly name: string;
}
export function getWafIpsetOutput(args: GetWafIpsetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafIpsetResult> {
    return pulumi.output(args).apply((a: any) => getWafIpset(a, opts))
}

/**
 * A collection of arguments for invoking getWafIpset.
 */
export interface GetWafIpsetOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
