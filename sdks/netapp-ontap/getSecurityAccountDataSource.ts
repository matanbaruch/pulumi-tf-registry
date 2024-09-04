// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityAccountDataSource(args: GetSecurityAccountDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityAccountDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getSecurityAccountDataSource:getSecurityAccountDataSource", {
        "cxProfileName": args.cxProfileName,
        "name": args.name,
        "owner": args.owner,
        "scope": args.scope,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityAccountDataSource.
 */
export interface GetSecurityAccountDataSourceArgs {
    cxProfileName: string;
    name: string;
    owner?: inputs.GetSecurityAccountDataSourceOwner;
    scope?: string;
}

/**
 * A collection of values returned by getSecurityAccountDataSource.
 */
export interface GetSecurityAccountDataSourceResult {
    readonly applications: outputs.GetSecurityAccountDataSourceApplication[];
    readonly comment: string;
    readonly cxProfileName: string;
    readonly id: string;
    readonly locked: boolean;
    readonly name: string;
    readonly owner: outputs.GetSecurityAccountDataSourceOwner;
    readonly role: outputs.GetSecurityAccountDataSourceRole;
    readonly scope: string;
}
export function getSecurityAccountDataSourceOutput(args: GetSecurityAccountDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityAccountDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getSecurityAccountDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityAccountDataSource.
 */
export interface GetSecurityAccountDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    name: pulumi.Input<string>;
    owner?: pulumi.Input<inputs.GetSecurityAccountDataSourceOwnerArgs>;
    scope?: pulumi.Input<string>;
}
