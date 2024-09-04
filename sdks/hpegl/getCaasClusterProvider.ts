// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCaasClusterProvider(args: GetCaasClusterProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetCaasClusterProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hpegl:index/getCaasClusterProvider:getCaasClusterProvider", {
        "name": args.name,
        "siteId": args.siteId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCaasClusterProvider.
 */
export interface GetCaasClusterProviderArgs {
    name: string;
    siteId: string;
}

/**
 * A collection of values returned by getCaasClusterProvider.
 */
export interface GetCaasClusterProviderResult {
    readonly availableCapacities: outputs.GetCaasClusterProviderAvailableCapacity[];
    readonly createdDate: string;
    readonly health: string;
    readonly id: string;
    readonly kubernetesVersions: string[];
    readonly lastUpdateDate: string;
    readonly licenseInfos: outputs.GetCaasClusterProviderLicenseInfo[];
    readonly minMasterSizes: outputs.GetCaasClusterProviderMinMasterSize[];
    readonly minWorkerSizes: outputs.GetCaasClusterProviderMinWorkerSize[];
    readonly name: string;
    readonly siteId: string;
    readonly state: string;
    readonly storageClasses: outputs.GetCaasClusterProviderStorageClass[];
}
export function getCaasClusterProviderOutput(args: GetCaasClusterProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCaasClusterProviderResult> {
    return pulumi.output(args).apply((a: any) => getCaasClusterProvider(a, opts))
}

/**
 * A collection of arguments for invoking getCaasClusterProvider.
 */
export interface GetCaasClusterProviderOutputArgs {
    name: pulumi.Input<string>;
    siteId: pulumi.Input<string>;
}
