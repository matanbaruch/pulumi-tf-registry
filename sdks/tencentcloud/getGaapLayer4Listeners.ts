// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGaapLayer4Listeners(args: GetGaapLayer4ListenersArgs, opts?: pulumi.InvokeOptions): Promise<GetGaapLayer4ListenersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getGaapLayer4Listeners:getGaapLayer4Listeners", {
        "id": args.id,
        "listenerId": args.listenerId,
        "listenerName": args.listenerName,
        "port": args.port,
        "protocol": args.protocol,
        "proxyId": args.proxyId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGaapLayer4Listeners.
 */
export interface GetGaapLayer4ListenersArgs {
    id?: string;
    listenerId?: string;
    listenerName?: string;
    port?: number;
    protocol: string;
    proxyId?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getGaapLayer4Listeners.
 */
export interface GetGaapLayer4ListenersResult {
    readonly id: string;
    readonly listenerId?: string;
    readonly listenerName?: string;
    readonly listeners: outputs.GetGaapLayer4ListenersListener[];
    readonly port?: number;
    readonly protocol: string;
    readonly proxyId?: string;
    readonly resultOutputFile?: string;
}
export function getGaapLayer4ListenersOutput(args: GetGaapLayer4ListenersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGaapLayer4ListenersResult> {
    return pulumi.output(args).apply((a: any) => getGaapLayer4Listeners(a, opts))
}

/**
 * A collection of arguments for invoking getGaapLayer4Listeners.
 */
export interface GetGaapLayer4ListenersOutputArgs {
    id?: pulumi.Input<string>;
    listenerId?: pulumi.Input<string>;
    listenerName?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    proxyId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
