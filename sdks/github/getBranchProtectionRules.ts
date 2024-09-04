// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBranchProtectionRules(args: GetBranchProtectionRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetBranchProtectionRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getBranchProtectionRules:getBranchProtectionRules", {
        "id": args.id,
        "repository": args.repository,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBranchProtectionRules.
 */
export interface GetBranchProtectionRulesArgs {
    id?: string;
    repository: string;
}

/**
 * A collection of values returned by getBranchProtectionRules.
 */
export interface GetBranchProtectionRulesResult {
    readonly id: string;
    readonly repository: string;
    readonly rules: outputs.GetBranchProtectionRulesRule[];
}
export function getBranchProtectionRulesOutput(args: GetBranchProtectionRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBranchProtectionRulesResult> {
    return pulumi.output(args).apply((a: any) => getBranchProtectionRules(a, opts))
}

/**
 * A collection of arguments for invoking getBranchProtectionRules.
 */
export interface GetBranchProtectionRulesOutputArgs {
    id?: pulumi.Input<string>;
    repository: pulumi.Input<string>;
}
