// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKnowledgeCategory(args: GetKnowledgeCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetKnowledgeCategoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getKnowledgeCategory:getKnowledgeCategory", {
        "id": args.id,
        "knowledgeBaseName": args.knowledgeBaseName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKnowledgeCategory.
 */
export interface GetKnowledgeCategoryArgs {
    id?: string;
    knowledgeBaseName: string;
    name: string;
}

/**
 * A collection of values returned by getKnowledgeCategory.
 */
export interface GetKnowledgeCategoryResult {
    readonly id: string;
    readonly knowledgeBaseName: string;
    readonly name: string;
}
export function getKnowledgeCategoryOutput(args: GetKnowledgeCategoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKnowledgeCategoryResult> {
    return pulumi.output(args).apply((a: any) => getKnowledgeCategory(a, opts))
}

/**
 * A collection of arguments for invoking getKnowledgeCategory.
 */
export interface GetKnowledgeCategoryOutputArgs {
    id?: pulumi.Input<string>;
    knowledgeBaseName: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
