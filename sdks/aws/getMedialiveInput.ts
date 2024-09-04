// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMedialiveInput(args: GetMedialiveInputArgs, opts?: pulumi.InvokeOptions): Promise<GetMedialiveInputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getMedialiveInput:getMedialiveInput", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMedialiveInput.
 */
export interface GetMedialiveInputArgs {
    id: string;
}

/**
 * A collection of values returned by getMedialiveInput.
 */
export interface GetMedialiveInputResult {
    readonly arn: string;
    readonly attachedChannels: string[];
    readonly destinations: outputs.GetMedialiveInputDestination[];
    readonly id: string;
    readonly inputClass: string;
    readonly inputDevices: outputs.GetMedialiveInputInputDevice[];
    readonly inputPartnerIds: string[];
    readonly inputSourceType: string;
    readonly mediaConnectFlows: outputs.GetMedialiveInputMediaConnectFlow[];
    readonly name: string;
    readonly roleArn: string;
    readonly securityGroups: string[];
    readonly sources: outputs.GetMedialiveInputSource[];
    readonly state: string;
    readonly tags: {[key: string]: string};
    readonly type: string;
}
export function getMedialiveInputOutput(args: GetMedialiveInputOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMedialiveInputResult> {
    return pulumi.output(args).apply((a: any) => getMedialiveInput(a, opts))
}

/**
 * A collection of arguments for invoking getMedialiveInput.
 */
export interface GetMedialiveInputOutputArgs {
    id: pulumi.Input<string>;
}
