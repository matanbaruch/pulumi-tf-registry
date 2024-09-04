// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpsecTunnel(args: GetIpsecTunnelArgs, opts?: pulumi.InvokeOptions): Promise<GetIpsecTunnelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getIpsecTunnel:getIpsecTunnel", {
        "folder": args.folder,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpsecTunnel.
 */
export interface GetIpsecTunnelArgs {
    folder?: string;
    id: string;
}

/**
 * A collection of values returned by getIpsecTunnel.
 */
export interface GetIpsecTunnelResult {
    readonly antiReplay: boolean;
    readonly autoKey: outputs.GetIpsecTunnelAutoKey;
    readonly copyTos: boolean;
    readonly enableGreEncapsulation: boolean;
    readonly folder?: string;
    readonly id: string;
    readonly name: string;
    readonly tfid: string;
    readonly tunnelMonitor: outputs.GetIpsecTunnelTunnelMonitor;
}
export function getIpsecTunnelOutput(args: GetIpsecTunnelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpsecTunnelResult> {
    return pulumi.output(args).apply((a: any) => getIpsecTunnel(a, opts))
}

/**
 * A collection of arguments for invoking getIpsecTunnel.
 */
export interface GetIpsecTunnelOutputArgs {
    folder?: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
