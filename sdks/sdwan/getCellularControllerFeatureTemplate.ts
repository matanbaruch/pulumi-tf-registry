// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCellularControllerFeatureTemplate(args?: GetCellularControllerFeatureTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetCellularControllerFeatureTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getCellularControllerFeatureTemplate:getCellularControllerFeatureTemplate", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCellularControllerFeatureTemplate.
 */
export interface GetCellularControllerFeatureTemplateArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getCellularControllerFeatureTemplate.
 */
export interface GetCellularControllerFeatureTemplateResult {
    readonly cellularInterfaceId: string;
    readonly cellularInterfaceIdVariable: string;
    readonly dataProfiles: outputs.GetCellularControllerFeatureTemplateDataProfile[];
    readonly description: string;
    readonly deviceTypes: string[];
    readonly firmwareAutoSim: boolean;
    readonly firmwareAutoSimVariable: string;
    readonly id: string;
    readonly name: string;
    readonly primarySimSlot: number;
    readonly primarySimSlotVariable: string;
    readonly simFailoverRetries: number;
    readonly simFailoverRetriesVariable: string;
    readonly simFailoverTimeout: number;
    readonly simFailoverTimeoutVariable: string;
    readonly templateType: string;
    readonly version: number;
}
export function getCellularControllerFeatureTemplateOutput(args?: GetCellularControllerFeatureTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCellularControllerFeatureTemplateResult> {
    return pulumi.output(args).apply((a: any) => getCellularControllerFeatureTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getCellularControllerFeatureTemplate.
 */
export interface GetCellularControllerFeatureTemplateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
