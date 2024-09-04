// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTelephonyProvidersEdgesLinebasesettings(args: GetTelephonyProvidersEdgesLinebasesettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetTelephonyProvidersEdgesLinebasesettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getTelephonyProvidersEdgesLinebasesettings:getTelephonyProvidersEdgesLinebasesettings", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesLinebasesettings.
 */
export interface GetTelephonyProvidersEdgesLinebasesettingsArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getTelephonyProvidersEdgesLinebasesettings.
 */
export interface GetTelephonyProvidersEdgesLinebasesettingsResult {
    readonly id: string;
    readonly name: string;
}
export function getTelephonyProvidersEdgesLinebasesettingsOutput(args: GetTelephonyProvidersEdgesLinebasesettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTelephonyProvidersEdgesLinebasesettingsResult> {
    return pulumi.output(args).apply((a: any) => getTelephonyProvidersEdgesLinebasesettings(a, opts))
}

/**
 * A collection of arguments for invoking getTelephonyProvidersEdgesLinebasesettings.
 */
export interface GetTelephonyProvidersEdgesLinebasesettingsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
