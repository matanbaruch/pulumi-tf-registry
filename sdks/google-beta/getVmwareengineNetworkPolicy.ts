// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVmwareengineNetworkPolicy(args: GetVmwareengineNetworkPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetVmwareengineNetworkPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getVmwareengineNetworkPolicy:getVmwareengineNetworkPolicy", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVmwareengineNetworkPolicy.
 */
export interface GetVmwareengineNetworkPolicyArgs {
    id?: string;
    location: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getVmwareengineNetworkPolicy.
 */
export interface GetVmwareengineNetworkPolicyResult {
    readonly createTime: string;
    readonly description: string;
    readonly edgeServicesCidr: string;
    readonly externalIps: outputs.GetVmwareengineNetworkPolicyExternalIp[];
    readonly id: string;
    readonly internetAccesses: outputs.GetVmwareengineNetworkPolicyInternetAccess[];
    readonly location: string;
    readonly name: string;
    readonly project?: string;
    readonly uid: string;
    readonly updateTime: string;
    readonly vmwareEngineNetwork: string;
    readonly vmwareEngineNetworkCanonical: string;
}
export function getVmwareengineNetworkPolicyOutput(args: GetVmwareengineNetworkPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmwareengineNetworkPolicyResult> {
    return pulumi.output(args).apply((a: any) => getVmwareengineNetworkPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getVmwareengineNetworkPolicy.
 */
export interface GetVmwareengineNetworkPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
