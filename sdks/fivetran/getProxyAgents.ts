// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProxyAgents(args?: GetProxyAgentsArgs, opts?: pulumi.InvokeOptions): Promise<GetProxyAgentsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fivetran:index/getProxyAgents:getProxyAgents", {
        "items": args.items,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProxyAgents.
 */
export interface GetProxyAgentsArgs {
    items?: inputs.GetProxyAgentsItem[];
}

/**
 * A collection of values returned by getProxyAgents.
 */
export interface GetProxyAgentsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly items?: outputs.GetProxyAgentsItem[];
}
export function getProxyAgentsOutput(args?: GetProxyAgentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProxyAgentsResult> {
    return pulumi.output(args).apply((a: any) => getProxyAgents(a, opts))
}

/**
 * A collection of arguments for invoking getProxyAgents.
 */
export interface GetProxyAgentsOutputArgs {
    items?: pulumi.Input<pulumi.Input<inputs.GetProxyAgentsItemArgs>[]>;
}
