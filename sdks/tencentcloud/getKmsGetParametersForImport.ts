// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKmsGetParametersForImport(args: GetKmsGetParametersForImportArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsGetParametersForImportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getKmsGetParametersForImport:getKmsGetParametersForImport", {
        "id": args.id,
        "keyId": args.keyId,
        "resultOutputFile": args.resultOutputFile,
        "wrappingAlgorithm": args.wrappingAlgorithm,
        "wrappingKeySpec": args.wrappingKeySpec,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsGetParametersForImport.
 */
export interface GetKmsGetParametersForImportArgs {
    id?: string;
    keyId: string;
    resultOutputFile?: string;
    wrappingAlgorithm: string;
    wrappingKeySpec: string;
}

/**
 * A collection of values returned by getKmsGetParametersForImport.
 */
export interface GetKmsGetParametersForImportResult {
    readonly id: string;
    readonly importToken: string;
    readonly keyId: string;
    readonly parametersValidTo: number;
    readonly publicKey: string;
    readonly resultOutputFile?: string;
    readonly wrappingAlgorithm: string;
    readonly wrappingKeySpec: string;
}
export function getKmsGetParametersForImportOutput(args: GetKmsGetParametersForImportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsGetParametersForImportResult> {
    return pulumi.output(args).apply((a: any) => getKmsGetParametersForImport(a, opts))
}

/**
 * A collection of arguments for invoking getKmsGetParametersForImport.
 */
export interface GetKmsGetParametersForImportOutputArgs {
    id?: pulumi.Input<string>;
    keyId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    wrappingAlgorithm: pulumi.Input<string>;
    wrappingKeySpec: pulumi.Input<string>;
}
