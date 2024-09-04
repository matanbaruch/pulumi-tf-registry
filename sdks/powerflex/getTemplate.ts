// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTemplate(args?: GetTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powerflex:index/getTemplate:getTemplate", {
        "templateIds": args.templateIds,
        "templateNames": args.templateNames,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTemplate.
 */
export interface GetTemplateArgs {
    templateIds?: string[];
    templateNames?: string[];
}

/**
 * A collection of values returned by getTemplate.
 */
export interface GetTemplateResult {
    readonly id: string;
    readonly templateDetails: outputs.GetTemplateTemplateDetail[];
    readonly templateIds?: string[];
    readonly templateNames?: string[];
}
export function getTemplateOutput(args?: GetTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTemplateResult> {
    return pulumi.output(args).apply((a: any) => getTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getTemplate.
 */
export interface GetTemplateOutputArgs {
    templateIds?: pulumi.Input<pulumi.Input<string>[]>;
    templateNames?: pulumi.Input<pulumi.Input<string>[]>;
}
