// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataAccessController(args: GetDataAccessControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetDataAccessControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("satori:index/getDataAccessController:getDataAccessController", {
        "cloudProvider": args.cloudProvider,
        "id": args.id,
        "region": args.region,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataAccessController.
 */
export interface GetDataAccessControllerArgs {
    cloudProvider?: string;
    id?: string;
    region?: string;
    type: string;
}

/**
 * A collection of values returned by getDataAccessController.
 */
export interface GetDataAccessControllerResult {
    readonly cloudProvider?: string;
    readonly id?: string;
    readonly ips: string[];
    readonly region?: string;
    readonly type: string;
}
export function getDataAccessControllerOutput(args: GetDataAccessControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataAccessControllerResult> {
    return pulumi.output(args).apply((a: any) => getDataAccessController(a, opts))
}

/**
 * A collection of arguments for invoking getDataAccessController.
 */
export interface GetDataAccessControllerOutputArgs {
    cloudProvider?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
