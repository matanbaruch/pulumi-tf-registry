// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticloadbalancingv2LoadBalancer(args: GetElasticloadbalancingv2LoadBalancerArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticloadbalancingv2LoadBalancerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getElasticloadbalancingv2LoadBalancer:getElasticloadbalancingv2LoadBalancer", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticloadbalancingv2LoadBalancer.
 */
export interface GetElasticloadbalancingv2LoadBalancerArgs {
    id: string;
}

/**
 * A collection of values returned by getElasticloadbalancingv2LoadBalancer.
 */
export interface GetElasticloadbalancingv2LoadBalancerResult {
    readonly canonicalHostedZoneId: string;
    readonly dnsName: string;
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic: string;
    readonly id: string;
    readonly ipAddressType: string;
    readonly loadBalancerArn: string;
    readonly loadBalancerAttributes: outputs.GetElasticloadbalancingv2LoadBalancerLoadBalancerAttribute[];
    readonly loadBalancerFullName: string;
    readonly loadBalancerName: string;
    readonly name: string;
    readonly scheme: string;
    readonly securityGroups: string[];
    readonly subnetMappings: outputs.GetElasticloadbalancingv2LoadBalancerSubnetMapping[];
    readonly subnets: string[];
    readonly tags: outputs.GetElasticloadbalancingv2LoadBalancerTag[];
    readonly type: string;
}
export function getElasticloadbalancingv2LoadBalancerOutput(args: GetElasticloadbalancingv2LoadBalancerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticloadbalancingv2LoadBalancerResult> {
    return pulumi.output(args).apply((a: any) => getElasticloadbalancingv2LoadBalancer(a, opts))
}

/**
 * A collection of arguments for invoking getElasticloadbalancingv2LoadBalancer.
 */
export interface GetElasticloadbalancingv2LoadBalancerOutputArgs {
    id: pulumi.Input<string>;
}
