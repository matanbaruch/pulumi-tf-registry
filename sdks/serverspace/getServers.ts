// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServers(args?: GetServersArgs, opts?: pulumi.InvokeOptions): Promise<GetServersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("serverspace:index/getServers:getServers", {
        "filters": args.filters,
        "id": args.id,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersArgs {
    filters?: inputs.GetServersFilter[];
    id?: string;
    sorts?: inputs.GetServersSort[];
}

/**
 * A collection of values returned by getServers.
 */
export interface GetServersResult {
    readonly filters?: outputs.GetServersFilter[];
    readonly id: string;
    readonly servers: outputs.GetServersServer[];
    readonly sorts?: outputs.GetServersSort[];
}
export function getServersOutput(args?: GetServersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServersResult> {
    return pulumi.output(args).apply((a: any) => getServers(a, opts))
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetServersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetServersSortArgs>[]>;
}
