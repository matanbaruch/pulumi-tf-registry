// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPolicyDistributedFloodProtectionProfile(args?: GetPolicyDistributedFloodProtectionProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDistributedFloodProtectionProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getPolicyDistributedFloodProtectionProfile:getPolicyDistributedFloodProtectionProfile", {
        "context": args.context,
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPolicyDistributedFloodProtectionProfile.
 */
export interface GetPolicyDistributedFloodProtectionProfileArgs {
    context?: inputs.GetPolicyDistributedFloodProtectionProfileContext;
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getPolicyDistributedFloodProtectionProfile.
 */
export interface GetPolicyDistributedFloodProtectionProfileResult {
    readonly context?: outputs.GetPolicyDistributedFloodProtectionProfileContext;
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly path: string;
}
export function getPolicyDistributedFloodProtectionProfileOutput(args?: GetPolicyDistributedFloodProtectionProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyDistributedFloodProtectionProfileResult> {
    return pulumi.output(args).apply((a: any) => getPolicyDistributedFloodProtectionProfile(a, opts))
}

/**
 * A collection of arguments for invoking getPolicyDistributedFloodProtectionProfile.
 */
export interface GetPolicyDistributedFloodProtectionProfileOutputArgs {
    context?: pulumi.Input<inputs.GetPolicyDistributedFloodProtectionProfileContextArgs>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
