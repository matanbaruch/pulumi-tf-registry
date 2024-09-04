// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAwsCloudformationTemplate(args?: GetAwsCloudformationTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsCloudformationTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kion:index/getAwsCloudformationTemplate:getAwsCloudformationTemplate", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAwsCloudformationTemplate.
 */
export interface GetAwsCloudformationTemplateArgs {
    filters?: inputs.GetAwsCloudformationTemplateFilter[];
    id?: string;
}

/**
 * A collection of values returned by getAwsCloudformationTemplate.
 */
export interface GetAwsCloudformationTemplateResult {
    readonly filters?: outputs.GetAwsCloudformationTemplateFilter[];
    readonly id: string;
    readonly lists: outputs.GetAwsCloudformationTemplateList[];
}
export function getAwsCloudformationTemplateOutput(args?: GetAwsCloudformationTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwsCloudformationTemplateResult> {
    return pulumi.output(args).apply((a: any) => getAwsCloudformationTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getAwsCloudformationTemplate.
 */
export interface GetAwsCloudformationTemplateOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetAwsCloudformationTemplateFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
