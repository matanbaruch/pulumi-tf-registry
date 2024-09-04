// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityGroup(args: GetSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra:index/getSecurityGroup:getSecurityGroup", {
        "filter": args.filter,
        "rules": args.rules,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityGroup.
 */
export interface GetSecurityGroupArgs {
    filter: string;
    rules?: inputs.GetSecurityGroupRule[];
}

/**
 * A collection of values returned by getSecurityGroup.
 */
export interface GetSecurityGroupResult {
    readonly createdAt: string;
    readonly description: string;
    readonly externalId: string;
    readonly externalRegionId: string;
    readonly filter: string;
    readonly id: string;
    readonly links: outputs.GetSecurityGroupLink[];
    readonly name: string;
    readonly organizationId: string;
    readonly owner: string;
    readonly rules?: outputs.GetSecurityGroupRule[];
    readonly updatedAt: string;
}
export function getSecurityGroupOutput(args: GetSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityGroupResult> {
    return pulumi.output(args).apply((a: any) => getSecurityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityGroup.
 */
export interface GetSecurityGroupOutputArgs {
    filter: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.GetSecurityGroupRuleArgs>[]>;
}
