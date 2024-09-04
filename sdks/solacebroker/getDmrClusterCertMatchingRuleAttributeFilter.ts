// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDmrClusterCertMatchingRuleAttributeFilter(args: GetDmrClusterCertMatchingRuleAttributeFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetDmrClusterCertMatchingRuleAttributeFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebroker:index/getDmrClusterCertMatchingRuleAttributeFilter:getDmrClusterCertMatchingRuleAttributeFilter", {
        "dmrClusterName": args.dmrClusterName,
        "filterName": args.filterName,
        "ruleName": args.ruleName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmrClusterCertMatchingRuleAttributeFilter.
 */
export interface GetDmrClusterCertMatchingRuleAttributeFilterArgs {
    dmrClusterName: string;
    filterName: string;
    ruleName: string;
}

/**
 * A collection of values returned by getDmrClusterCertMatchingRuleAttributeFilter.
 */
export interface GetDmrClusterCertMatchingRuleAttributeFilterResult {
    readonly attributeName: string;
    readonly attributeValue: string;
    readonly dmrClusterName: string;
    readonly filterName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ruleName: string;
}
export function getDmrClusterCertMatchingRuleAttributeFilterOutput(args: GetDmrClusterCertMatchingRuleAttributeFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmrClusterCertMatchingRuleAttributeFilterResult> {
    return pulumi.output(args).apply((a: any) => getDmrClusterCertMatchingRuleAttributeFilter(a, opts))
}

/**
 * A collection of arguments for invoking getDmrClusterCertMatchingRuleAttributeFilter.
 */
export interface GetDmrClusterCertMatchingRuleAttributeFilterOutputArgs {
    dmrClusterName: pulumi.Input<string>;
    filterName: pulumi.Input<string>;
    ruleName: pulumi.Input<string>;
}
