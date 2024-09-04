// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEmailEmailReturnPaths(args?: GetEmailEmailReturnPathsArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailEmailReturnPathsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getEmailEmailReturnPaths:getEmailEmailReturnPaths", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "parentResourceId": args.parentResourceId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEmailEmailReturnPaths.
 */
export interface GetEmailEmailReturnPathsArgs {
    compartmentId?: string;
    filters?: inputs.GetEmailEmailReturnPathsFilter[];
    id?: string;
    name?: string;
    parentResourceId?: string;
    state?: string;
}

/**
 * A collection of values returned by getEmailEmailReturnPaths.
 */
export interface GetEmailEmailReturnPathsResult {
    readonly compartmentId?: string;
    readonly emailReturnPathCollections: outputs.GetEmailEmailReturnPathsEmailReturnPathCollection[];
    readonly filters?: outputs.GetEmailEmailReturnPathsFilter[];
    readonly id?: string;
    readonly name?: string;
    readonly parentResourceId?: string;
    readonly state?: string;
}
export function getEmailEmailReturnPathsOutput(args?: GetEmailEmailReturnPathsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEmailEmailReturnPathsResult> {
    return pulumi.output(args).apply((a: any) => getEmailEmailReturnPaths(a, opts))
}

/**
 * A collection of arguments for invoking getEmailEmailReturnPaths.
 */
export interface GetEmailEmailReturnPathsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetEmailEmailReturnPathsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentResourceId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
