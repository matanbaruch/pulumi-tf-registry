// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEdgeworkersPropertyRules(args: GetEdgeworkersPropertyRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeworkersPropertyRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getEdgeworkersPropertyRules:getEdgeworkersPropertyRules", {
        "edgeworkerId": args.edgeworkerId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEdgeworkersPropertyRules.
 */
export interface GetEdgeworkersPropertyRulesArgs {
    edgeworkerId: number;
    id?: string;
}

/**
 * A collection of values returned by getEdgeworkersPropertyRules.
 */
export interface GetEdgeworkersPropertyRulesResult {
    readonly edgeworkerId: number;
    readonly id: string;
    readonly json: string;
}
export function getEdgeworkersPropertyRulesOutput(args: GetEdgeworkersPropertyRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEdgeworkersPropertyRulesResult> {
    return pulumi.output(args).apply((a: any) => getEdgeworkersPropertyRules(a, opts))
}

/**
 * A collection of arguments for invoking getEdgeworkersPropertyRules.
 */
export interface GetEdgeworkersPropertyRulesOutputArgs {
    edgeworkerId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
