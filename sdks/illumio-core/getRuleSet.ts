// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRuleSet(args: GetRuleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("illumio-core:index/getRuleSet:getRuleSet", {
        "href": args.href,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRuleSet.
 */
export interface GetRuleSetArgs {
    href: string;
    id?: string;
}

/**
 * A collection of values returned by getRuleSet.
 */
export interface GetRuleSetResult {
    readonly createdAt: string;
    readonly createdBy: {[key: string]: string};
    readonly deletedAt: string;
    readonly deletedBy: {[key: string]: string};
    readonly description: string;
    readonly enabled: boolean;
    readonly externalDataReference: string;
    readonly externalDataSet: string;
    readonly href: string;
    readonly id: string;
    readonly ipTablesRules: outputs.GetRuleSetIpTablesRule[];
    readonly name: string;
    readonly rules: outputs.GetRuleSetRule[];
    readonly scopes: outputs.GetRuleSetScope[];
    readonly updateType: string;
    readonly updatedAt: string;
    readonly updatedBy: {[key: string]: string};
}
export function getRuleSetOutput(args: GetRuleSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRuleSetResult> {
    return pulumi.output(args).apply((a: any) => getRuleSet(a, opts))
}

/**
 * A collection of arguments for invoking getRuleSet.
 */
export interface GetRuleSetOutputArgs {
    href: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
