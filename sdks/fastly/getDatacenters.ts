// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacenters(args?: GetDatacentersArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacentersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fastly:index/getDatacenters:getDatacenters", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenters.
 */
export interface GetDatacentersArgs {
    id?: string;
}

/**
 * A collection of values returned by getDatacenters.
 */
export interface GetDatacentersResult {
    readonly id: string;
    readonly pops: outputs.GetDatacentersPop[];
}
export function getDatacentersOutput(args?: GetDatacentersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacentersResult> {
    return pulumi.output(args).apply((a: any) => getDatacenters(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenters.
 */
export interface GetDatacentersOutputArgs {
    id?: pulumi.Input<string>;
}
