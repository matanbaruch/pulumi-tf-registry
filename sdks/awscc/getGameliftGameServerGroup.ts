// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGameliftGameServerGroup(args: GetGameliftGameServerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGameliftGameServerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getGameliftGameServerGroup:getGameliftGameServerGroup", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGameliftGameServerGroup.
 */
export interface GetGameliftGameServerGroupArgs {
    id: string;
}

/**
 * A collection of values returned by getGameliftGameServerGroup.
 */
export interface GetGameliftGameServerGroupResult {
    readonly autoScalingGroupArn: string;
    readonly autoScalingPolicy: outputs.GetGameliftGameServerGroupAutoScalingPolicy;
    readonly balancingStrategy: string;
    readonly deleteOption: string;
    readonly gameServerGroupArn: string;
    readonly gameServerGroupName: string;
    readonly gameServerProtectionPolicy: string;
    readonly id: string;
    readonly instanceDefinitions: outputs.GetGameliftGameServerGroupInstanceDefinition[];
    readonly launchTemplate: outputs.GetGameliftGameServerGroupLaunchTemplate;
    readonly maxSize: number;
    readonly minSize: number;
    readonly roleArn: string;
    readonly tags: outputs.GetGameliftGameServerGroupTag[];
    readonly vpcSubnets: string[];
}
export function getGameliftGameServerGroupOutput(args: GetGameliftGameServerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGameliftGameServerGroupResult> {
    return pulumi.output(args).apply((a: any) => getGameliftGameServerGroup(a, opts))
}

/**
 * A collection of arguments for invoking getGameliftGameServerGroup.
 */
export interface GetGameliftGameServerGroupOutputArgs {
    id: pulumi.Input<string>;
}
