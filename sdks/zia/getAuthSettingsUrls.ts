// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAuthSettingsUrls(args?: GetAuthSettingsUrlsArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthSettingsUrlsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getAuthSettingsUrls:getAuthSettingsUrls", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuthSettingsUrls.
 */
export interface GetAuthSettingsUrlsArgs {
    id?: string;
}

/**
 * A collection of values returned by getAuthSettingsUrls.
 */
export interface GetAuthSettingsUrlsResult {
    readonly id: string;
    readonly urls: string[];
}
export function getAuthSettingsUrlsOutput(args?: GetAuthSettingsUrlsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthSettingsUrlsResult> {
    return pulumi.output(args).apply((a: any) => getAuthSettingsUrls(a, opts))
}

/**
 * A collection of arguments for invoking getAuthSettingsUrls.
 */
export interface GetAuthSettingsUrlsOutputArgs {
    id?: pulumi.Input<string>;
}
