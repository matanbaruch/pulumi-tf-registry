// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppconfigConfigurationProfile(args: GetAppconfigConfigurationProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAppconfigConfigurationProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAppconfigConfigurationProfile:getAppconfigConfigurationProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppconfigConfigurationProfile.
 */
export interface GetAppconfigConfigurationProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getAppconfigConfigurationProfile.
 */
export interface GetAppconfigConfigurationProfileResult {
    readonly applicationId: string;
    readonly configurationProfileId: string;
    readonly description: string;
    readonly id: string;
    readonly kmsKeyArn: string;
    readonly kmsKeyIdentifier: string;
    readonly locationUri: string;
    readonly name: string;
    readonly retrievalRoleArn: string;
    readonly tags: outputs.GetAppconfigConfigurationProfileTag[];
    readonly type: string;
    readonly validators: outputs.GetAppconfigConfigurationProfileValidator[];
}
export function getAppconfigConfigurationProfileOutput(args: GetAppconfigConfigurationProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppconfigConfigurationProfileResult> {
    return pulumi.output(args).apply((a: any) => getAppconfigConfigurationProfile(a, opts))
}

/**
 * A collection of arguments for invoking getAppconfigConfigurationProfile.
 */
export interface GetAppconfigConfigurationProfileOutputArgs {
    id: pulumi.Input<string>;
}
