// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getQbusinessWebExperience(args: GetQbusinessWebExperienceArgs, opts?: pulumi.InvokeOptions): Promise<GetQbusinessWebExperienceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getQbusinessWebExperience:getQbusinessWebExperience", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQbusinessWebExperience.
 */
export interface GetQbusinessWebExperienceArgs {
    id: string;
}

/**
 * A collection of values returned by getQbusinessWebExperience.
 */
export interface GetQbusinessWebExperienceResult {
    readonly applicationId: string;
    readonly createdAt: string;
    readonly defaultEndpoint: string;
    readonly id: string;
    readonly identityProviderConfiguration: outputs.GetQbusinessWebExperienceIdentityProviderConfiguration;
    readonly roleArn: string;
    readonly samplePromptsControlMode: string;
    readonly status: string;
    readonly subtitle: string;
    readonly tags: outputs.GetQbusinessWebExperienceTag[];
    readonly title: string;
    readonly updatedAt: string;
    readonly webExperienceArn: string;
    readonly webExperienceId: string;
    readonly welcomeMessage: string;
}
export function getQbusinessWebExperienceOutput(args: GetQbusinessWebExperienceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQbusinessWebExperienceResult> {
    return pulumi.output(args).apply((a: any) => getQbusinessWebExperience(a, opts))
}

/**
 * A collection of arguments for invoking getQbusinessWebExperience.
 */
export interface GetQbusinessWebExperienceOutputArgs {
    id: pulumi.Input<string>;
}
