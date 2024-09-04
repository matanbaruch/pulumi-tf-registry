// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDirectoryRoleTemplates(args?: GetDirectoryRoleTemplatesArgs, opts?: pulumi.InvokeOptions): Promise<GetDirectoryRoleTemplatesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuread:index/getDirectoryRoleTemplates:getDirectoryRoleTemplates", {
        "id": args.id,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDirectoryRoleTemplates.
 */
export interface GetDirectoryRoleTemplatesArgs {
    id?: string;
    timeouts?: inputs.GetDirectoryRoleTemplatesTimeouts;
}

/**
 * A collection of values returned by getDirectoryRoleTemplates.
 */
export interface GetDirectoryRoleTemplatesResult {
    readonly id: string;
    readonly objectIds: string[];
    readonly roleTemplates: outputs.GetDirectoryRoleTemplatesRoleTemplate[];
    readonly timeouts?: outputs.GetDirectoryRoleTemplatesTimeouts;
}
export function getDirectoryRoleTemplatesOutput(args?: GetDirectoryRoleTemplatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDirectoryRoleTemplatesResult> {
    return pulumi.output(args).apply((a: any) => getDirectoryRoleTemplates(a, opts))
}

/**
 * A collection of arguments for invoking getDirectoryRoleTemplates.
 */
export interface GetDirectoryRoleTemplatesOutputArgs {
    id?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDirectoryRoleTemplatesTimeoutsArgs>;
}
