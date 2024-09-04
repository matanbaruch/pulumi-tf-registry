// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkSecurityRule(args: GetNetworkSecurityRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getNetworkSecurityRule:getNetworkSecurityRule", {
        "categories": args.categories,
        "id": args.id,
        "networkSecurityRuleId": args.networkSecurityRuleId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkSecurityRule.
 */
export interface GetNetworkSecurityRuleArgs {
    categories?: inputs.GetNetworkSecurityRuleCategory[];
    id?: string;
    networkSecurityRuleId: string;
}

/**
 * A collection of values returned by getNetworkSecurityRule.
 */
export interface GetNetworkSecurityRuleResult {
    readonly adRuleAction: string;
    readonly adRuleInboundAllowLists: outputs.GetNetworkSecurityRuleAdRuleInboundAllowList[];
    readonly adRuleOutboundAllowLists: outputs.GetNetworkSecurityRuleAdRuleOutboundAllowList[];
    readonly adRuleTargetGroupDefaultInternalPolicy: string;
    readonly adRuleTargetGroupFilterKindLists: string[];
    readonly adRuleTargetGroupFilterParams: outputs.GetNetworkSecurityRuleAdRuleTargetGroupFilterParam[];
    readonly adRuleTargetGroupFilterType: string;
    readonly adRuleTargetGroupPeerSpecificationType: string;
    readonly allowIpv6Traffic: boolean;
    readonly apiVersion: string;
    readonly appRuleAction: string;
    readonly appRuleInboundAllowLists: outputs.GetNetworkSecurityRuleAppRuleInboundAllowList[];
    readonly appRuleOutboundAllowLists: outputs.GetNetworkSecurityRuleAppRuleOutboundAllowList[];
    readonly appRuleTargetGroupDefaultInternalPolicy: string;
    readonly appRuleTargetGroupFilterKindLists: string[];
    readonly appRuleTargetGroupFilterParams: outputs.GetNetworkSecurityRuleAppRuleTargetGroupFilterParam[];
    readonly appRuleTargetGroupFilterType: string;
    readonly appRuleTargetGroupPeerSpecificationType: string;
    readonly categories?: outputs.GetNetworkSecurityRuleCategory[];
    readonly description: string;
    readonly id: string;
    readonly isPolicyHitlogEnabled: boolean;
    readonly isolationRuleAction: string;
    readonly isolationRuleFirstEntityFilterKindLists: string[];
    readonly isolationRuleFirstEntityFilterParams: outputs.GetNetworkSecurityRuleIsolationRuleFirstEntityFilterParam[];
    readonly isolationRuleFirstEntityFilterType: string;
    readonly isolationRuleSecondEntityFilterKindLists: string[];
    readonly isolationRuleSecondEntityFilterParams: outputs.GetNetworkSecurityRuleIsolationRuleSecondEntityFilterParam[];
    readonly isolationRuleSecondEntityFilterType: string;
    readonly metadata: {[key: string]: string};
    readonly name: string;
    readonly networkSecurityRuleId: string;
    readonly ownerReference: {[key: string]: string};
    readonly projectReference: {[key: string]: string};
    readonly quarantineRuleAction: string;
    readonly quarantineRuleInboundAllowLists: outputs.GetNetworkSecurityRuleQuarantineRuleInboundAllowList[];
    readonly quarantineRuleOutboundAllowLists: outputs.GetNetworkSecurityRuleQuarantineRuleOutboundAllowList[];
    readonly quarantineRuleTargetGroupDefaultInternalPolicy: string;
    readonly quarantineRuleTargetGroupFilterKindLists: string[];
    readonly quarantineRuleTargetGroupFilterParams: outputs.GetNetworkSecurityRuleQuarantineRuleTargetGroupFilterParam[];
    readonly quarantineRuleTargetGroupFilterType: string;
    readonly quarantineRuleTargetGroupPeerSpecificationType: string;
}
export function getNetworkSecurityRuleOutput(args: GetNetworkSecurityRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkSecurityRuleResult> {
    return pulumi.output(args).apply((a: any) => getNetworkSecurityRule(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkSecurityRule.
 */
export interface GetNetworkSecurityRuleOutputArgs {
    categories?: pulumi.Input<pulumi.Input<inputs.GetNetworkSecurityRuleCategoryArgs>[]>;
    id?: pulumi.Input<string>;
    networkSecurityRuleId: pulumi.Input<string>;
}
