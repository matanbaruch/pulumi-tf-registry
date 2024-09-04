// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataSafeSensitiveDataModelsSensitiveColumn(args: GetDataSafeSensitiveDataModelsSensitiveColumnArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeSensitiveDataModelsSensitiveColumnResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeSensitiveDataModelsSensitiveColumn:getDataSafeSensitiveDataModelsSensitiveColumn", {
        "sensitiveColumnKey": args.sensitiveColumnKey,
        "sensitiveDataModelId": args.sensitiveDataModelId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveDataModelsSensitiveColumn.
 */
export interface GetDataSafeSensitiveDataModelsSensitiveColumnArgs {
    sensitiveColumnKey: string;
    sensitiveDataModelId: string;
}

/**
 * A collection of values returned by getDataSafeSensitiveDataModelsSensitiveColumn.
 */
export interface GetDataSafeSensitiveDataModelsSensitiveColumnResult {
    readonly appDefinedChildColumnKeys: string[];
    readonly appName: string;
    readonly columnGroups: string[];
    readonly columnName: string;
    readonly dataType: string;
    readonly dbDefinedChildColumnKeys: string[];
    readonly estimatedDataValueCount: string;
    readonly id: string;
    readonly key: string;
    readonly lifecycleDetails: string;
    readonly object: string;
    readonly objectType: string;
    readonly parentColumnKeys: string[];
    readonly relationType: string;
    readonly sampleDataValues: string[];
    readonly schemaName: string;
    readonly sensitiveColumnKey: string;
    readonly sensitiveDataModelId: string;
    readonly sensitiveTypeId: string;
    readonly source: string;
    readonly state: string;
    readonly status: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDataSafeSensitiveDataModelsSensitiveColumnOutput(args: GetDataSafeSensitiveDataModelsSensitiveColumnOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeSensitiveDataModelsSensitiveColumnResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeSensitiveDataModelsSensitiveColumn(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveDataModelsSensitiveColumn.
 */
export interface GetDataSafeSensitiveDataModelsSensitiveColumnOutputArgs {
    sensitiveColumnKey: pulumi.Input<string>;
    sensitiveDataModelId: pulumi.Input<string>;
}
