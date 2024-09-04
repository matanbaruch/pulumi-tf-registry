// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVmConfig(args: GetVmConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetVmConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanixkps:index/getVmConfig:getVmConfig", {
        "id": args.id,
        "publicIpAddress": args.publicIpAddress,
        "serialNumber": args.serialNumber,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVmConfig.
 */
export interface GetVmConfigArgs {
    id?: string;
    publicIpAddress: string;
    serialNumber?: string;
}

/**
 * A collection of values returned by getVmConfig.
 */
export interface GetVmConfigResult {
    readonly id: string;
    readonly publicIpAddress: string;
    readonly serialNumber: string;
}
export function getVmConfigOutput(args: GetVmConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmConfigResult> {
    return pulumi.output(args).apply((a: any) => getVmConfig(a, opts))
}

/**
 * A collection of arguments for invoking getVmConfig.
 */
export interface GetVmConfigOutputArgs {
    id?: pulumi.Input<string>;
    publicIpAddress: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
}
