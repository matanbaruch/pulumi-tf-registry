// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAzureRole(args?: GetAzureRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kion:index/getAzureRole:getAzureRole", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAzureRole.
 */
export interface GetAzureRoleArgs {
    filters?: inputs.GetAzureRoleFilter[];
    id?: string;
}

/**
 * A collection of values returned by getAzureRole.
 */
export interface GetAzureRoleResult {
    readonly filters?: outputs.GetAzureRoleFilter[];
    readonly id: string;
    readonly lists: outputs.GetAzureRoleList[];
}
export function getAzureRoleOutput(args?: GetAzureRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureRoleResult> {
    return pulumi.output(args).apply((a: any) => getAzureRole(a, opts))
}

/**
 * A collection of arguments for invoking getAzureRole.
 */
export interface GetAzureRoleOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetAzureRoleFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
