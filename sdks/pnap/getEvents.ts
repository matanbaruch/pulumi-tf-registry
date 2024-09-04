// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEvents(args?: GetEventsArgs, opts?: pulumi.InvokeOptions): Promise<GetEventsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pnap:index/getEvents:getEvents", {
        "events": args.events,
        "from": args.from,
        "id": args.id,
        "limit": args.limit,
        "order": args.order,
        "to": args.to,
        "uri": args.uri,
        "username": args.username,
        "verb": args.verb,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEvents.
 */
export interface GetEventsArgs {
    events?: inputs.GetEventsEvent[];
    from?: string;
    id?: string;
    limit?: number;
    order?: string;
    to?: string;
    uri?: string;
    username?: string;
    verb?: string;
}

/**
 * A collection of values returned by getEvents.
 */
export interface GetEventsResult {
    readonly events?: outputs.GetEventsEvent[];
    readonly from?: string;
    readonly id: string;
    readonly limit?: number;
    readonly order?: string;
    readonly to?: string;
    readonly uri?: string;
    readonly username?: string;
    readonly verb?: string;
}
export function getEventsOutput(args?: GetEventsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventsResult> {
    return pulumi.output(args).apply((a: any) => getEvents(a, opts))
}

/**
 * A collection of arguments for invoking getEvents.
 */
export interface GetEventsOutputArgs {
    events?: pulumi.Input<pulumi.Input<inputs.GetEventsEventArgs>[]>;
    from?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    order?: pulumi.Input<string>;
    to?: pulumi.Input<string>;
    uri?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    verb?: pulumi.Input<string>;
}
