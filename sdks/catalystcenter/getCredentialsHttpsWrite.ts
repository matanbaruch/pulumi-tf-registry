// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCredentialsHttpsWrite(args?: GetCredentialsHttpsWriteArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialsHttpsWriteResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("catalystcenter:index/getCredentialsHttpsWrite:getCredentialsHttpsWrite", {
        "description": args.description,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCredentialsHttpsWrite.
 */
export interface GetCredentialsHttpsWriteArgs {
    description?: string;
    id?: string;
}

/**
 * A collection of values returned by getCredentialsHttpsWrite.
 */
export interface GetCredentialsHttpsWriteResult {
    readonly description: string;
    readonly id: string;
    readonly password: string;
    readonly port: number;
    readonly username: string;
}
export function getCredentialsHttpsWriteOutput(args?: GetCredentialsHttpsWriteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCredentialsHttpsWriteResult> {
    return pulumi.output(args).apply((a: any) => getCredentialsHttpsWrite(a, opts))
}

/**
 * A collection of arguments for invoking getCredentialsHttpsWrite.
 */
export interface GetCredentialsHttpsWriteOutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
