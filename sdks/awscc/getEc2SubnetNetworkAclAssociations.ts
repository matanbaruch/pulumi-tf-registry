// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2SubnetNetworkAclAssociations(opts?: pulumi.InvokeOptions): Promise<GetEc2SubnetNetworkAclAssociationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2SubnetNetworkAclAssociations:getEc2SubnetNetworkAclAssociations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2SubnetNetworkAclAssociations.
 */
export interface GetEc2SubnetNetworkAclAssociationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2SubnetNetworkAclAssociationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2SubnetNetworkAclAssociationsResult> {
    return pulumi.output(getEc2SubnetNetworkAclAssociations(opts))
}
