// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTelephonyProvidersEdgesEdgeGroup(args: GetTelephonyProvidersEdgesEdgeGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetTelephonyProvidersEdgesEdgeGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getTelephonyProvidersEdgesEdgeGroup:getTelephonyProvidersEdgesEdgeGroup", {
        "id": args.id,
        "managed": args.managed,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesEdgeGroup.
 */
export interface GetTelephonyProvidersEdgesEdgeGroupArgs {
    id?: string;
    managed?: boolean;
    name: string;
}

/**
 * A collection of values returned by getTelephonyProvidersEdgesEdgeGroup.
 */
export interface GetTelephonyProvidersEdgesEdgeGroupResult {
    readonly id: string;
    readonly managed?: boolean;
    readonly name: string;
}
export function getTelephonyProvidersEdgesEdgeGroupOutput(args: GetTelephonyProvidersEdgesEdgeGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTelephonyProvidersEdgesEdgeGroupResult> {
    return pulumi.output(args).apply((a: any) => getTelephonyProvidersEdgesEdgeGroup(a, opts))
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesEdgeGroup.
 */
export interface GetTelephonyProvidersEdgesEdgeGroupOutputArgs {
    id?: pulumi.Input<string>;
    managed?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
}
