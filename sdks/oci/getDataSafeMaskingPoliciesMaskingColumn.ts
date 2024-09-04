// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeMaskingPoliciesMaskingColumn(args: GetDataSafeMaskingPoliciesMaskingColumnArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeMaskingPoliciesMaskingColumnResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeMaskingPoliciesMaskingColumn:getDataSafeMaskingPoliciesMaskingColumn", {
        "maskingColumnKey": args.maskingColumnKey,
        "maskingPolicyId": args.maskingPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeMaskingPoliciesMaskingColumn.
 */
export interface GetDataSafeMaskingPoliciesMaskingColumnArgs {
    maskingColumnKey: string;
    maskingPolicyId: string;
}

/**
 * A collection of values returned by getDataSafeMaskingPoliciesMaskingColumn.
 */
export interface GetDataSafeMaskingPoliciesMaskingColumnResult {
    readonly childColumns: string[];
    readonly columnName: string;
    readonly dataType: string;
    readonly id: string;
    readonly isMaskingEnabled: boolean;
    readonly key: string;
    readonly lifecycleDetails: string;
    readonly maskingColumnGroup: string;
    readonly maskingColumnKey: string;
    readonly maskingFormats: outputs.GetDataSafeMaskingPoliciesMaskingColumnMaskingFormat[];
    readonly maskingPolicyId: string;
    readonly object: string;
    readonly objectType: string;
    readonly schemaName: string;
    readonly sensitiveTypeId: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDataSafeMaskingPoliciesMaskingColumnOutput(args: GetDataSafeMaskingPoliciesMaskingColumnOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeMaskingPoliciesMaskingColumnResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeMaskingPoliciesMaskingColumn(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeMaskingPoliciesMaskingColumn.
 */
export interface GetDataSafeMaskingPoliciesMaskingColumnOutputArgs {
    maskingColumnKey: pulumi.Input<string>;
    maskingPolicyId: pulumi.Input<string>;
}
