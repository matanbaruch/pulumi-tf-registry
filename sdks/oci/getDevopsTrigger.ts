// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevopsTrigger(args: GetDevopsTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetDevopsTriggerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDevopsTrigger:getDevopsTrigger", {
        "triggerId": args.triggerId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevopsTrigger.
 */
export interface GetDevopsTriggerArgs {
    triggerId: string;
}

/**
 * A collection of values returned by getDevopsTrigger.
 */
export interface GetDevopsTriggerResult {
    readonly actions: outputs.GetDevopsTriggerAction[];
    readonly compartmentId: string;
    readonly connectionId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly projectId: string;
    readonly repositoryId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly triggerId: string;
    readonly triggerSource: string;
    readonly triggerUrl: string;
}
export function getDevopsTriggerOutput(args: GetDevopsTriggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevopsTriggerResult> {
    return pulumi.output(args).apply((a: any) => getDevopsTrigger(a, opts))
}

/**
 * A collection of arguments for invoking getDevopsTrigger.
 */
export interface GetDevopsTriggerOutputArgs {
    triggerId: pulumi.Input<string>;
}
