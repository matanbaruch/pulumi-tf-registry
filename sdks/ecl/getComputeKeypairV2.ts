// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComputeKeypairV2(args: GetComputeKeypairV2Args, opts?: pulumi.InvokeOptions): Promise<GetComputeKeypairV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecl:index/getComputeKeypairV2:getComputeKeypairV2", {
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeKeypairV2.
 */
export interface GetComputeKeypairV2Args {
    id?: string;
    name: string;
    region?: string;
}

/**
 * A collection of values returned by getComputeKeypairV2.
 */
export interface GetComputeKeypairV2Result {
    readonly id: string;
    readonly name: string;
    readonly publicKey: string;
    readonly region: string;
}
export function getComputeKeypairV2Output(args: GetComputeKeypairV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeKeypairV2Result> {
    return pulumi.output(args).apply((a: any) => getComputeKeypairV2(a, opts))
}

/**
 * A collection of arguments for invoking getComputeKeypairV2.
 */
export interface GetComputeKeypairV2OutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
