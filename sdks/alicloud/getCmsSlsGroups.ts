// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCmsSlsGroups(args?: GetCmsSlsGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetCmsSlsGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCmsSlsGroups:getCmsSlsGroups", {
        "id": args.id,
        "ids": args.ids,
        "keyword": args.keyword,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "pageNumber": args.pageNumber,
        "pageSize": args.pageSize,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCmsSlsGroups.
 */
export interface GetCmsSlsGroupsArgs {
    id?: string;
    ids?: string[];
    keyword?: string;
    nameRegex?: string;
    outputFile?: string;
    pageNumber?: number;
    pageSize?: number;
}

/**
 * A collection of values returned by getCmsSlsGroups.
 */
export interface GetCmsSlsGroupsResult {
    readonly groups: outputs.GetCmsSlsGroupsGroup[];
    readonly id: string;
    readonly ids: string[];
    readonly keyword?: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly pageNumber?: number;
    readonly pageSize?: number;
}
export function getCmsSlsGroupsOutput(args?: GetCmsSlsGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCmsSlsGroupsResult> {
    return pulumi.output(args).apply((a: any) => getCmsSlsGroups(a, opts))
}

/**
 * A collection of arguments for invoking getCmsSlsGroups.
 */
export interface GetCmsSlsGroupsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    keyword?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    pageNumber?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
}
