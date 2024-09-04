// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVersions(args?: GetVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetVersionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rhcs:index/getVersions:getVersions", {
        "order": args.order,
        "search": args.search,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVersions.
 */
export interface GetVersionsArgs {
    order?: string;
    search?: string;
}

/**
 * A collection of values returned by getVersions.
 */
export interface GetVersionsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly item: outputs.GetVersionsItem;
    readonly items: outputs.GetVersionsItem[];
    readonly order?: string;
    readonly search?: string;
}
export function getVersionsOutput(args?: GetVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVersionsResult> {
    return pulumi.output(args).apply((a: any) => getVersions(a, opts))
}

/**
 * A collection of arguments for invoking getVersions.
 */
export interface GetVersionsOutputArgs {
    order?: pulumi.Input<string>;
    search?: pulumi.Input<string>;
}
