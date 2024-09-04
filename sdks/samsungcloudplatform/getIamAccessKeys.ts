// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamAccessKeys(args?: GetIamAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetIamAccessKeysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getIamAccessKeys:getIamAccessKeys", {
        "accessKeyProjectType": args.accessKeyProjectType,
        "accessKeyState": args.accessKeyState,
        "activeYn": args.activeYn,
        "filters": args.filters,
        "id": args.id,
        "projectId": args.projectId,
        "projectName": args.projectName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamAccessKeys.
 */
export interface GetIamAccessKeysArgs {
    accessKeyProjectType?: string;
    accessKeyState?: string;
    activeYn?: boolean;
    filters?: inputs.GetIamAccessKeysFilter[];
    id?: string;
    projectId?: string;
    projectName?: string;
}

/**
 * A collection of values returned by getIamAccessKeys.
 */
export interface GetIamAccessKeysResult {
    readonly accessKeyProjectType?: string;
    readonly accessKeyState?: string;
    readonly activeYn?: boolean;
    readonly contents: outputs.GetIamAccessKeysContent[];
    readonly filters?: outputs.GetIamAccessKeysFilter[];
    readonly id: string;
    readonly projectId?: string;
    readonly projectName?: string;
    readonly totalCount: number;
}
export function getIamAccessKeysOutput(args?: GetIamAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => getIamAccessKeys(a, opts))
}

/**
 * A collection of arguments for invoking getIamAccessKeys.
 */
export interface GetIamAccessKeysOutputArgs {
    accessKeyProjectType?: pulumi.Input<string>;
    accessKeyState?: pulumi.Input<string>;
    activeYn?: pulumi.Input<boolean>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetIamAccessKeysFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
}
