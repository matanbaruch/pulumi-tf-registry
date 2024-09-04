// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53DelegationSet(args: GetRoute53DelegationSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53DelegationSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRoute53DelegationSet:getRoute53DelegationSet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoute53DelegationSet.
 */
export interface GetRoute53DelegationSetArgs {
    id: string;
}

/**
 * A collection of values returned by getRoute53DelegationSet.
 */
export interface GetRoute53DelegationSetResult {
    readonly arn: string;
    readonly callerReference: string;
    readonly id: string;
    readonly nameServers: string[];
}
export function getRoute53DelegationSetOutput(args: GetRoute53DelegationSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53DelegationSetResult> {
    return pulumi.output(args).apply((a: any) => getRoute53DelegationSet(a, opts))
}

/**
 * A collection of arguments for invoking getRoute53DelegationSet.
 */
export interface GetRoute53DelegationSetOutputArgs {
    id: pulumi.Input<string>;
}
