// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFileBlockingProfile(args: GetFileBlockingProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetFileBlockingProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getFileBlockingProfile:getFileBlockingProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFileBlockingProfile.
 */
export interface GetFileBlockingProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getFileBlockingProfile.
 */
export interface GetFileBlockingProfileResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly rules: outputs.GetFileBlockingProfileRule[];
    readonly tfid: string;
}
export function getFileBlockingProfileOutput(args: GetFileBlockingProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileBlockingProfileResult> {
    return pulumi.output(args).apply((a: any) => getFileBlockingProfile(a, opts))
}

/**
 * A collection of arguments for invoking getFileBlockingProfile.
 */
export interface GetFileBlockingProfileOutputArgs {
    id: pulumi.Input<string>;
}
