// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityGroups(args?: GetSecurityGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zenlayercloud:index/getSecurityGroups:getSecurityGroups", {
        "id": args.id,
        "name": args.name,
        "resultOutputFile": args.resultOutputFile,
        "securityGroupId": args.securityGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityGroups.
 */
export interface GetSecurityGroupsArgs {
    id?: string;
    name?: string;
    resultOutputFile?: string;
    securityGroupId?: string;
}

/**
 * A collection of values returned by getSecurityGroups.
 */
export interface GetSecurityGroupsResult {
    readonly id: string;
    readonly name?: string;
    readonly resultOutputFile?: string;
    readonly securityGroupId?: string;
    readonly securityGroups: outputs.GetSecurityGroupsSecurityGroup[];
}
export function getSecurityGroupsOutput(args?: GetSecurityGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityGroupsResult> {
    return pulumi.output(args).apply((a: any) => getSecurityGroups(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityGroups.
 */
export interface GetSecurityGroupsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
}
