// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getGatewayPortForward(args: GetGatewayPortForwardArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayPortForwardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netskopebwan:index/getGatewayPortForward:getGatewayPortForward", {
        "biDirectional": args.biDirectional,
        "gatewayId": args.gatewayId,
        "id": args.id,
        "lanIp": args.lanIp,
        "lanPort": args.lanPort,
        "name": args.name,
        "publicIp": args.publicIp,
        "publicPort": args.publicPort,
        "upLinkIfName": args.upLinkIfName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGatewayPortForward.
 */
export interface GetGatewayPortForwardArgs {
    biDirectional?: boolean;
    gatewayId: string;
    id?: string;
    lanIp?: string;
    lanPort?: number;
    name: string;
    publicIp?: string;
    publicPort?: number;
    upLinkIfName?: string;
}

/**
 * A collection of values returned by getGatewayPortForward.
 */
export interface GetGatewayPortForwardResult {
    readonly biDirectional: boolean;
    readonly gatewayId: string;
    readonly id: string;
    readonly lanIp: string;
    readonly lanPort: number;
    readonly name: string;
    readonly publicIp: string;
    readonly publicPort: number;
    readonly upLinkIfName: string;
}
export function getGatewayPortForwardOutput(args: GetGatewayPortForwardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayPortForwardResult> {
    return pulumi.output(args).apply((a: any) => getGatewayPortForward(a, opts))
}

/**
 * A collection of arguments for invoking getGatewayPortForward.
 */
export interface GetGatewayPortForwardOutputArgs {
    biDirectional?: pulumi.Input<boolean>;
    gatewayId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    lanIp?: pulumi.Input<string>;
    lanPort?: pulumi.Input<number>;
    name: pulumi.Input<string>;
    publicIp?: pulumi.Input<string>;
    publicPort?: pulumi.Input<number>;
    upLinkIfName?: pulumi.Input<string>;
}
