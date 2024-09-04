// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkingQosPolicyV2(args?: GetNetworkingQosPolicyV2Args, opts?: pulumi.InvokeOptions): Promise<GetNetworkingQosPolicyV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nhncloud:index/getNetworkingQosPolicyV2:getNetworkingQosPolicyV2", {
        "description": args.description,
        "id": args.id,
        "isDefault": args.isDefault,
        "name": args.name,
        "projectId": args.projectId,
        "region": args.region,
        "shared": args.shared,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkingQosPolicyV2.
 */
export interface GetNetworkingQosPolicyV2Args {
    description?: string;
    id?: string;
    isDefault?: boolean;
    name?: string;
    projectId?: string;
    region?: string;
    shared?: boolean;
    tags?: string[];
}

/**
 * A collection of values returned by getNetworkingQosPolicyV2.
 */
export interface GetNetworkingQosPolicyV2Result {
    readonly allTags: string[];
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly isDefault: boolean;
    readonly name: string;
    readonly projectId: string;
    readonly region: string;
    readonly revisionNumber: number;
    readonly shared: boolean;
    readonly tags?: string[];
    readonly updatedAt: string;
}
export function getNetworkingQosPolicyV2Output(args?: GetNetworkingQosPolicyV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkingQosPolicyV2Result> {
    return pulumi.output(args).apply((a: any) => getNetworkingQosPolicyV2(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkingQosPolicyV2.
 */
export interface GetNetworkingQosPolicyV2OutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    shared?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
