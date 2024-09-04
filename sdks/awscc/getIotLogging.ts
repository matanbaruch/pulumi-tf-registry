// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotLogging(args: GetIotLoggingArgs, opts?: pulumi.InvokeOptions): Promise<GetIotLoggingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotLogging:getIotLogging", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotLogging.
 */
export interface GetIotLoggingArgs {
    id: string;
}

/**
 * A collection of values returned by getIotLogging.
 */
export interface GetIotLoggingResult {
    readonly accountId: string;
    readonly defaultLogLevel: string;
    readonly id: string;
    readonly roleArn: string;
}
export function getIotLoggingOutput(args: GetIotLoggingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotLoggingResult> {
    return pulumi.output(args).apply((a: any) => getIotLogging(a, opts))
}

/**
 * A collection of arguments for invoking getIotLogging.
 */
export interface GetIotLoggingOutputArgs {
    id: pulumi.Input<string>;
}
