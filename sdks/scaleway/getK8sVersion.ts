// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getK8sVersion(args: GetK8sVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetK8sVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getK8sVersion:getK8sVersion", {
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getK8sVersion.
 */
export interface GetK8sVersionArgs {
    id?: string;
    name: string;
    region?: string;
}

/**
 * A collection of values returned by getK8sVersion.
 */
export interface GetK8sVersionResult {
    readonly availableCnis: string[];
    readonly availableContainerRuntimes: string[];
    readonly availableFeatureGates: string[];
    readonly id: string;
    readonly name: string;
    readonly region: string;
}
export function getK8sVersionOutput(args: GetK8sVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetK8sVersionResult> {
    return pulumi.output(args).apply((a: any) => getK8sVersion(a, opts))
}

/**
 * A collection of arguments for invoking getK8sVersion.
 */
export interface GetK8sVersionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
