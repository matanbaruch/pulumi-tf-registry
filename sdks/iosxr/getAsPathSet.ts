// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAsPathSet(args: GetAsPathSetArgs, opts?: pulumi.InvokeOptions): Promise<GetAsPathSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getAsPathSet:getAsPathSet", {
        "device": args.device,
        "setName": args.setName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAsPathSet.
 */
export interface GetAsPathSetArgs {
    device?: string;
    setName: string;
}

/**
 * A collection of values returned by getAsPathSet.
 */
export interface GetAsPathSetResult {
    readonly device?: string;
    readonly id: string;
    readonly rpl: string;
    readonly setName: string;
}
export function getAsPathSetOutput(args: GetAsPathSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAsPathSetResult> {
    return pulumi.output(args).apply((a: any) => getAsPathSet(a, opts))
}

/**
 * A collection of arguments for invoking getAsPathSet.
 */
export interface GetAsPathSetOutputArgs {
    device?: pulumi.Input<string>;
    setName: pulumi.Input<string>;
}
