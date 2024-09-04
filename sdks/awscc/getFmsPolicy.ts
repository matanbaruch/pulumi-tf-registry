// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFmsPolicy(args: GetFmsPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetFmsPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getFmsPolicy:getFmsPolicy", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFmsPolicy.
 */
export interface GetFmsPolicyArgs {
    id: string;
}

/**
 * A collection of values returned by getFmsPolicy.
 */
export interface GetFmsPolicyResult {
    readonly arn: string;
    readonly deleteAllPolicyResources: boolean;
    readonly excludeMap: outputs.GetFmsPolicyExcludeMap;
    readonly excludeResourceTags: boolean;
    readonly id: string;
    readonly includeMap: outputs.GetFmsPolicyIncludeMap;
    readonly policyDescription: string;
    readonly policyId: string;
    readonly policyName: string;
    readonly remediationEnabled: boolean;
    readonly resourceSetIds: string[];
    readonly resourceTags: outputs.GetFmsPolicyResourceTag[];
    readonly resourceType: string;
    readonly resourceTypeLists: string[];
    readonly resourcesCleanUp: boolean;
    readonly securityServicePolicyData: outputs.GetFmsPolicySecurityServicePolicyData;
    readonly tags: outputs.GetFmsPolicyTag[];
}
export function getFmsPolicyOutput(args: GetFmsPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFmsPolicyResult> {
    return pulumi.output(args).apply((a: any) => getFmsPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getFmsPolicy.
 */
export interface GetFmsPolicyOutputArgs {
    id: pulumi.Input<string>;
}
