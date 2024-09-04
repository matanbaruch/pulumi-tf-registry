// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPasswordPolicy(args: GetPasswordPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPasswordPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getPasswordPolicy:getPasswordPolicy", {
        "environmentId": args.environmentId,
        "name": args.name,
        "passwordPolicyId": args.passwordPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPasswordPolicy.
 */
export interface GetPasswordPolicyArgs {
    environmentId: string;
    name?: string;
    passwordPolicyId?: string;
}

/**
 * A collection of values returned by getPasswordPolicy.
 */
export interface GetPasswordPolicyResult {
    readonly default: boolean;
    readonly description: string;
    readonly environmentId: string;
    readonly excludesCommonlyUsedPasswords: boolean;
    readonly excludesProfileData: boolean;
    readonly history: outputs.GetPasswordPolicyHistory;
    readonly id: string;
    readonly length: outputs.GetPasswordPolicyLength;
    readonly lockout: outputs.GetPasswordPolicyLockout;
    readonly maxRepeatedCharacters: number;
    readonly minCharacters: outputs.GetPasswordPolicyMinCharacters;
    readonly minComplexity: number;
    readonly minUniqueCharacters: number;
    readonly name?: string;
    readonly notSimilarToCurrent: boolean;
    readonly passwordAgeMax: number;
    readonly passwordAgeMin: number;
    readonly passwordPolicyId?: string;
    readonly populationCount: number;
}
export function getPasswordPolicyOutput(args: GetPasswordPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPasswordPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPasswordPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getPasswordPolicy.
 */
export interface GetPasswordPolicyOutputArgs {
    environmentId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    passwordPolicyId?: pulumi.Input<string>;
}
