// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkmanagerSite(args: GetNetworkmanagerSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkmanagerSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkmanagerSite:getNetworkmanagerSite", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkmanagerSite.
 */
export interface GetNetworkmanagerSiteArgs {
    id: string;
}

/**
 * A collection of values returned by getNetworkmanagerSite.
 */
export interface GetNetworkmanagerSiteResult {
    readonly createdAt: string;
    readonly description: string;
    readonly globalNetworkId: string;
    readonly id: string;
    readonly location: outputs.GetNetworkmanagerSiteLocation;
    readonly siteArn: string;
    readonly siteId: string;
    readonly state: string;
    readonly tags: outputs.GetNetworkmanagerSiteTag[];
}
export function getNetworkmanagerSiteOutput(args: GetNetworkmanagerSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkmanagerSiteResult> {
    return pulumi.output(args).apply((a: any) => getNetworkmanagerSite(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkmanagerSite.
 */
export interface GetNetworkmanagerSiteOutputArgs {
    id: pulumi.Input<string>;
}
