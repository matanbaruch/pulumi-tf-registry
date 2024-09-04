// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRobomakerRobotApplicationVersion(args: GetRobomakerRobotApplicationVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetRobomakerRobotApplicationVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRobomakerRobotApplicationVersion:getRobomakerRobotApplicationVersion", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRobomakerRobotApplicationVersion.
 */
export interface GetRobomakerRobotApplicationVersionArgs {
    id: string;
}

/**
 * A collection of values returned by getRobomakerRobotApplicationVersion.
 */
export interface GetRobomakerRobotApplicationVersionResult {
    readonly application: string;
    readonly applicationVersion: string;
    readonly arn: string;
    readonly currentRevisionId: string;
    readonly id: string;
}
export function getRobomakerRobotApplicationVersionOutput(args: GetRobomakerRobotApplicationVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRobomakerRobotApplicationVersionResult> {
    return pulumi.output(args).apply((a: any) => getRobomakerRobotApplicationVersion(a, opts))
}

/**
 * A collection of arguments for invoking getRobomakerRobotApplicationVersion.
 */
export interface GetRobomakerRobotApplicationVersionOutputArgs {
    id: pulumi.Input<string>;
}
