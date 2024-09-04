// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFeatureFlagEnvironment(args: GetFeatureFlagEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetFeatureFlagEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("launchdarkly:index/getFeatureFlagEnvironment:getFeatureFlagEnvironment", {
        "envKey": args.envKey,
        "flagId": args.flagId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFeatureFlagEnvironment.
 */
export interface GetFeatureFlagEnvironmentArgs {
    envKey: string;
    flagId: string;
    id?: string;
}

/**
 * A collection of values returned by getFeatureFlagEnvironment.
 */
export interface GetFeatureFlagEnvironmentResult {
    readonly contextTargets: outputs.GetFeatureFlagEnvironmentContextTarget[];
    readonly envKey: string;
    readonly fallthroughs: outputs.GetFeatureFlagEnvironmentFallthrough[];
    readonly flagId: string;
    readonly id: string;
    readonly offVariation: number;
    readonly on: boolean;
    readonly prerequisites: outputs.GetFeatureFlagEnvironmentPrerequisite[];
    readonly rules: outputs.GetFeatureFlagEnvironmentRule[];
    readonly targets: outputs.GetFeatureFlagEnvironmentTarget[];
    readonly trackEvents: boolean;
}
export function getFeatureFlagEnvironmentOutput(args: GetFeatureFlagEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFeatureFlagEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getFeatureFlagEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getFeatureFlagEnvironment.
 */
export interface GetFeatureFlagEnvironmentOutputArgs {
    envKey: pulumi.Input<string>;
    flagId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
