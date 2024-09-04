// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53resolverFirewallDomainLists(opts?: pulumi.InvokeOptions): Promise<GetRoute53resolverFirewallDomainListsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRoute53resolverFirewallDomainLists:getRoute53resolverFirewallDomainLists", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getRoute53resolverFirewallDomainLists.
 */
export interface GetRoute53resolverFirewallDomainListsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getRoute53resolverFirewallDomainListsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53resolverFirewallDomainListsResult> {
    return pulumi.output(getRoute53resolverFirewallDomainLists(opts))
}
