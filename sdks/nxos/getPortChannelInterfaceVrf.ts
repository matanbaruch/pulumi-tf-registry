// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPortChannelInterfaceVrf(args: GetPortChannelInterfaceVrfArgs, opts?: pulumi.InvokeOptions): Promise<GetPortChannelInterfaceVrfResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getPortChannelInterfaceVrf:getPortChannelInterfaceVrf", {
        "device": args.device,
        "interfaceId": args.interfaceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPortChannelInterfaceVrf.
 */
export interface GetPortChannelInterfaceVrfArgs {
    device?: string;
    interfaceId: string;
}

/**
 * A collection of values returned by getPortChannelInterfaceVrf.
 */
export interface GetPortChannelInterfaceVrfResult {
    readonly device?: string;
    readonly id: string;
    readonly interfaceId: string;
    readonly vrfDn: string;
}
export function getPortChannelInterfaceVrfOutput(args: GetPortChannelInterfaceVrfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortChannelInterfaceVrfResult> {
    return pulumi.output(args).apply((a: any) => getPortChannelInterfaceVrf(a, opts))
}

/**
 * A collection of arguments for invoking getPortChannelInterfaceVrf.
 */
export interface GetPortChannelInterfaceVrfOutputArgs {
    device?: pulumi.Input<string>;
    interfaceId: pulumi.Input<string>;
}
