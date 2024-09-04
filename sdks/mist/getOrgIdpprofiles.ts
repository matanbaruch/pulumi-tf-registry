// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOrgIdpprofiles(args: GetOrgIdpprofilesArgs, opts?: pulumi.InvokeOptions): Promise<GetOrgIdpprofilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mist:index/getOrgIdpprofiles:getOrgIdpprofiles", {
        "orgId": args.orgId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrgIdpprofiles.
 */
export interface GetOrgIdpprofilesArgs {
    orgId: string;
}

/**
 * A collection of values returned by getOrgIdpprofiles.
 */
export interface GetOrgIdpprofilesResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly orgId: string;
    readonly orgIdpprofiles: outputs.GetOrgIdpprofilesOrgIdpprofile[];
}
export function getOrgIdpprofilesOutput(args: GetOrgIdpprofilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrgIdpprofilesResult> {
    return pulumi.output(args).apply((a: any) => getOrgIdpprofiles(a, opts))
}

/**
 * A collection of arguments for invoking getOrgIdpprofiles.
 */
export interface GetOrgIdpprofilesOutputArgs {
    orgId: pulumi.Input<string>;
}
