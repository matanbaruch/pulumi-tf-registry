// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQuickcreateAwsWorkspacesDirectoryConnection(args: GetQuickcreateAwsWorkspacesDirectoryConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetQuickcreateAwsWorkspacesDirectoryConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("citrix:index/getQuickcreateAwsWorkspacesDirectoryConnection:getQuickcreateAwsWorkspacesDirectoryConnection", {
        "account": args.account,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQuickcreateAwsWorkspacesDirectoryConnection.
 */
export interface GetQuickcreateAwsWorkspacesDirectoryConnectionArgs {
    account: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getQuickcreateAwsWorkspacesDirectoryConnection.
 */
export interface GetQuickcreateAwsWorkspacesDirectoryConnectionResult {
    readonly account: string;
    readonly defaultOu: string;
    readonly directory: string;
    readonly id?: string;
    readonly name?: string;
    readonly resourceLocation: string;
    readonly securityGroup: string;
    readonly subnets: string[];
    readonly tenancy: string;
    readonly userEnabledAsLocalAdministrator: boolean;
    readonly zone: string;
}
export function getQuickcreateAwsWorkspacesDirectoryConnectionOutput(args: GetQuickcreateAwsWorkspacesDirectoryConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQuickcreateAwsWorkspacesDirectoryConnectionResult> {
    return pulumi.output(args).apply((a: any) => getQuickcreateAwsWorkspacesDirectoryConnection(a, opts))
}

/**
 * A collection of arguments for invoking getQuickcreateAwsWorkspacesDirectoryConnection.
 */
export interface GetQuickcreateAwsWorkspacesDirectoryConnectionOutputArgs {
    account: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
