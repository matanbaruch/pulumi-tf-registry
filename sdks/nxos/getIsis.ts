// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIsis(args?: GetIsisArgs, opts?: pulumi.InvokeOptions): Promise<GetIsisResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getIsis:getIsis", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIsis.
 */
export interface GetIsisArgs {
    device?: string;
}

/**
 * A collection of values returned by getIsis.
 */
export interface GetIsisResult {
    readonly adminState: string;
    readonly device?: string;
    readonly id: string;
}
export function getIsisOutput(args?: GetIsisOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIsisResult> {
    return pulumi.output(args).apply((a: any) => getIsis(a, opts))
}

/**
 * A collection of arguments for invoking getIsis.
 */
export interface GetIsisOutputArgs {
    device?: pulumi.Input<string>;
}
