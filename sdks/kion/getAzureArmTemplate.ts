// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAzureArmTemplate(args?: GetAzureArmTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureArmTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kion:index/getAzureArmTemplate:getAzureArmTemplate", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAzureArmTemplate.
 */
export interface GetAzureArmTemplateArgs {
    filters?: inputs.GetAzureArmTemplateFilter[];
    id?: string;
}

/**
 * A collection of values returned by getAzureArmTemplate.
 */
export interface GetAzureArmTemplateResult {
    readonly filters?: outputs.GetAzureArmTemplateFilter[];
    readonly id: string;
    readonly lists: outputs.GetAzureArmTemplateList[];
}
export function getAzureArmTemplateOutput(args?: GetAzureArmTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureArmTemplateResult> {
    return pulumi.output(args).apply((a: any) => getAzureArmTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getAzureArmTemplate.
 */
export interface GetAzureArmTemplateOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetAzureArmTemplateFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
