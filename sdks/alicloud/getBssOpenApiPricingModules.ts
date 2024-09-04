// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBssOpenApiPricingModules(args: GetBssOpenApiPricingModulesArgs, opts?: pulumi.InvokeOptions): Promise<GetBssOpenApiPricingModulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getBssOpenApiPricingModules:getBssOpenApiPricingModules", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "productCode": args.productCode,
        "productType": args.productType,
        "subscriptionType": args.subscriptionType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBssOpenApiPricingModules.
 */
export interface GetBssOpenApiPricingModulesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    productCode: string;
    productType?: string;
    subscriptionType: string;
}

/**
 * A collection of values returned by getBssOpenApiPricingModules.
 */
export interface GetBssOpenApiPricingModulesResult {
    readonly id: string;
    readonly ids: string[];
    readonly modules: outputs.GetBssOpenApiPricingModulesModule[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly productCode: string;
    readonly productType?: string;
    readonly subscriptionType: string;
}
export function getBssOpenApiPricingModulesOutput(args: GetBssOpenApiPricingModulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBssOpenApiPricingModulesResult> {
    return pulumi.output(args).apply((a: any) => getBssOpenApiPricingModules(a, opts))
}

/**
 * A collection of arguments for invoking getBssOpenApiPricingModules.
 */
export interface GetBssOpenApiPricingModulesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    productCode: pulumi.Input<string>;
    productType?: pulumi.Input<string>;
    subscriptionType: pulumi.Input<string>;
}
