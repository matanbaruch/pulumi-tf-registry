// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAwsVpcPeersV2(args?: GetAwsVpcPeersV2Args, opts?: pulumi.InvokeOptions): Promise<GetAwsVpcPeersV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("instaclustr:index/getAwsVpcPeersV2:getAwsVpcPeersV2", {
        "accountId": args.accountId,
        "filters": args.filters,
        "id": args.id,
        "peeringRequests": args.peeringRequests,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAwsVpcPeersV2.
 */
export interface GetAwsVpcPeersV2Args {
    accountId?: string;
    filters?: inputs.GetAwsVpcPeersV2Filter[];
    id?: string;
    peeringRequests?: inputs.GetAwsVpcPeersV2PeeringRequest[];
}

/**
 * A collection of values returned by getAwsVpcPeersV2.
 */
export interface GetAwsVpcPeersV2Result {
    readonly accountId: string;
    readonly filters?: outputs.GetAwsVpcPeersV2Filter[];
    readonly id: string;
    readonly peeringRequests?: outputs.GetAwsVpcPeersV2PeeringRequest[];
}
export function getAwsVpcPeersV2Output(args?: GetAwsVpcPeersV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwsVpcPeersV2Result> {
    return pulumi.output(args).apply((a: any) => getAwsVpcPeersV2(a, opts))
}

/**
 * A collection of arguments for invoking getAwsVpcPeersV2.
 */
export interface GetAwsVpcPeersV2OutputArgs {
    accountId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAwsVpcPeersV2FilterArgs>[]>;
    id?: pulumi.Input<string>;
    peeringRequests?: pulumi.Input<pulumi.Input<inputs.GetAwsVpcPeersV2PeeringRequestArgs>[]>;
}
