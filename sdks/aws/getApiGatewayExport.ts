// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApiGatewayExport(args: GetApiGatewayExportArgs, opts?: pulumi.InvokeOptions): Promise<GetApiGatewayExportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getApiGatewayExport:getApiGatewayExport", {
        "accepts": args.accepts,
        "exportType": args.exportType,
        "id": args.id,
        "parameters": args.parameters,
        "restApiId": args.restApiId,
        "stageName": args.stageName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApiGatewayExport.
 */
export interface GetApiGatewayExportArgs {
    accepts?: string;
    exportType: string;
    id?: string;
    parameters?: {[key: string]: string};
    restApiId: string;
    stageName: string;
}

/**
 * A collection of values returned by getApiGatewayExport.
 */
export interface GetApiGatewayExportResult {
    readonly accepts?: string;
    readonly body: string;
    readonly contentDisposition: string;
    readonly contentType: string;
    readonly exportType: string;
    readonly id: string;
    readonly parameters?: {[key: string]: string};
    readonly restApiId: string;
    readonly stageName: string;
}
export function getApiGatewayExportOutput(args: GetApiGatewayExportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiGatewayExportResult> {
    return pulumi.output(args).apply((a: any) => getApiGatewayExport(a, opts))
}

/**
 * A collection of arguments for invoking getApiGatewayExport.
 */
export interface GetApiGatewayExportOutputArgs {
    accepts?: pulumi.Input<string>;
    exportType: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    restApiId: pulumi.Input<string>;
    stageName: pulumi.Input<string>;
}
