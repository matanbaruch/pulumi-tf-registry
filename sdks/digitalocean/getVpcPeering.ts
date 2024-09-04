// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVpcPeering(args?: GetVpcPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcPeeringResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("digitalocean:index/getVpcPeering:getVpcPeering", {
        "id": args.id,
        "name": args.name,
        "vpcIds": args.vpcIds,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcPeering.
 */
export interface GetVpcPeeringArgs {
    id?: string;
    name?: string;
    vpcIds?: string[];
}

/**
 * A collection of values returned by getVpcPeering.
 */
export interface GetVpcPeeringResult {
    readonly createdAt: string;
    readonly id: string;
    readonly name: string;
    readonly status: string;
    readonly vpcIds: string[];
}
export function getVpcPeeringOutput(args?: GetVpcPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcPeeringResult> {
    return pulumi.output(args).apply((a: any) => getVpcPeering(a, opts))
}

/**
 * A collection of arguments for invoking getVpcPeering.
 */
export interface GetVpcPeeringOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpcIds?: pulumi.Input<pulumi.Input<string>[]>;
}
