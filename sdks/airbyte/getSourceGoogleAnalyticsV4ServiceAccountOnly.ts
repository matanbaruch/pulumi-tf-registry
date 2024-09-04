// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceGoogleAnalyticsV4ServiceAccountOnly(args: GetSourceGoogleAnalyticsV4ServiceAccountOnlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleAnalyticsV4ServiceAccountOnlyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGoogleAnalyticsV4ServiceAccountOnly:getSourceGoogleAnalyticsV4ServiceAccountOnly", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGoogleAnalyticsV4ServiceAccountOnly.
 */
export interface GetSourceGoogleAnalyticsV4ServiceAccountOnlyArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGoogleAnalyticsV4ServiceAccountOnly.
 */
export interface GetSourceGoogleAnalyticsV4ServiceAccountOnlyResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGoogleAnalyticsV4ServiceAccountOnlyOutput(args: GetSourceGoogleAnalyticsV4ServiceAccountOnlyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceGoogleAnalyticsV4ServiceAccountOnlyResult> {
    return pulumi.output(args).apply((a: any) => getSourceGoogleAnalyticsV4ServiceAccountOnly(a, opts))
}

/**
 * A collection of arguments for invoking getSourceGoogleAnalyticsV4ServiceAccountOnly.
 */
export interface GetSourceGoogleAnalyticsV4ServiceAccountOnlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
