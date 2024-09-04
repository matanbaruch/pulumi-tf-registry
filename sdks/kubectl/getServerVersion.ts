// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServerVersion(args?: GetServerVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetServerVersionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kubectl:index/getServerVersion:getServerVersion", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServerVersion.
 */
export interface GetServerVersionArgs {
    id?: string;
}

/**
 * A collection of values returned by getServerVersion.
 */
export interface GetServerVersionResult {
    readonly buildDate: string;
    readonly gitCommit: string;
    readonly gitVersion: string;
    readonly id: string;
    readonly major: string;
    readonly minor: string;
    readonly patch: string;
    readonly platform: string;
    readonly version: string;
}
export function getServerVersionOutput(args?: GetServerVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerVersionResult> {
    return pulumi.output(args).apply((a: any) => getServerVersion(a, opts))
}

/**
 * A collection of arguments for invoking getServerVersion.
 */
export interface GetServerVersionOutputArgs {
    id?: pulumi.Input<string>;
}
