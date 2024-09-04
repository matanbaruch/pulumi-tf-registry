// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServiceGroup(args: GetServiceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getServiceGroup:getServiceGroup", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceGroup.
 */
export interface GetServiceGroupArgs {
    id: string;
}

/**
 * A collection of values returned by getServiceGroup.
 */
export interface GetServiceGroupResult {
    readonly id: string;
    readonly members: string[];
    readonly name: string;
    readonly tags: string[];
    readonly tfid: string;
}
export function getServiceGroupOutput(args: GetServiceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceGroupResult> {
    return pulumi.output(args).apply((a: any) => getServiceGroup(a, opts))
}

/**
 * A collection of arguments for invoking getServiceGroup.
 */
export interface GetServiceGroupOutputArgs {
    id: pulumi.Input<string>;
}
