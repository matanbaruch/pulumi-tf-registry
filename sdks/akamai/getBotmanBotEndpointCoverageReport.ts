// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBotmanBotEndpointCoverageReport(args?: GetBotmanBotEndpointCoverageReportArgs, opts?: pulumi.InvokeOptions): Promise<GetBotmanBotEndpointCoverageReportResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getBotmanBotEndpointCoverageReport:getBotmanBotEndpointCoverageReport", {
        "configId": args.configId,
        "id": args.id,
        "operationId": args.operationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBotmanBotEndpointCoverageReport.
 */
export interface GetBotmanBotEndpointCoverageReportArgs {
    configId?: number;
    id?: string;
    operationId?: string;
}

/**
 * A collection of values returned by getBotmanBotEndpointCoverageReport.
 */
export interface GetBotmanBotEndpointCoverageReportResult {
    readonly configId?: number;
    readonly id: string;
    readonly json: string;
    readonly operationId?: string;
}
export function getBotmanBotEndpointCoverageReportOutput(args?: GetBotmanBotEndpointCoverageReportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBotmanBotEndpointCoverageReportResult> {
    return pulumi.output(args).apply((a: any) => getBotmanBotEndpointCoverageReport(a, opts))
}

/**
 * A collection of arguments for invoking getBotmanBotEndpointCoverageReport.
 */
export interface GetBotmanBotEndpointCoverageReportOutputArgs {
    configId?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    operationId?: pulumi.Input<string>;
}
