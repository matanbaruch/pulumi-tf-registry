// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElb(args: GetElbArgs, opts?: pulumi.InvokeOptions): Promise<GetElbResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getElb:getElb", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElb.
 */
export interface GetElbArgs {
    id?: string;
    name: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getElb.
 */
export interface GetElbResult {
    readonly accessLogs: outputs.GetElbAccessLog[];
    readonly arn: string;
    readonly availabilityZones: string[];
    readonly connectionDraining: boolean;
    readonly connectionDrainingTimeout: number;
    readonly crossZoneLoadBalancing: boolean;
    readonly desyncMitigationMode: string;
    readonly dnsName: string;
    readonly healthChecks: outputs.GetElbHealthCheck[];
    readonly id: string;
    readonly idleTimeout: number;
    readonly instances: string[];
    readonly internal: boolean;
    readonly listeners: outputs.GetElbListener[];
    readonly name: string;
    readonly securityGroups: string[];
    readonly sourceSecurityGroup: string;
    readonly sourceSecurityGroupId: string;
    readonly subnets: string[];
    readonly tags: {[key: string]: string};
    readonly zoneId: string;
}
export function getElbOutput(args: GetElbOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElbResult> {
    return pulumi.output(args).apply((a: any) => getElb(a, opts))
}

/**
 * A collection of arguments for invoking getElb.
 */
export interface GetElbOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
