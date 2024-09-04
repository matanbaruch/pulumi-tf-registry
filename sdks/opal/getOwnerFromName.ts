// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOwnerFromName(args: GetOwnerFromNameArgs, opts?: pulumi.InvokeOptions): Promise<GetOwnerFromNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opal:index/getOwnerFromName:getOwnerFromName", {
        "ownerName": args.ownerName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOwnerFromName.
 */
export interface GetOwnerFromNameArgs {
    ownerName: string;
}

/**
 * A collection of values returned by getOwnerFromName.
 */
export interface GetOwnerFromNameResult {
    readonly accessRequestEscalationPeriod: number;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly ownerName: string;
    readonly reviewerMessageChannelId: string;
    readonly sourceGroupId: string;
}
export function getOwnerFromNameOutput(args: GetOwnerFromNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOwnerFromNameResult> {
    return pulumi.output(args).apply((a: any) => getOwnerFromName(a, opts))
}

/**
 * A collection of arguments for invoking getOwnerFromName.
 */
export interface GetOwnerFromNameOutputArgs {
    ownerName: pulumi.Input<string>;
}
