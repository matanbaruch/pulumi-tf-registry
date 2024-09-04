// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAntiAffinityGroup(args?: GetAntiAffinityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAntiAffinityGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("exoscale:index/getAntiAffinityGroup:getAntiAffinityGroup", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAntiAffinityGroup.
 */
export interface GetAntiAffinityGroupArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getAntiAffinityGroup.
 */
export interface GetAntiAffinityGroupResult {
    readonly id?: string;
    readonly instances: string[];
    readonly name?: string;
}
export function getAntiAffinityGroupOutput(args?: GetAntiAffinityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAntiAffinityGroupResult> {
    return pulumi.output(args).apply((a: any) => getAntiAffinityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getAntiAffinityGroup.
 */
export interface GetAntiAffinityGroupOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
