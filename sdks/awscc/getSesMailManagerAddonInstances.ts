// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSesMailManagerAddonInstances(opts?: pulumi.InvokeOptions): Promise<GetSesMailManagerAddonInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSesMailManagerAddonInstances:getSesMailManagerAddonInstances", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSesMailManagerAddonInstances.
 */
export interface GetSesMailManagerAddonInstancesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSesMailManagerAddonInstancesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSesMailManagerAddonInstancesResult> {
    return pulumi.output(getSesMailManagerAddonInstances(opts))
}
