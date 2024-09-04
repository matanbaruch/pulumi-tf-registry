// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRelayProxyConfiguration(args: GetRelayProxyConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetRelayProxyConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("launchdarkly:index/getRelayProxyConfiguration:getRelayProxyConfiguration", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRelayProxyConfiguration.
 */
export interface GetRelayProxyConfigurationArgs {
    id: string;
}

/**
 * A collection of values returned by getRelayProxyConfiguration.
 */
export interface GetRelayProxyConfigurationResult {
    readonly displayKey: string;
    readonly id: string;
    readonly name: string;
    readonly policies: outputs.GetRelayProxyConfigurationPolicy[];
}
export function getRelayProxyConfigurationOutput(args: GetRelayProxyConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRelayProxyConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getRelayProxyConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getRelayProxyConfiguration.
 */
export interface GetRelayProxyConfigurationOutputArgs {
    id: pulumi.Input<string>;
}
