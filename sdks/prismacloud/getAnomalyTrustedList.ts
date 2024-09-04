// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAnomalyTrustedList(args: GetAnomalyTrustedListArgs, opts?: pulumi.InvokeOptions): Promise<GetAnomalyTrustedListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prismacloud:index/getAnomalyTrustedList:getAnomalyTrustedList", {
        "atlId": args.atlId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAnomalyTrustedList.
 */
export interface GetAnomalyTrustedListArgs {
    atlId: number;
    id?: string;
}

/**
 * A collection of values returned by getAnomalyTrustedList.
 */
export interface GetAnomalyTrustedListResult {
    readonly accountId: string;
    readonly applicablePolicies: string[];
    readonly atlId: number;
    readonly createdBy: string;
    readonly createdOn: number;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly trustedListEntries: outputs.GetAnomalyTrustedListTrustedListEntry[];
    readonly trustedListType: string;
    readonly vpc: string;
}
export function getAnomalyTrustedListOutput(args: GetAnomalyTrustedListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnomalyTrustedListResult> {
    return pulumi.output(args).apply((a: any) => getAnomalyTrustedList(a, opts))
}

/**
 * A collection of arguments for invoking getAnomalyTrustedList.
 */
export interface GetAnomalyTrustedListOutputArgs {
    atlId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
