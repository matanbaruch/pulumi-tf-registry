// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUrlFilteringPolicyDefinition(args: GetUrlFilteringPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetUrlFilteringPolicyDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getUrlFilteringPolicyDefinition:getUrlFilteringPolicyDefinition", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUrlFilteringPolicyDefinition.
 */
export interface GetUrlFilteringPolicyDefinitionArgs {
    id: string;
}

/**
 * A collection of values returned by getUrlFilteringPolicyDefinition.
 */
export interface GetUrlFilteringPolicyDefinitionResult {
    readonly alerts: string[];
    readonly allowUrlListId: string;
    readonly allowUrlListVersion: number;
    readonly blockPageAction: string;
    readonly blockPageContents: string;
    readonly blockUrlListId: string;
    readonly blockUrlListVersion: number;
    readonly description: string;
    readonly id: string;
    readonly mode: string;
    readonly name: string;
    readonly targetVpns: string[];
    readonly version: number;
    readonly webCategories: string[];
    readonly webCategoriesAction: string;
    readonly webReputation: string;
}
export function getUrlFilteringPolicyDefinitionOutput(args: GetUrlFilteringPolicyDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUrlFilteringPolicyDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getUrlFilteringPolicyDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getUrlFilteringPolicyDefinition.
 */
export interface GetUrlFilteringPolicyDefinitionOutputArgs {
    id: pulumi.Input<string>;
}
