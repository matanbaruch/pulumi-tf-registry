// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpc(args?: GetVpcArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getVpc:getVpc", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpc.
 */
export interface GetVpcArgs {
    filters?: inputs.GetVpcFilter[];
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getVpc.
 */
export interface GetVpcResult {
    readonly defaultAccessControlGroupNo: string;
    readonly defaultNetworkAclNo: string;
    readonly defaultPrivateRouteTableNo: string;
    readonly defaultPublicRouteTableNo: string;
    readonly filters?: outputs.GetVpcFilter[];
    readonly id: string;
    readonly ipv4CidrBlock: string;
    readonly name: string;
    readonly vpcNo: string;
}
export function getVpcOutput(args?: GetVpcOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcResult> {
    return pulumi.output(args).apply((a: any) => getVpc(a, opts))
}

/**
 * A collection of arguments for invoking getVpc.
 */
export interface GetVpcOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetVpcFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
