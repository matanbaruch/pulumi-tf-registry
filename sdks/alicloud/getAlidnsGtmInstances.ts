// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAlidnsGtmInstances(args?: GetAlidnsGtmInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetAlidnsGtmInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getAlidnsGtmInstances:getAlidnsGtmInstances", {
        "id": args.id,
        "ids": args.ids,
        "lang": args.lang,
        "resourceGroupId": args.resourceGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlidnsGtmInstances.
 */
export interface GetAlidnsGtmInstancesArgs {
    id?: string;
    ids?: string[];
    lang?: string;
    resourceGroupId?: string;
}

/**
 * A collection of values returned by getAlidnsGtmInstances.
 */
export interface GetAlidnsGtmInstancesResult {
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetAlidnsGtmInstancesInstance[];
    readonly lang?: string;
    readonly outputFile: string;
    readonly resourceGroupId?: string;
}
export function getAlidnsGtmInstancesOutput(args?: GetAlidnsGtmInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlidnsGtmInstancesResult> {
    return pulumi.output(args).apply((a: any) => getAlidnsGtmInstances(a, opts))
}

/**
 * A collection of arguments for invoking getAlidnsGtmInstances.
 */
export interface GetAlidnsGtmInstancesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    lang?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
}
