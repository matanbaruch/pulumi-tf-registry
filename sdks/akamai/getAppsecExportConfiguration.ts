// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppsecExportConfiguration(args: GetAppsecExportConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsecExportConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getAppsecExportConfiguration:getAppsecExportConfiguration", {
        "configId": args.configId,
        "id": args.id,
        "searches": args.searches,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsecExportConfiguration.
 */
export interface GetAppsecExportConfigurationArgs {
    configId: number;
    id?: string;
    searches?: string[];
    version: number;
}

/**
 * A collection of values returned by getAppsecExportConfiguration.
 */
export interface GetAppsecExportConfigurationResult {
    readonly configId: number;
    readonly id: string;
    readonly json: string;
    readonly outputText: string;
    readonly searches?: string[];
    readonly version: number;
}
export function getAppsecExportConfigurationOutput(args: GetAppsecExportConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsecExportConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getAppsecExportConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getAppsecExportConfiguration.
 */
export interface GetAppsecExportConfigurationOutputArgs {
    configId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    searches?: pulumi.Input<pulumi.Input<string>[]>;
    version: pulumi.Input<number>;
}
