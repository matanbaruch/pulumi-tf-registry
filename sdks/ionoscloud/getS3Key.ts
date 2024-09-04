// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getS3Key(args: GetS3KeyArgs, opts?: pulumi.InvokeOptions): Promise<GetS3KeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getS3Key:getS3Key", {
        "active": args.active,
        "id": args.id,
        "timeouts": args.timeouts,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getS3Key.
 */
export interface GetS3KeyArgs {
    active?: boolean;
    id?: string;
    timeouts?: inputs.GetS3KeyTimeouts;
    userId: string;
}

/**
 * A collection of values returned by getS3Key.
 */
export interface GetS3KeyResult {
    readonly active?: boolean;
    readonly id?: string;
    readonly secretKey: string;
    readonly timeouts?: outputs.GetS3KeyTimeouts;
    readonly userId: string;
}
export function getS3KeyOutput(args: GetS3KeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetS3KeyResult> {
    return pulumi.output(args).apply((a: any) => getS3Key(a, opts))
}

/**
 * A collection of arguments for invoking getS3Key.
 */
export interface GetS3KeyOutputArgs {
    active?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetS3KeyTimeoutsArgs>;
    userId: pulumi.Input<string>;
}
