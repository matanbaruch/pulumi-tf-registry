// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudRouterBgpSession(args: GetCloudRouterBgpSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudRouterBgpSessionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("packetfabric:index/getCloudRouterBgpSession:getCloudRouterBgpSession", {
        "circuitId": args.circuitId,
        "connectionId": args.connectionId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudRouterBgpSession.
 */
export interface GetCloudRouterBgpSessionArgs {
    circuitId: string;
    connectionId: string;
    id?: string;
}

/**
 * A collection of values returned by getCloudRouterBgpSession.
 */
export interface GetCloudRouterBgpSessionResult {
    readonly bgpSessions: outputs.GetCloudRouterBgpSessionBgpSession[];
    readonly circuitId: string;
    readonly connectionId: string;
    readonly id: string;
}
export function getCloudRouterBgpSessionOutput(args: GetCloudRouterBgpSessionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudRouterBgpSessionResult> {
    return pulumi.output(args).apply((a: any) => getCloudRouterBgpSession(a, opts))
}

/**
 * A collection of arguments for invoking getCloudRouterBgpSession.
 */
export interface GetCloudRouterBgpSessionOutputArgs {
    circuitId: pulumi.Input<string>;
    connectionId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
