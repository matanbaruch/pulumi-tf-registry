// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpv4DeviceAclPolicyDefinition(args: GetIpv4DeviceAclPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv4DeviceAclPolicyDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getIpv4DeviceAclPolicyDefinition:getIpv4DeviceAclPolicyDefinition", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv4DeviceAclPolicyDefinition.
 */
export interface GetIpv4DeviceAclPolicyDefinitionArgs {
    id: string;
}

/**
 * A collection of values returned by getIpv4DeviceAclPolicyDefinition.
 */
export interface GetIpv4DeviceAclPolicyDefinitionResult {
    readonly defaultAction: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly sequences: outputs.GetIpv4DeviceAclPolicyDefinitionSequence[];
    readonly type: string;
    readonly version: number;
}
export function getIpv4DeviceAclPolicyDefinitionOutput(args: GetIpv4DeviceAclPolicyDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv4DeviceAclPolicyDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getIpv4DeviceAclPolicyDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getIpv4DeviceAclPolicyDefinition.
 */
export interface GetIpv4DeviceAclPolicyDefinitionOutputArgs {
    id: pulumi.Input<string>;
}
