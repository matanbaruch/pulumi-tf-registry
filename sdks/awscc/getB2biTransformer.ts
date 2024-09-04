// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getB2biTransformer(args: GetB2biTransformerArgs, opts?: pulumi.InvokeOptions): Promise<GetB2biTransformerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getB2biTransformer:getB2biTransformer", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getB2biTransformer.
 */
export interface GetB2biTransformerArgs {
    id: string;
}

/**
 * A collection of values returned by getB2biTransformer.
 */
export interface GetB2biTransformerResult {
    readonly createdAt: string;
    readonly ediType: outputs.GetB2biTransformerEdiType;
    readonly fileFormat: string;
    readonly id: string;
    readonly mappingTemplate: string;
    readonly modifiedAt: string;
    readonly name: string;
    readonly sampleDocument: string;
    readonly status: string;
    readonly tags: outputs.GetB2biTransformerTag[];
    readonly transformerArn: string;
    readonly transformerId: string;
}
export function getB2biTransformerOutput(args: GetB2biTransformerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetB2biTransformerResult> {
    return pulumi.output(args).apply((a: any) => getB2biTransformer(a, opts))
}

/**
 * A collection of arguments for invoking getB2biTransformer.
 */
export interface GetB2biTransformerOutputArgs {
    id: pulumi.Input<string>;
}
