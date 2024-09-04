// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getExternalNetworkV2(args: GetExternalNetworkV2Args, opts?: pulumi.InvokeOptions): Promise<GetExternalNetworkV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getExternalNetworkV2:getExternalNetworkV2", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExternalNetworkV2.
 */
export interface GetExternalNetworkV2Args {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getExternalNetworkV2.
 */
export interface GetExternalNetworkV2Result {
    readonly dedicatedOrgId: string;
    readonly description: string;
    readonly id: string;
    readonly ipScopes: outputs.GetExternalNetworkV2IpScope[];
    readonly name: string;
    readonly natAndFirewallServiceIntention: string;
    readonly nsxtNetworks: outputs.GetExternalNetworkV2NsxtNetwork[];
    readonly routeAdvertisementIntention: string;
    readonly useIpSpaces: boolean;
    readonly vsphereNetworks: outputs.GetExternalNetworkV2VsphereNetwork[];
}
export function getExternalNetworkV2Output(args: GetExternalNetworkV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExternalNetworkV2Result> {
    return pulumi.output(args).apply((a: any) => getExternalNetworkV2(a, opts))
}

/**
 * A collection of arguments for invoking getExternalNetworkV2.
 */
export interface GetExternalNetworkV2OutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
