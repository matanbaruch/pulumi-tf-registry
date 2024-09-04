// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServicebusNamespaceAuthorizationRule(args: GetServicebusNamespaceAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetServicebusNamespaceAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getServicebusNamespaceAuthorizationRule:getServicebusNamespaceAuthorizationRule", {
        "id": args.id,
        "name": args.name,
        "namespaceId": args.namespaceId,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicebusNamespaceAuthorizationRule.
 */
export interface GetServicebusNamespaceAuthorizationRuleArgs {
    id?: string;
    name: string;
    namespaceId?: string;
    /**
     * @deprecated Deprecated
     */
    namespaceName?: string;
    /**
     * @deprecated Deprecated
     */
    resourceGroupName?: string;
    timeouts?: inputs.GetServicebusNamespaceAuthorizationRuleTimeouts;
}

/**
 * A collection of values returned by getServicebusNamespaceAuthorizationRule.
 */
export interface GetServicebusNamespaceAuthorizationRuleResult {
    readonly id: string;
    readonly name: string;
    readonly namespaceId?: string;
    /**
     * @deprecated Deprecated
     */
    readonly namespaceName?: string;
    readonly primaryConnectionString: string;
    readonly primaryConnectionStringAlias: string;
    readonly primaryKey: string;
    /**
     * @deprecated Deprecated
     */
    readonly resourceGroupName?: string;
    readonly secondaryConnectionString: string;
    readonly secondaryConnectionStringAlias: string;
    readonly secondaryKey: string;
    readonly timeouts?: outputs.GetServicebusNamespaceAuthorizationRuleTimeouts;
}
export function getServicebusNamespaceAuthorizationRuleOutput(args: GetServicebusNamespaceAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicebusNamespaceAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getServicebusNamespaceAuthorizationRule(a, opts))
}

/**
 * A collection of arguments for invoking getServicebusNamespaceAuthorizationRule.
 */
export interface GetServicebusNamespaceAuthorizationRuleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    namespaceId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetServicebusNamespaceAuthorizationRuleTimeoutsArgs>;
}
