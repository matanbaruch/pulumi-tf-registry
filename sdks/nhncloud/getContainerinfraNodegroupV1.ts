// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getContainerinfraNodegroupV1(args: GetContainerinfraNodegroupV1Args, opts?: pulumi.InvokeOptions): Promise<GetContainerinfraNodegroupV1Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nhncloud:index/getContainerinfraNodegroupV1:getContainerinfraNodegroupV1", {
        "clusterId": args.clusterId,
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerinfraNodegroupV1.
 */
export interface GetContainerinfraNodegroupV1Args {
    clusterId: string;
    id?: string;
    name?: string;
    region?: string;
}

/**
 * A collection of values returned by getContainerinfraNodegroupV1.
 */
export interface GetContainerinfraNodegroupV1Result {
    readonly clusterId: string;
    readonly createdAt: string;
    readonly dockerVolumeSize: number;
    readonly flavor: string;
    readonly id: string;
    readonly image: string;
    readonly labels: {[key: string]: string};
    readonly maxNodeCount: number;
    readonly minNodeCount: number;
    readonly name: string;
    readonly nodeCount: number;
    readonly projectId: string;
    readonly region: string;
    readonly role: string;
    readonly updatedAt: string;
}
export function getContainerinfraNodegroupV1Output(args: GetContainerinfraNodegroupV1OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerinfraNodegroupV1Result> {
    return pulumi.output(args).apply((a: any) => getContainerinfraNodegroupV1(a, opts))
}

/**
 * A collection of arguments for invoking getContainerinfraNodegroupV1.
 */
export interface GetContainerinfraNodegroupV1OutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
