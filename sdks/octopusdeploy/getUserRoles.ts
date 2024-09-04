// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUserRoles(args?: GetUserRolesArgs, opts?: pulumi.InvokeOptions): Promise<GetUserRolesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("octopusdeploy:index/getUserRoles:getUserRoles", {
        "ids": args.ids,
        "partialName": args.partialName,
        "skip": args.skip,
        "spaceId": args.spaceId,
        "take": args.take,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUserRoles.
 */
export interface GetUserRolesArgs {
    ids?: string[];
    partialName?: string;
    skip?: number;
    spaceId?: string;
    take?: number;
}

/**
 * A collection of values returned by getUserRoles.
 */
export interface GetUserRolesResult {
    readonly id: string;
    readonly ids?: string[];
    readonly partialName?: string;
    readonly skip?: number;
    readonly spaceId?: string;
    readonly take?: number;
    readonly userRoles: outputs.GetUserRolesUserRole[];
}
export function getUserRolesOutput(args?: GetUserRolesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserRolesResult> {
    return pulumi.output(args).apply((a: any) => getUserRoles(a, opts))
}

/**
 * A collection of arguments for invoking getUserRoles.
 */
export interface GetUserRolesOutputArgs {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    partialName?: pulumi.Input<string>;
    skip?: pulumi.Input<number>;
    spaceId?: pulumi.Input<string>;
    take?: pulumi.Input<number>;
}
