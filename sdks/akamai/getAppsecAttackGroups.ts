// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppsecAttackGroups(args: GetAppsecAttackGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsecAttackGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getAppsecAttackGroups:getAppsecAttackGroups", {
        "attackGroup": args.attackGroup,
        "configId": args.configId,
        "id": args.id,
        "securityPolicyId": args.securityPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsecAttackGroups.
 */
export interface GetAppsecAttackGroupsArgs {
    attackGroup?: string;
    configId: number;
    id?: string;
    securityPolicyId: string;
}

/**
 * A collection of values returned by getAppsecAttackGroups.
 */
export interface GetAppsecAttackGroupsResult {
    readonly attackGroup?: string;
    readonly attackGroupAction: string;
    readonly conditionException: string;
    readonly configId: number;
    readonly id: string;
    readonly json: string;
    readonly outputText: string;
    readonly securityPolicyId: string;
}
export function getAppsecAttackGroupsOutput(args: GetAppsecAttackGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsecAttackGroupsResult> {
    return pulumi.output(args).apply((a: any) => getAppsecAttackGroups(a, opts))
}

/**
 * A collection of arguments for invoking getAppsecAttackGroups.
 */
export interface GetAppsecAttackGroupsOutputArgs {
    attackGroup?: pulumi.Input<string>;
    configId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    securityPolicyId: pulumi.Input<string>;
}
