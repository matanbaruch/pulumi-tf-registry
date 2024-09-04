// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRobomakerSimulationApplication(args: GetRobomakerSimulationApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetRobomakerSimulationApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRobomakerSimulationApplication:getRobomakerSimulationApplication", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRobomakerSimulationApplication.
 */
export interface GetRobomakerSimulationApplicationArgs {
    id: string;
}

/**
 * A collection of values returned by getRobomakerSimulationApplication.
 */
export interface GetRobomakerSimulationApplicationResult {
    readonly arn: string;
    readonly currentRevisionId: string;
    readonly environment: string;
    readonly id: string;
    readonly name: string;
    readonly renderingEngine: outputs.GetRobomakerSimulationApplicationRenderingEngine;
    readonly robotSoftwareSuite: outputs.GetRobomakerSimulationApplicationRobotSoftwareSuite;
    readonly simulationSoftwareSuite: outputs.GetRobomakerSimulationApplicationSimulationSoftwareSuite;
    readonly sources: outputs.GetRobomakerSimulationApplicationSource[];
    readonly tags: {[key: string]: string};
}
export function getRobomakerSimulationApplicationOutput(args: GetRobomakerSimulationApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRobomakerSimulationApplicationResult> {
    return pulumi.output(args).apply((a: any) => getRobomakerSimulationApplication(a, opts))
}

/**
 * A collection of arguments for invoking getRobomakerSimulationApplication.
 */
export interface GetRobomakerSimulationApplicationOutputArgs {
    id: pulumi.Input<string>;
}
