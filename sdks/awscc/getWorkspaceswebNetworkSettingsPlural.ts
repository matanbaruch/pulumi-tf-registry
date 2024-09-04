// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkspaceswebNetworkSettingsPlural(opts?: pulumi.InvokeOptions): Promise<GetWorkspaceswebNetworkSettingsPluralResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getWorkspaceswebNetworkSettingsPlural:getWorkspaceswebNetworkSettingsPlural", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getWorkspaceswebNetworkSettingsPlural.
 */
export interface GetWorkspaceswebNetworkSettingsPluralResult {
    readonly id: string;
    readonly ids: string[];
}
export function getWorkspaceswebNetworkSettingsPluralOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceswebNetworkSettingsPluralResult> {
    return pulumi.output(getWorkspaceswebNetworkSettingsPlural(opts))
}
