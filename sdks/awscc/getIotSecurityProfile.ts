// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotSecurityProfile(args: GetIotSecurityProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetIotSecurityProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotSecurityProfile:getIotSecurityProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotSecurityProfile.
 */
export interface GetIotSecurityProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getIotSecurityProfile.
 */
export interface GetIotSecurityProfileResult {
    readonly additionalMetricsToRetainV2s: outputs.GetIotSecurityProfileAdditionalMetricsToRetainV2[];
    readonly alertTargets: {[key: string]: outputs.GetIotSecurityProfileAlertTargets};
    readonly behaviors: outputs.GetIotSecurityProfileBehavior[];
    readonly id: string;
    readonly metricsExportConfig: outputs.GetIotSecurityProfileMetricsExportConfig;
    readonly securityProfileArn: string;
    readonly securityProfileDescription: string;
    readonly securityProfileName: string;
    readonly tags: outputs.GetIotSecurityProfileTag[];
    readonly targetArns: string[];
}
export function getIotSecurityProfileOutput(args: GetIotSecurityProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotSecurityProfileResult> {
    return pulumi.output(args).apply((a: any) => getIotSecurityProfile(a, opts))
}

/**
 * A collection of arguments for invoking getIotSecurityProfile.
 */
export interface GetIotSecurityProfileOutputArgs {
    id: pulumi.Input<string>;
}
