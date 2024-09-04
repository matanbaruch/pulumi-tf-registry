// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServers(args?: GetServersArgs, opts?: pulumi.InvokeOptions): Promise<GetServersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("seeweb:index/getServers:getServers", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersArgs {
    id?: string;
}

/**
 * A collection of values returned by getServers.
 */
export interface GetServersResult {
    readonly id: string;
    readonly servers: outputs.GetServersServer[];
}
export function getServersOutput(args?: GetServersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServersResult> {
    return pulumi.output(args).apply((a: any) => getServers(a, opts))
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersOutputArgs {
    id?: pulumi.Input<string>;
}
