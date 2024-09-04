// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getExternalNetwork(args: GetExternalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetExternalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getExternalNetwork:getExternalNetwork", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExternalNetwork.
 */
export interface GetExternalNetworkArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getExternalNetwork.
 */
export interface GetExternalNetworkResult {
    readonly description: string;
    readonly id: string;
    readonly ipScopes: outputs.GetExternalNetworkIpScope[];
    readonly name: string;
    readonly retainNetInfoAcrossDeployments: boolean;
    readonly vsphereNetworks: outputs.GetExternalNetworkVsphereNetwork[];
}
export function getExternalNetworkOutput(args: GetExternalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExternalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getExternalNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getExternalNetwork.
 */
export interface GetExternalNetworkOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
