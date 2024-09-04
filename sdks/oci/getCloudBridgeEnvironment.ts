// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudBridgeEnvironment(args: GetCloudBridgeEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudBridgeEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudBridgeEnvironment:getCloudBridgeEnvironment", {
        "environmentId": args.environmentId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudBridgeEnvironment.
 */
export interface GetCloudBridgeEnvironmentArgs {
    environmentId: string;
}

/**
 * A collection of values returned by getCloudBridgeEnvironment.
 */
export interface GetCloudBridgeEnvironmentResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly environmentId: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getCloudBridgeEnvironmentOutput(args: GetCloudBridgeEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudBridgeEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getCloudBridgeEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getCloudBridgeEnvironment.
 */
export interface GetCloudBridgeEnvironmentOutputArgs {
    environmentId: pulumi.Input<string>;
}
