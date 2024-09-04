// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAutoscalelaunchconfig(args?: GetAutoscalelaunchconfigArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoscalelaunchconfigResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getAutoscalelaunchconfig:getAutoscalelaunchconfig", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutoscalelaunchconfig.
 */
export interface GetAutoscalelaunchconfigArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getAutoscalelaunchconfig.
 */
export interface GetAutoscalelaunchconfigResult {
    readonly configpbAttributes: outputs.GetAutoscalelaunchconfigConfigpbAttribute[];
    readonly description: string;
    readonly id: string;
    readonly imageId: string;
    readonly markers: outputs.GetAutoscalelaunchconfigMarker[];
    readonly mesos: outputs.GetAutoscalelaunchconfigMeso[];
    readonly name: string;
    readonly openstacks: outputs.GetAutoscalelaunchconfigOpenstack[];
    readonly tenantRef: string;
    readonly useExternalAsg: string;
    readonly uuid: string;
}
export function getAutoscalelaunchconfigOutput(args?: GetAutoscalelaunchconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutoscalelaunchconfigResult> {
    return pulumi.output(args).apply((a: any) => getAutoscalelaunchconfig(a, opts))
}

/**
 * A collection of arguments for invoking getAutoscalelaunchconfig.
 */
export interface GetAutoscalelaunchconfigOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
