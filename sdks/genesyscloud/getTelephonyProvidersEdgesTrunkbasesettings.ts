// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTelephonyProvidersEdgesTrunkbasesettings(args: GetTelephonyProvidersEdgesTrunkbasesettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetTelephonyProvidersEdgesTrunkbasesettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getTelephonyProvidersEdgesTrunkbasesettings:getTelephonyProvidersEdgesTrunkbasesettings", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesTrunkbasesettings.
 */
export interface GetTelephonyProvidersEdgesTrunkbasesettingsArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getTelephonyProvidersEdgesTrunkbasesettings.
 */
export interface GetTelephonyProvidersEdgesTrunkbasesettingsResult {
    readonly id: string;
    readonly name: string;
}
export function getTelephonyProvidersEdgesTrunkbasesettingsOutput(args: GetTelephonyProvidersEdgesTrunkbasesettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTelephonyProvidersEdgesTrunkbasesettingsResult> {
    return pulumi.output(args).apply((a: any) => getTelephonyProvidersEdgesTrunkbasesettings(a, opts))
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesTrunkbasesettings.
 */
export interface GetTelephonyProvidersEdgesTrunkbasesettingsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
