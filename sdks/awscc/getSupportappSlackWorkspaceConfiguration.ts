// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSupportappSlackWorkspaceConfiguration(args: GetSupportappSlackWorkspaceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSupportappSlackWorkspaceConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSupportappSlackWorkspaceConfiguration:getSupportappSlackWorkspaceConfiguration", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSupportappSlackWorkspaceConfiguration.
 */
export interface GetSupportappSlackWorkspaceConfigurationArgs {
    id: string;
}

/**
 * A collection of values returned by getSupportappSlackWorkspaceConfiguration.
 */
export interface GetSupportappSlackWorkspaceConfigurationResult {
    readonly id: string;
    readonly teamId: string;
    readonly versionId: string;
}
export function getSupportappSlackWorkspaceConfigurationOutput(args: GetSupportappSlackWorkspaceConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSupportappSlackWorkspaceConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getSupportappSlackWorkspaceConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getSupportappSlackWorkspaceConfiguration.
 */
export interface GetSupportappSlackWorkspaceConfigurationOutputArgs {
    id: pulumi.Input<string>;
}
