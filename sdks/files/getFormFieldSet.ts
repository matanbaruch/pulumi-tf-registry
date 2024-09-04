// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFormFieldSet(args: GetFormFieldSetArgs, opts?: pulumi.InvokeOptions): Promise<GetFormFieldSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("files:index/getFormFieldSet:getFormFieldSet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFormFieldSet.
 */
export interface GetFormFieldSetArgs {
    id: number;
}

/**
 * A collection of values returned by getFormFieldSet.
 */
export interface GetFormFieldSetResult {
    readonly formFields: any;
    readonly formLayouts: number[];
    readonly id: number;
    readonly skipCompany: boolean;
    readonly skipEmail: boolean;
    readonly skipName: boolean;
    readonly title: string;
}
export function getFormFieldSetOutput(args: GetFormFieldSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFormFieldSetResult> {
    return pulumi.output(args).apply((a: any) => getFormFieldSet(a, opts))
}

/**
 * A collection of arguments for invoking getFormFieldSet.
 */
export interface GetFormFieldSetOutputArgs {
    id: pulumi.Input<number>;
}
