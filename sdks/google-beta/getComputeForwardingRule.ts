// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeForwardingRule(args: GetComputeForwardingRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeForwardingRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getComputeForwardingRule:getComputeForwardingRule", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeForwardingRule.
 */
export interface GetComputeForwardingRuleArgs {
    id?: string;
    name: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getComputeForwardingRule.
 */
export interface GetComputeForwardingRuleResult {
    readonly allPorts: boolean;
    readonly allowGlobalAccess: boolean;
    readonly allowPscGlobalAccess: boolean;
    readonly backendService: string;
    readonly baseForwardingRule: string;
    readonly creationTimestamp: string;
    readonly description: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly forwardingRuleId: number;
    readonly id: string;
    readonly ipAddress: string;
    readonly ipProtocol: string;
    readonly ipVersion: string;
    readonly isMirroringCollector: boolean;
    readonly labelFingerprint: string;
    readonly labels: {[key: string]: string};
    readonly loadBalancingScheme: string;
    readonly name: string;
    readonly network: string;
    readonly networkTier: string;
    readonly noAutomateDnsZone: boolean;
    readonly portRange: string;
    readonly ports: string[];
    readonly project?: string;
    readonly pscConnectionId: string;
    readonly pscConnectionStatus: string;
    readonly recreateClosedPsc: boolean;
    readonly region?: string;
    readonly selfLink: string;
    readonly serviceDirectoryRegistrations: outputs.GetComputeForwardingRuleServiceDirectoryRegistration[];
    readonly serviceLabel: string;
    readonly serviceName: string;
    readonly sourceIpRanges: string[];
    readonly subnetwork: string;
    readonly target: string;
    readonly terraformLabels: {[key: string]: string};
}
export function getComputeForwardingRuleOutput(args: GetComputeForwardingRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeForwardingRuleResult> {
    return pulumi.output(args).apply((a: any) => getComputeForwardingRule(a, opts))
}

/**
 * A collection of arguments for invoking getComputeForwardingRule.
 */
export interface GetComputeForwardingRuleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
