// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacenters(args?: GetDatacentersArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacentersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ah:index/getDatacenters:getDatacenters", {
        "filters": args.filters,
        "id": args.id,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenters.
 */
export interface GetDatacentersArgs {
    filters?: inputs.GetDatacentersFilter[];
    id?: string;
    sorts?: inputs.GetDatacentersSort[];
}

/**
 * A collection of values returned by getDatacenters.
 */
export interface GetDatacentersResult {
    readonly datacenters: outputs.GetDatacentersDatacenter[];
    readonly filters?: outputs.GetDatacentersFilter[];
    readonly id: string;
    readonly sorts?: outputs.GetDatacentersSort[];
}
export function getDatacentersOutput(args?: GetDatacentersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacentersResult> {
    return pulumi.output(args).apply((a: any) => getDatacenters(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenters.
 */
export interface GetDatacentersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatacentersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetDatacentersSortArgs>[]>;
}
