// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGlueDataCatalogEncryptionSettings(args: GetGlueDataCatalogEncryptionSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetGlueDataCatalogEncryptionSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getGlueDataCatalogEncryptionSettings:getGlueDataCatalogEncryptionSettings", {
        "catalogId": args.catalogId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGlueDataCatalogEncryptionSettings.
 */
export interface GetGlueDataCatalogEncryptionSettingsArgs {
    catalogId: string;
    id?: string;
}

/**
 * A collection of values returned by getGlueDataCatalogEncryptionSettings.
 */
export interface GetGlueDataCatalogEncryptionSettingsResult {
    readonly catalogId: string;
    readonly dataCatalogEncryptionSettings: outputs.GetGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSetting[];
    readonly id: string;
}
export function getGlueDataCatalogEncryptionSettingsOutput(args: GetGlueDataCatalogEncryptionSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlueDataCatalogEncryptionSettingsResult> {
    return pulumi.output(args).apply((a: any) => getGlueDataCatalogEncryptionSettings(a, opts))
}

/**
 * A collection of arguments for invoking getGlueDataCatalogEncryptionSettings.
 */
export interface GetGlueDataCatalogEncryptionSettingsOutputArgs {
    catalogId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
