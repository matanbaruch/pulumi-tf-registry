// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStackMonitoringProcessSet(args: GetStackMonitoringProcessSetArgs, opts?: pulumi.InvokeOptions): Promise<GetStackMonitoringProcessSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getStackMonitoringProcessSet:getStackMonitoringProcessSet", {
        "processSetId": args.processSetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStackMonitoringProcessSet.
 */
export interface GetStackMonitoringProcessSetArgs {
    processSetId: string;
}

/**
 * A collection of values returned by getStackMonitoringProcessSet.
 */
export interface GetStackMonitoringProcessSetResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly processSetId: string;
    readonly revision: string;
    readonly specifications: outputs.GetStackMonitoringProcessSetSpecification[];
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getStackMonitoringProcessSetOutput(args: GetStackMonitoringProcessSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStackMonitoringProcessSetResult> {
    return pulumi.output(args).apply((a: any) => getStackMonitoringProcessSet(a, opts))
}

/**
 * A collection of arguments for invoking getStackMonitoringProcessSet.
 */
export interface GetStackMonitoringProcessSetOutputArgs {
    processSetId: pulumi.Input<string>;
}
