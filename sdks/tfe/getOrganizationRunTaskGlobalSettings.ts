// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrganizationRunTaskGlobalSettings(args: GetOrganizationRunTaskGlobalSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationRunTaskGlobalSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tfe:index/getOrganizationRunTaskGlobalSettings:getOrganizationRunTaskGlobalSettings", {
        "enabled": args.enabled,
        "enforcementLevel": args.enforcementLevel,
        "stages": args.stages,
        "taskId": args.taskId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationRunTaskGlobalSettings.
 */
export interface GetOrganizationRunTaskGlobalSettingsArgs {
    enabled?: boolean;
    enforcementLevel?: string;
    stages?: string[];
    taskId: string;
}

/**
 * A collection of values returned by getOrganizationRunTaskGlobalSettings.
 */
export interface GetOrganizationRunTaskGlobalSettingsResult {
    readonly enabled?: boolean;
    readonly enforcementLevel?: string;
    readonly id: string;
    readonly stages?: string[];
    readonly taskId: string;
}
export function getOrganizationRunTaskGlobalSettingsOutput(args: GetOrganizationRunTaskGlobalSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationRunTaskGlobalSettingsResult> {
    return pulumi.output(args).apply((a: any) => getOrganizationRunTaskGlobalSettings(a, opts))
}

/**
 * A collection of arguments for invoking getOrganizationRunTaskGlobalSettings.
 */
export interface GetOrganizationRunTaskGlobalSettingsOutputArgs {
    enabled?: pulumi.Input<boolean>;
    enforcementLevel?: pulumi.Input<string>;
    stages?: pulumi.Input<pulumi.Input<string>[]>;
    taskId: pulumi.Input<string>;
}
