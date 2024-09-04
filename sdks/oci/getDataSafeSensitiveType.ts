// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDataSafeSensitiveType(args: GetDataSafeSensitiveTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeSensitiveTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeSensitiveType:getDataSafeSensitiveType", {
        "sensitiveTypeId": args.sensitiveTypeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveType.
 */
export interface GetDataSafeSensitiveTypeArgs {
    sensitiveTypeId: string;
}

/**
 * A collection of values returned by getDataSafeSensitiveType.
 */
export interface GetDataSafeSensitiveTypeResult {
    readonly commentPattern: string;
    readonly compartmentId: string;
    readonly dataPattern: string;
    readonly defaultMaskingFormatId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly entityType: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isCommon: boolean;
    readonly namePattern: string;
    readonly parentCategoryId: string;
    readonly searchType: string;
    readonly sensitiveTypeId: string;
    readonly shortName: string;
    readonly source: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDataSafeSensitiveTypeOutput(args: GetDataSafeSensitiveTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeSensitiveTypeResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeSensitiveType(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveType.
 */
export interface GetDataSafeSensitiveTypeOutputArgs {
    sensitiveTypeId: pulumi.Input<string>;
}
