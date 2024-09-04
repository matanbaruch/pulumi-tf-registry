// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPort(args: GetPortArgs, opts?: pulumi.InvokeOptions): Promise<GetPortResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netris:index/getPort:getPort", {
        "autoneg": args.autoneg,
        "breakout": args.breakout,
        "description": args.description,
        "extension": args.extension,
        "id": args.id,
        "mtu": args.mtu,
        "name": args.name,
        "speed": args.speed,
        "switchid": args.switchid,
        "tenantid": args.tenantid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPort.
 */
export interface GetPortArgs {
    autoneg?: string;
    breakout?: string;
    description?: string;
    extension?: {[key: string]: string};
    id?: string;
    mtu?: number;
    name: string;
    speed?: string;
    switchid?: number;
    tenantid?: number;
}

/**
 * A collection of values returned by getPort.
 */
export interface GetPortResult {
    readonly autoneg: string;
    readonly breakout: string;
    readonly description: string;
    readonly extension: {[key: string]: string};
    readonly id: string;
    readonly mtu: number;
    readonly name: string;
    readonly speed: string;
    readonly switchid: number;
    readonly tenantid: number;
}
export function getPortOutput(args: GetPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortResult> {
    return pulumi.output(args).apply((a: any) => getPort(a, opts))
}

/**
 * A collection of arguments for invoking getPort.
 */
export interface GetPortOutputArgs {
    autoneg?: pulumi.Input<string>;
    breakout?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    extension?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    name: pulumi.Input<string>;
    speed?: pulumi.Input<string>;
    switchid?: pulumi.Input<number>;
    tenantid?: pulumi.Input<number>;
}
