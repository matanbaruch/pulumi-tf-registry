// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPropertyRulesTemplate(args?: GetPropertyRulesTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetPropertyRulesTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getPropertyRulesTemplate:getPropertyRulesTemplate", {
        "id": args.id,
        "templateFile": args.templateFile,
        "templates": args.templates,
        "varDefinitionFile": args.varDefinitionFile,
        "varValuesFile": args.varValuesFile,
        "variables": args.variables,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPropertyRulesTemplate.
 */
export interface GetPropertyRulesTemplateArgs {
    id?: string;
    templateFile?: string;
    templates?: inputs.GetPropertyRulesTemplateTemplate[];
    varDefinitionFile?: string;
    varValuesFile?: string;
    variables?: inputs.GetPropertyRulesTemplateVariable[];
}

/**
 * A collection of values returned by getPropertyRulesTemplate.
 */
export interface GetPropertyRulesTemplateResult {
    readonly id: string;
    readonly json: string;
    readonly templateFile?: string;
    readonly templates?: outputs.GetPropertyRulesTemplateTemplate[];
    readonly varDefinitionFile?: string;
    readonly varValuesFile?: string;
    readonly variables?: outputs.GetPropertyRulesTemplateVariable[];
}
export function getPropertyRulesTemplateOutput(args?: GetPropertyRulesTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPropertyRulesTemplateResult> {
    return pulumi.output(args).apply((a: any) => getPropertyRulesTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getPropertyRulesTemplate.
 */
export interface GetPropertyRulesTemplateOutputArgs {
    id?: pulumi.Input<string>;
    templateFile?: pulumi.Input<string>;
    templates?: pulumi.Input<pulumi.Input<inputs.GetPropertyRulesTemplateTemplateArgs>[]>;
    varDefinitionFile?: pulumi.Input<string>;
    varValuesFile?: pulumi.Input<string>;
    variables?: pulumi.Input<pulumi.Input<inputs.GetPropertyRulesTemplateVariableArgs>[]>;
}
