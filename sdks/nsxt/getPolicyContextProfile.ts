// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPolicyContextProfile(args?: GetPolicyContextProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyContextProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getPolicyContextProfile:getPolicyContextProfile", {
        "context": args.context,
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPolicyContextProfile.
 */
export interface GetPolicyContextProfileArgs {
    context?: inputs.GetPolicyContextProfileContext;
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getPolicyContextProfile.
 */
export interface GetPolicyContextProfileResult {
    readonly context?: outputs.GetPolicyContextProfileContext;
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly path: string;
}
export function getPolicyContextProfileOutput(args?: GetPolicyContextProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyContextProfileResult> {
    return pulumi.output(args).apply((a: any) => getPolicyContextProfile(a, opts))
}

/**
 * A collection of arguments for invoking getPolicyContextProfile.
 */
export interface GetPolicyContextProfileOutputArgs {
    context?: pulumi.Input<inputs.GetPolicyContextProfileContextArgs>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
