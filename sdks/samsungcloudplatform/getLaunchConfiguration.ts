// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLaunchConfiguration(args: GetLaunchConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetLaunchConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getLaunchConfiguration:getLaunchConfiguration", {
        "id": args.id,
        "lcId": args.lcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLaunchConfiguration.
 */
export interface GetLaunchConfigurationArgs {
    id?: string;
    lcId: string;
}

/**
 * A collection of values returned by getLaunchConfiguration.
 */
export interface GetLaunchConfigurationResult {
    readonly asgIds: string[];
    readonly blockId: string;
    readonly blockStorages: outputs.GetLaunchConfigurationBlockStorage[];
    readonly contractProductId: string;
    readonly createdBy: string;
    readonly createdDt: string;
    readonly id: string;
    readonly imageId: string;
    readonly initialScript: string;
    readonly keyPairId: string;
    readonly lcId: string;
    readonly lcName: string;
    readonly modifiedBy: string;
    readonly modifiedDt: string;
    readonly osProductId: string;
    readonly osType: string;
    readonly productGroupId: string;
    readonly projectId: string;
    readonly scaleProductId: string;
    readonly serverType: string;
    readonly serviceZoneId: string;
}
export function getLaunchConfigurationOutput(args: GetLaunchConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLaunchConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getLaunchConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getLaunchConfiguration.
 */
export interface GetLaunchConfigurationOutputArgs {
    id?: pulumi.Input<string>;
    lcId: pulumi.Input<string>;
}
