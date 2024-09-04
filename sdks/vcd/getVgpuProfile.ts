// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVgpuProfile(args: GetVgpuProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetVgpuProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getVgpuProfile:getVgpuProfile", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVgpuProfile.
 */
export interface GetVgpuProfileArgs {
    name: string;
}

/**
 * A collection of values returned by getVgpuProfile.
 */
export interface GetVgpuProfileResult {
    readonly id: string;
    readonly instructions: string;
    readonly name: string;
    readonly tenantFacingName: string;
}
export function getVgpuProfileOutput(args: GetVgpuProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVgpuProfileResult> {
    return pulumi.output(args).apply((a: any) => getVgpuProfile(a, opts))
}

/**
 * A collection of arguments for invoking getVgpuProfile.
 */
export interface GetVgpuProfileOutputArgs {
    name: pulumi.Input<string>;
}
