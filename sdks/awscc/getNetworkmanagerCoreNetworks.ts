// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkmanagerCoreNetworks(opts?: pulumi.InvokeOptions): Promise<GetNetworkmanagerCoreNetworksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkmanagerCoreNetworks:getNetworkmanagerCoreNetworks", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getNetworkmanagerCoreNetworks.
 */
export interface GetNetworkmanagerCoreNetworksResult {
    readonly id: string;
    readonly ids: string[];
}
export function getNetworkmanagerCoreNetworksOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkmanagerCoreNetworksResult> {
    return pulumi.output(getNetworkmanagerCoreNetworks(opts))
}
