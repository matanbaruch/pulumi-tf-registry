// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppstreamApplication(args: GetAppstreamApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetAppstreamApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAppstreamApplication:getAppstreamApplication", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppstreamApplication.
 */
export interface GetAppstreamApplicationArgs {
    id: string;
}

/**
 * A collection of values returned by getAppstreamApplication.
 */
export interface GetAppstreamApplicationResult {
    readonly appBlockArn: string;
    readonly arn: string;
    readonly attributesToDeletes: string[];
    readonly createdTime: string;
    readonly description: string;
    readonly displayName: string;
    readonly iconS3Location: outputs.GetAppstreamApplicationIconS3Location;
    readonly id: string;
    readonly instanceFamilies: string[];
    readonly launchParameters: string;
    readonly launchPath: string;
    readonly name: string;
    readonly platforms: string[];
    readonly tags: outputs.GetAppstreamApplicationTag[];
    readonly workingDirectory: string;
}
export function getAppstreamApplicationOutput(args: GetAppstreamApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppstreamApplicationResult> {
    return pulumi.output(args).apply((a: any) => getAppstreamApplication(a, opts))
}

/**
 * A collection of arguments for invoking getAppstreamApplication.
 */
export interface GetAppstreamApplicationOutputArgs {
    id: pulumi.Input<string>;
}
