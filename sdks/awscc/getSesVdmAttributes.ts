// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSesVdmAttributes(args: GetSesVdmAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetSesVdmAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSesVdmAttributes:getSesVdmAttributes", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSesVdmAttributes.
 */
export interface GetSesVdmAttributesArgs {
    id: string;
}

/**
 * A collection of values returned by getSesVdmAttributes.
 */
export interface GetSesVdmAttributesResult {
    readonly dashboardAttributes: outputs.GetSesVdmAttributesDashboardAttributes;
    readonly guardianAttributes: outputs.GetSesVdmAttributesGuardianAttributes;
    readonly id: string;
    readonly vdmAttributesResourceId: string;
}
export function getSesVdmAttributesOutput(args: GetSesVdmAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSesVdmAttributesResult> {
    return pulumi.output(args).apply((a: any) => getSesVdmAttributes(a, opts))
}

/**
 * A collection of arguments for invoking getSesVdmAttributes.
 */
export interface GetSesVdmAttributesOutputArgs {
    id: pulumi.Input<string>;
}
