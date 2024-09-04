// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOrgNacrules(args: GetOrgNacrulesArgs, opts?: pulumi.InvokeOptions): Promise<GetOrgNacrulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mist:index/getOrgNacrules:getOrgNacrules", {
        "orgId": args.orgId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrgNacrules.
 */
export interface GetOrgNacrulesArgs {
    orgId: string;
}

/**
 * A collection of values returned by getOrgNacrules.
 */
export interface GetOrgNacrulesResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly orgId: string;
    readonly orgNacrules: outputs.GetOrgNacrulesOrgNacrule[];
}
export function getOrgNacrulesOutput(args: GetOrgNacrulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrgNacrulesResult> {
    return pulumi.output(args).apply((a: any) => getOrgNacrules(a, opts))
}

/**
 * A collection of arguments for invoking getOrgNacrules.
 */
export interface GetOrgNacrulesOutputArgs {
    orgId: pulumi.Input<string>;
}
