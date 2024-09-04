// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNsGroup(args?: GetNsGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNsGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getNsGroup:getNsGroup", {
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNsGroup.
 */
export interface GetNsGroupArgs {
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getNsGroup.
 */
export interface GetNsGroupResult {
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
}
export function getNsGroupOutput(args?: GetNsGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNsGroupResult> {
    return pulumi.output(args).apply((a: any) => getNsGroup(a, opts))
}

/**
 * A collection of arguments for invoking getNsGroup.
 */
export interface GetNsGroupOutputArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
