// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFlow(args: GetFlowArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getFlow:getFlow", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFlow.
 */
export interface GetFlowArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getFlow.
 */
export interface GetFlowResult {
    readonly id: string;
    readonly name: string;
}
export function getFlowOutput(args: GetFlowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowResult> {
    return pulumi.output(args).apply((a: any) => getFlow(a, opts))
}

/**
 * A collection of arguments for invoking getFlow.
 */
export interface GetFlowOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
