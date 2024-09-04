// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementProvisioningProfile(args?: GetManagementProvisioningProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementProvisioningProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementProvisioningProfile:getManagementProvisioningProfile", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementProvisioningProfile.
 */
export interface GetManagementProvisioningProfileArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementProvisioningProfile.
 */
export interface GetManagementProvisioningProfileResult {
    readonly configurationScript: {[key: string]: string};
    readonly dns: {[key: string]: string};
    readonly domainName: {[key: string]: string};
    readonly groups: outputs.GetManagementProvisioningProfileGroup[];
    readonly hosts: outputs.GetManagementProvisioningProfileHost[];
    readonly hotspots: outputs.GetManagementProvisioningProfileHotspot[];
    readonly id: string;
    readonly name?: string;
    readonly radii: outputs.GetManagementProvisioningProfileRadius[];
    readonly tags: string[];
    readonly type: string;
    readonly uid?: string;
}
export function getManagementProvisioningProfileOutput(args?: GetManagementProvisioningProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementProvisioningProfileResult> {
    return pulumi.output(args).apply((a: any) => getManagementProvisioningProfile(a, opts))
}

/**
 * A collection of arguments for invoking getManagementProvisioningProfile.
 */
export interface GetManagementProvisioningProfileOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
