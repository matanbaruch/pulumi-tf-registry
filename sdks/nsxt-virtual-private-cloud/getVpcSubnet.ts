// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcSubnet(args: GetVpcSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcSubnetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt-virtual-private-cloud:index/getVpcSubnet:getVpcSubnet", {
        "context": args.context,
        "displayName": args.displayName,
        "id": args.id,
        "nsxId": args.nsxId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcSubnet.
 */
export interface GetVpcSubnetArgs {
    context: inputs.GetVpcSubnetContext;
    displayName?: string;
    id?: string;
    nsxId?: string;
}

/**
 * A collection of values returned by getVpcSubnet.
 */
export interface GetVpcSubnetResult {
    readonly context: outputs.GetVpcSubnetContext;
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly nsxId: string;
    readonly path: string;
}
export function getVpcSubnetOutput(args: GetVpcSubnetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcSubnetResult> {
    return pulumi.output(args).apply((a: any) => getVpcSubnet(a, opts))
}

/**
 * A collection of arguments for invoking getVpcSubnet.
 */
export interface GetVpcSubnetOutputArgs {
    context: pulumi.Input<inputs.GetVpcSubnetContextArgs>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    nsxId?: pulumi.Input<string>;
}
