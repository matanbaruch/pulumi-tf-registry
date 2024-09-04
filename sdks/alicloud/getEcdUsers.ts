// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcdUsers(args?: GetEcdUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetEcdUsersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcdUsers:getEcdUsers", {
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcdUsers.
 */
export interface GetEcdUsersArgs {
    id?: string;
    ids?: string[];
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getEcdUsers.
 */
export interface GetEcdUsersResult {
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly status?: string;
    readonly users: outputs.GetEcdUsersUser[];
}
export function getEcdUsersOutput(args?: GetEcdUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcdUsersResult> {
    return pulumi.output(args).apply((a: any) => getEcdUsers(a, opts))
}

/**
 * A collection of arguments for invoking getEcdUsers.
 */
export interface GetEcdUsersOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
