// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEventsRules(args: GetEventsRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetEventsRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getEventsRules:getEventsRules", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEventsRules.
 */
export interface GetEventsRulesArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetEventsRulesFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getEventsRules.
 */
export interface GetEventsRulesResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetEventsRulesFilter[];
    readonly id: string;
    readonly rules: outputs.GetEventsRulesRule[];
    readonly state?: string;
}
export function getEventsRulesOutput(args: GetEventsRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventsRulesResult> {
    return pulumi.output(args).apply((a: any) => getEventsRules(a, opts))
}

/**
 * A collection of arguments for invoking getEventsRules.
 */
export interface GetEventsRulesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetEventsRulesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
