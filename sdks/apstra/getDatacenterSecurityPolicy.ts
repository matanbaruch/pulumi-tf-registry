// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacenterSecurityPolicy(args: GetDatacenterSecurityPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacenterSecurityPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getDatacenterSecurityPolicy:getDatacenterSecurityPolicy", {
        "blueprintId": args.blueprintId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenterSecurityPolicy.
 */
export interface GetDatacenterSecurityPolicyArgs {
    blueprintId: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getDatacenterSecurityPolicy.
 */
export interface GetDatacenterSecurityPolicyResult {
    readonly blueprintId: string;
    readonly description: string;
    readonly destinationApplicationPointId: string;
    readonly enabled: boolean;
    readonly id: string;
    readonly name: string;
    readonly rules: outputs.GetDatacenterSecurityPolicyRule[];
    readonly sourceApplicationPointId: string;
    readonly tags: string[];
}
export function getDatacenterSecurityPolicyOutput(args: GetDatacenterSecurityPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacenterSecurityPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDatacenterSecurityPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenterSecurityPolicy.
 */
export interface GetDatacenterSecurityPolicyOutputArgs {
    blueprintId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
