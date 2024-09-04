// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLabelType(args: GetLabelTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetLabelTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("illumio-core:index/getLabelType:getLabelType", {
        "externalDataSet": args.externalDataSet,
        "href": args.href,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLabelType.
 */
export interface GetLabelTypeArgs {
    externalDataSet?: string;
    href: string;
    id?: string;
}

/**
 * A collection of values returned by getLabelType.
 */
export interface GetLabelTypeResult {
    readonly caps: string[];
    readonly createdAt: string;
    readonly createdBy: {[key: string]: string};
    readonly deleted: boolean;
    readonly deletedAt: string;
    readonly deletedBy: {[key: string]: string};
    readonly displayInfos: outputs.GetLabelTypeDisplayInfo[];
    readonly displayName: string;
    readonly externalDataReference: string;
    readonly externalDataSet?: string;
    readonly href: string;
    readonly id: string;
    readonly key: string;
    readonly updatedAt: string;
    readonly updatedBy: {[key: string]: string};
    readonly usage: {[key: string]: boolean};
}
export function getLabelTypeOutput(args: GetLabelTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabelTypeResult> {
    return pulumi.output(args).apply((a: any) => getLabelType(a, opts))
}

/**
 * A collection of arguments for invoking getLabelType.
 */
export interface GetLabelTypeOutputArgs {
    externalDataSet?: pulumi.Input<string>;
    href: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
