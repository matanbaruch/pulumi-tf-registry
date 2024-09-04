// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOamLinks(args?: GetOamLinksArgs, opts?: pulumi.InvokeOptions): Promise<GetOamLinksResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getOamLinks:getOamLinks", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOamLinks.
 */
export interface GetOamLinksArgs {
    id?: string;
}

/**
 * A collection of values returned by getOamLinks.
 */
export interface GetOamLinksResult {
    readonly arns: string[];
    readonly id: string;
}
export function getOamLinksOutput(args?: GetOamLinksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOamLinksResult> {
    return pulumi.output(args).apply((a: any) => getOamLinks(a, opts))
}

/**
 * A collection of arguments for invoking getOamLinks.
 */
export interface GetOamLinksOutputArgs {
    id?: pulumi.Input<string>;
}
