// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterMulticastflow(args: GetRouterMulticastflowArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterMulticastflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getRouterMulticastflow:getRouterMulticastflow", {
        "id": args.id,
        "name": args.name,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterMulticastflow.
 */
export interface GetRouterMulticastflowArgs {
    id?: string;
    name: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getRouterMulticastflow.
 */
export interface GetRouterMulticastflowResult {
    readonly comments: string;
    readonly flows: outputs.GetRouterMulticastflowFlow[];
    readonly id: string;
    readonly name: string;
    readonly vdomparam?: string;
}
export function getRouterMulticastflowOutput(args: GetRouterMulticastflowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterMulticastflowResult> {
    return pulumi.output(args).apply((a: any) => getRouterMulticastflow(a, opts))
}

/**
 * A collection of arguments for invoking getRouterMulticastflow.
 */
export interface GetRouterMulticastflowOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
