// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLogDrain(args: GetLogDrainArgs, opts?: pulumi.InvokeOptions): Promise<GetLogDrainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vercel:index/getLogDrain:getLogDrain", {
        "endpoint": args.endpoint,
        "id": args.id,
        "teamId": args.teamId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLogDrain.
 */
export interface GetLogDrainArgs {
    endpoint: string;
    id: string;
    teamId?: string;
}

/**
 * A collection of values returned by getLogDrain.
 */
export interface GetLogDrainResult {
    readonly deliveryFormat: string;
    readonly endpoint: string;
    readonly environments: string[];
    readonly headers: {[key: string]: string};
    readonly id: string;
    readonly projectIds: string[];
    readonly samplingRate: number;
    readonly sources: string[];
    readonly teamId: string;
}
export function getLogDrainOutput(args: GetLogDrainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogDrainResult> {
    return pulumi.output(args).apply((a: any) => getLogDrain(a, opts))
}

/**
 * A collection of arguments for invoking getLogDrain.
 */
export interface GetLogDrainOutputArgs {
    endpoint: pulumi.Input<string>;
    id: pulumi.Input<string>;
    teamId?: pulumi.Input<string>;
}
