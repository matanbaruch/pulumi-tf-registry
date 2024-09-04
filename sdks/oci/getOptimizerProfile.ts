// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOptimizerProfile(args: GetOptimizerProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetOptimizerProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOptimizerProfile:getOptimizerProfile", {
        "profileId": args.profileId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOptimizerProfile.
 */
export interface GetOptimizerProfileArgs {
    profileId: string;
}

/**
 * A collection of values returned by getOptimizerProfile.
 */
export interface GetOptimizerProfileResult {
    readonly aggregationIntervalInDays: number;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly levelsConfigurations: outputs.GetOptimizerProfileLevelsConfiguration[];
    readonly name: string;
    readonly profileId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly targetCompartments: outputs.GetOptimizerProfileTargetCompartment[];
    readonly targetTags: outputs.GetOptimizerProfileTargetTag[];
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getOptimizerProfileOutput(args: GetOptimizerProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOptimizerProfileResult> {
    return pulumi.output(args).apply((a: any) => getOptimizerProfile(a, opts))
}

/**
 * A collection of arguments for invoking getOptimizerProfile.
 */
export interface GetOptimizerProfileOutputArgs {
    profileId: pulumi.Input<string>;
}
