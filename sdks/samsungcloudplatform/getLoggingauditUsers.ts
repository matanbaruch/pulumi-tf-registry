// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingauditUsers(args?: GetLoggingauditUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingauditUsersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getLoggingauditUsers:getLoggingauditUsers", {
        "filters": args.filters,
        "id": args.id,
        "userName": args.userName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingauditUsers.
 */
export interface GetLoggingauditUsersArgs {
    filters?: inputs.GetLoggingauditUsersFilter[];
    id?: string;
    userName?: string;
}

/**
 * A collection of values returned by getLoggingauditUsers.
 */
export interface GetLoggingauditUsersResult {
    readonly contents: outputs.GetLoggingauditUsersContent[];
    readonly filters?: outputs.GetLoggingauditUsersFilter[];
    readonly id: string;
    readonly totalCount: number;
    readonly userName?: string;
}
export function getLoggingauditUsersOutput(args?: GetLoggingauditUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingauditUsersResult> {
    return pulumi.output(args).apply((a: any) => getLoggingauditUsers(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingauditUsers.
 */
export interface GetLoggingauditUsersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLoggingauditUsersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}
