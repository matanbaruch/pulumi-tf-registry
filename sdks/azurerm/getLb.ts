// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLb(args: GetLbArgs, opts?: pulumi.InvokeOptions): Promise<GetLbResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getLb:getLb", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLb.
 */
export interface GetLbArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetLbTimeouts;
}

/**
 * A collection of values returned by getLb.
 */
export interface GetLbResult {
    readonly frontendIpConfigurations: outputs.GetLbFrontendIpConfiguration[];
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly privateIpAddress: string;
    readonly privateIpAddresses: string[];
    readonly resourceGroupName: string;
    readonly sku: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetLbTimeouts;
}
export function getLbOutput(args: GetLbOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLbResult> {
    return pulumi.output(args).apply((a: any) => getLb(a, opts))
}

/**
 * A collection of arguments for invoking getLb.
 */
export interface GetLbOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetLbTimeoutsArgs>;
}
