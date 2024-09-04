// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricConnections(args: GetFabricConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getFabricConnections:getFabricConnections", {
        "filters": args.filters,
        "id": args.id,
        "outerOperator": args.outerOperator,
        "pagination": args.pagination,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricConnections.
 */
export interface GetFabricConnectionsArgs {
    filters: inputs.GetFabricConnectionsFilter[];
    id?: string;
    outerOperator: string;
    pagination?: inputs.GetFabricConnectionsPagination;
    sorts?: inputs.GetFabricConnectionsSort[];
}

/**
 * A collection of values returned by getFabricConnections.
 */
export interface GetFabricConnectionsResult {
    readonly datas: outputs.GetFabricConnectionsData[];
    readonly filters: outputs.GetFabricConnectionsFilter[];
    readonly id: string;
    readonly outerOperator: string;
    readonly pagination?: outputs.GetFabricConnectionsPagination;
    readonly sorts?: outputs.GetFabricConnectionsSort[];
}
export function getFabricConnectionsOutput(args: GetFabricConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricConnectionsResult> {
    return pulumi.output(args).apply((a: any) => getFabricConnections(a, opts))
}

/**
 * A collection of arguments for invoking getFabricConnections.
 */
export interface GetFabricConnectionsOutputArgs {
    filters: pulumi.Input<pulumi.Input<inputs.GetFabricConnectionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    outerOperator: pulumi.Input<string>;
    pagination?: pulumi.Input<inputs.GetFabricConnectionsPaginationArgs>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetFabricConnectionsSortArgs>[]>;
}
