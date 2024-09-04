// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDmsEnterpriseUsers(args?: GetDmsEnterpriseUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetDmsEnterpriseUsersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDmsEnterpriseUsers:getDmsEnterpriseUsers", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "role": args.role,
        "searchKey": args.searchKey,
        "status": args.status,
        "tid": args.tid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmsEnterpriseUsers.
 */
export interface GetDmsEnterpriseUsersArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    role?: string;
    searchKey?: string;
    status?: string;
    tid?: number;
}

/**
 * A collection of values returned by getDmsEnterpriseUsers.
 */
export interface GetDmsEnterpriseUsersResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly role?: string;
    readonly searchKey?: string;
    readonly status?: string;
    readonly tid?: number;
    readonly users: outputs.GetDmsEnterpriseUsersUser[];
}
export function getDmsEnterpriseUsersOutput(args?: GetDmsEnterpriseUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsEnterpriseUsersResult> {
    return pulumi.output(args).apply((a: any) => getDmsEnterpriseUsers(a, opts))
}

/**
 * A collection of arguments for invoking getDmsEnterpriseUsers.
 */
export interface GetDmsEnterpriseUsersOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    searchKey?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tid?: pulumi.Input<number>;
}
