// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMobileNetwork(args: GetMobileNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetMobileNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getMobileNetwork:getMobileNetwork", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMobileNetwork.
 */
export interface GetMobileNetworkArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetMobileNetworkTimeouts;
}

/**
 * A collection of values returned by getMobileNetwork.
 */
export interface GetMobileNetworkResult {
    readonly id: string;
    readonly location: string;
    readonly mobileCountryCode: string;
    readonly mobileNetworkCode: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly serviceKey: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetMobileNetworkTimeouts;
}
export function getMobileNetworkOutput(args: GetMobileNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMobileNetworkResult> {
    return pulumi.output(args).apply((a: any) => getMobileNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getMobileNetwork.
 */
export interface GetMobileNetworkOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetMobileNetworkTimeoutsArgs>;
}
