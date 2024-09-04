// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFlowExporter(args: GetFlowExporterArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowExporterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getFlowExporter:getFlowExporter", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFlowExporter.
 */
export interface GetFlowExporterArgs {
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getFlowExporter.
 */
export interface GetFlowExporterResult {
    readonly description: string;
    readonly destinationIp: string;
    readonly device?: string;
    readonly id: string;
    readonly name: string;
    readonly sourceLoopback: number;
    readonly templateDataTimeout: number;
    readonly transportUdp: number;
}
export function getFlowExporterOutput(args: GetFlowExporterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowExporterResult> {
    return pulumi.output(args).apply((a: any) => getFlowExporter(a, opts))
}

/**
 * A collection of arguments for invoking getFlowExporter.
 */
export interface GetFlowExporterOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
