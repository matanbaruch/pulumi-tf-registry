// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAlbListeners(args?: GetAlbListenersArgs, opts?: pulumi.InvokeOptions): Promise<GetAlbListenersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getAlbListeners:getAlbListeners", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "listenerIds": args.listenerIds,
        "listenerProtocol": args.listenerProtocol,
        "loadBalancerIds": args.loadBalancerIds,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlbListeners.
 */
export interface GetAlbListenersArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    listenerIds?: string[];
    listenerProtocol?: string;
    loadBalancerIds?: string[];
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getAlbListeners.
 */
export interface GetAlbListenersResult {
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly listenerIds?: string[];
    readonly listenerProtocol?: string;
    readonly listeners: outputs.GetAlbListenersListener[];
    readonly loadBalancerIds?: string[];
    readonly outputFile?: string;
    readonly status?: string;
}
export function getAlbListenersOutput(args?: GetAlbListenersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlbListenersResult> {
    return pulumi.output(args).apply((a: any) => getAlbListeners(a, opts))
}

/**
 * A collection of arguments for invoking getAlbListeners.
 */
export interface GetAlbListenersOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    listenerIds?: pulumi.Input<pulumi.Input<string>[]>;
    listenerProtocol?: pulumi.Input<string>;
    loadBalancerIds?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
