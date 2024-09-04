// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sakuracloud:index/getSubnet:getSubnet", {
        "id": args.id,
        "index": args.index,
        "internetId": args.internetId,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetArgs {
    id?: string;
    index: number;
    internetId: string;
    zone?: string;
}

/**
 * A collection of values returned by getSubnet.
 */
export interface GetSubnetResult {
    readonly id: string;
    readonly index: number;
    readonly internetId: string;
    readonly ipAddresses: string[];
    readonly maxIpAddress: string;
    readonly minIpAddress: string;
    readonly netmask: number;
    readonly networkAddress: string;
    readonly nextHop: string;
    readonly switchId: string;
    readonly zone: string;
}
export function getSubnetOutput(args: GetSubnetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubnetResult> {
    return pulumi.output(args).apply((a: any) => getSubnet(a, opts))
}

/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetOutputArgs {
    id?: pulumi.Input<string>;
    index: pulumi.Input<number>;
    internetId: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
