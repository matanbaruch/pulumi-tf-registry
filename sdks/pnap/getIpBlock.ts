// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpBlock(args?: GetIpBlockArgs, opts?: pulumi.InvokeOptions): Promise<GetIpBlockResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pnap:index/getIpBlock:getIpBlock", {
        "cidr": args.cidr,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpBlock.
 */
export interface GetIpBlockArgs {
    cidr?: string;
    id?: string;
}

/**
 * A collection of values returned by getIpBlock.
 */
export interface GetIpBlockResult {
    readonly assignedResourceId: string;
    readonly assignedResourceType: string;
    readonly cidr: string;
    readonly cidrBlockSize: string;
    readonly createdOn: string;
    readonly description: string;
    readonly id: string;
    readonly isBringYourOwn: boolean;
    readonly location: string;
    readonly status: string;
    readonly tags: outputs.GetIpBlockTag[];
}
export function getIpBlockOutput(args?: GetIpBlockOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpBlockResult> {
    return pulumi.output(args).apply((a: any) => getIpBlock(a, opts))
}

/**
 * A collection of arguments for invoking getIpBlock.
 */
export interface GetIpBlockOutputArgs {
    cidr?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
