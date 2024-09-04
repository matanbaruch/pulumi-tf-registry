// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIpRanges(args?: GetIpRangesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpRangesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getIpRanges:getIpRanges", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpRanges.
 */
export interface GetIpRangesArgs {
    id?: string;
}

/**
 * A collection of values returned by getIpRanges.
 */
export interface GetIpRangesResult {
    readonly actions: string[];
    readonly actionsIpv4s: string[];
    readonly actionsIpv6s: string[];
    readonly apiIpv4s: string[];
    readonly apiIpv6s: string[];
    readonly apis: string[];
    readonly dependabotIpv4s: string[];
    readonly dependabotIpv6s: string[];
    readonly dependabots: string[];
    readonly gitIpv4s: string[];
    readonly gitIpv6s: string[];
    readonly gits: string[];
    readonly hooks: string[];
    readonly hooksIpv4s: string[];
    readonly hooksIpv6s: string[];
    readonly id: string;
    readonly importerIpv4s: string[];
    readonly importerIpv6s: string[];
    readonly importers: string[];
    readonly packages: string[];
    readonly packagesIpv4s: string[];
    readonly packagesIpv6s: string[];
    readonly pages: string[];
    readonly pagesIpv4s: string[];
    readonly pagesIpv6s: string[];
    readonly webIpv4s: string[];
    readonly webIpv6s: string[];
    readonly webs: string[];
}
export function getIpRangesOutput(args?: GetIpRangesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpRangesResult> {
    return pulumi.output(args).apply((a: any) => getIpRanges(a, opts))
}

/**
 * A collection of arguments for invoking getIpRanges.
 */
export interface GetIpRangesOutputArgs {
    id?: pulumi.Input<string>;
}
