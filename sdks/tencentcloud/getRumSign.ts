// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRumSign(args?: GetRumSignArgs, opts?: pulumi.InvokeOptions): Promise<GetRumSignResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getRumSign:getRumSign", {
        "fileType": args.fileType,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "timeout": args.timeout,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRumSign.
 */
export interface GetRumSignArgs {
    fileType?: number;
    id?: string;
    resultOutputFile?: string;
    timeout?: number;
}

/**
 * A collection of values returned by getRumSign.
 */
export interface GetRumSignResult {
    readonly expiredTime: number;
    readonly fileType?: number;
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly secretId: string;
    readonly secretKey: string;
    readonly sessionToken: string;
    readonly startTime: number;
    readonly timeout?: number;
}
export function getRumSignOutput(args?: GetRumSignOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRumSignResult> {
    return pulumi.output(args).apply((a: any) => getRumSign(a, opts))
}

/**
 * A collection of arguments for invoking getRumSign.
 */
export interface GetRumSignOutputArgs {
    fileType?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
}
