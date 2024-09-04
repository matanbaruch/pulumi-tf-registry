// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOwners(args?: GetOwnersArgs, opts?: pulumi.InvokeOptions): Promise<GetOwnersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opal:index/getOwners:getOwners", {
        "cursor": args.cursor,
        "name": args.name,
        "pageSize": args.pageSize,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOwners.
 */
export interface GetOwnersArgs {
    cursor?: string;
    name?: string;
    pageSize?: number;
}

/**
 * A collection of values returned by getOwners.
 */
export interface GetOwnersResult {
    readonly cursor?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name?: string;
    readonly next: string;
    readonly pageSize?: number;
    readonly previous: string;
    readonly results: outputs.GetOwnersResult[];
}
export function getOwnersOutput(args?: GetOwnersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOwnersResult> {
    return pulumi.output(args).apply((a: any) => getOwners(a, opts))
}

/**
 * A collection of arguments for invoking getOwners.
 */
export interface GetOwnersOutputArgs {
    cursor?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pageSize?: pulumi.Input<number>;
}
