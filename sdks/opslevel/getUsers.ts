// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUsers(args?: GetUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetUsersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opslevel:index/getUsers:getUsers", {
        "ignoreDeactivated": args.ignoreDeactivated,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUsers.
 */
export interface GetUsersArgs {
    ignoreDeactivated?: boolean;
}

/**
 * A collection of values returned by getUsers.
 */
export interface GetUsersResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ignoreDeactivated?: boolean;
    readonly users: outputs.GetUsersUser[];
}
export function getUsersOutput(args?: GetUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUsersResult> {
    return pulumi.output(args).apply((a: any) => getUsers(a, opts))
}

/**
 * A collection of arguments for invoking getUsers.
 */
export interface GetUsersOutputArgs {
    ignoreDeactivated?: pulumi.Input<boolean>;
}
