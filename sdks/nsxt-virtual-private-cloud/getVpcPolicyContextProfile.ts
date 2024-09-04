// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcPolicyContextProfile(args: GetVpcPolicyContextProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcPolicyContextProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt-virtual-private-cloud:index/getVpcPolicyContextProfile:getVpcPolicyContextProfile", {
        "context": args.context,
        "displayName": args.displayName,
        "id": args.id,
        "nsxId": args.nsxId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcPolicyContextProfile.
 */
export interface GetVpcPolicyContextProfileArgs {
    context: inputs.GetVpcPolicyContextProfileContext;
    displayName?: string;
    id?: string;
    nsxId?: string;
}

/**
 * A collection of values returned by getVpcPolicyContextProfile.
 */
export interface GetVpcPolicyContextProfileResult {
    readonly context: outputs.GetVpcPolicyContextProfileContext;
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly nsxId: string;
    readonly path: string;
}
export function getVpcPolicyContextProfileOutput(args: GetVpcPolicyContextProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcPolicyContextProfileResult> {
    return pulumi.output(args).apply((a: any) => getVpcPolicyContextProfile(a, opts))
}

/**
 * A collection of arguments for invoking getVpcPolicyContextProfile.
 */
export interface GetVpcPolicyContextProfileOutputArgs {
    context: pulumi.Input<inputs.GetVpcPolicyContextProfileContextArgs>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    nsxId?: pulumi.Input<string>;
}
