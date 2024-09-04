// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFlowSamplerMap(args: GetFlowSamplerMapArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowSamplerMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getFlowSamplerMap:getFlowSamplerMap", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFlowSamplerMap.
 */
export interface GetFlowSamplerMapArgs {
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getFlowSamplerMap.
 */
export interface GetFlowSamplerMapResult {
    readonly device?: string;
    readonly id: string;
    readonly name: string;
    readonly outOf: number;
    readonly random: number;
}
export function getFlowSamplerMapOutput(args: GetFlowSamplerMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowSamplerMapResult> {
    return pulumi.output(args).apply((a: any) => getFlowSamplerMap(a, opts))
}

/**
 * A collection of arguments for invoking getFlowSamplerMap.
 */
export interface GetFlowSamplerMapOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
