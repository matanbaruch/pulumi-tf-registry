// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRoles(args?: GetRolesArgs, opts?: pulumi.InvokeOptions): Promise<GetRolesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fivetran:index/getRoles:getRoles", {
        "roles": args.roles,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoles.
 */
export interface GetRolesArgs {
    roles?: inputs.GetRolesRole[];
}

/**
 * A collection of values returned by getRoles.
 */
export interface GetRolesResult {
    readonly id: string;
    readonly roles?: outputs.GetRolesRole[];
}
export function getRolesOutput(args?: GetRolesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRolesResult> {
    return pulumi.output(args).apply((a: any) => getRoles(a, opts))
}

/**
 * A collection of arguments for invoking getRoles.
 */
export interface GetRolesOutputArgs {
    roles?: pulumi.Input<pulumi.Input<inputs.GetRolesRoleArgs>[]>;
}
