// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWaasWaasPolicies(args: GetWaasWaasPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetWaasWaasPoliciesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getWaasWaasPolicies:getWaasWaasPolicies", {
        "compartmentId": args.compartmentId,
        "displayNames": args.displayNames,
        "filters": args.filters,
        "id": args.id,
        "ids": args.ids,
        "states": args.states,
        "timeCreatedGreaterThanOrEqualTo": args.timeCreatedGreaterThanOrEqualTo,
        "timeCreatedLessThan": args.timeCreatedLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWaasWaasPolicies.
 */
export interface GetWaasWaasPoliciesArgs {
    compartmentId: string;
    displayNames?: string[];
    filters?: inputs.GetWaasWaasPoliciesFilter[];
    id?: string;
    ids?: string[];
    states?: string[];
    timeCreatedGreaterThanOrEqualTo?: string;
    timeCreatedLessThan?: string;
}

/**
 * A collection of values returned by getWaasWaasPolicies.
 */
export interface GetWaasWaasPoliciesResult {
    readonly compartmentId: string;
    readonly displayNames?: string[];
    readonly filters?: outputs.GetWaasWaasPoliciesFilter[];
    readonly id: string;
    readonly ids?: string[];
    readonly states?: string[];
    readonly timeCreatedGreaterThanOrEqualTo?: string;
    readonly timeCreatedLessThan?: string;
    readonly waasPolicies: outputs.GetWaasWaasPoliciesWaasPolicy[];
}
export function getWaasWaasPoliciesOutput(args: GetWaasWaasPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWaasWaasPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getWaasWaasPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getWaasWaasPolicies.
 */
export interface GetWaasWaasPoliciesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayNames?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetWaasWaasPoliciesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    states?: pulumi.Input<pulumi.Input<string>[]>;
    timeCreatedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeCreatedLessThan?: pulumi.Input<string>;
}
