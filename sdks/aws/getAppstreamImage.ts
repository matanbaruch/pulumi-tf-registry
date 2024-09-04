// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppstreamImage(args?: GetAppstreamImageArgs, opts?: pulumi.InvokeOptions): Promise<GetAppstreamImageResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getAppstreamImage:getAppstreamImage", {
        "arn": args.arn,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "nameRegex": args.nameRegex,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppstreamImage.
 */
export interface GetAppstreamImageArgs {
    arn?: string;
    mostRecent?: boolean;
    name?: string;
    nameRegex?: string;
    type?: string;
}

/**
 * A collection of values returned by getAppstreamImage.
 */
export interface GetAppstreamImageResult {
    readonly applications: outputs.GetAppstreamImageApplication[];
    readonly appstreamAgentVersion: string;
    readonly arn: string;
    readonly baseImageArn: string;
    readonly createdTime: string;
    readonly description: string;
    readonly displayName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly imageBuilderName: string;
    readonly imageBuilderSupported: boolean;
    readonly imagePermissions: outputs.GetAppstreamImageImagePermission[];
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly nameRegex?: string;
    readonly platform: string;
    readonly publicBaseImageReleasedDate: string;
    readonly state: string;
    readonly stateChangeReasons: outputs.GetAppstreamImageStateChangeReason[];
    readonly type?: string;
}
export function getAppstreamImageOutput(args?: GetAppstreamImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppstreamImageResult> {
    return pulumi.output(args).apply((a: any) => getAppstreamImage(a, opts))
}

/**
 * A collection of arguments for invoking getAppstreamImage.
 */
export interface GetAppstreamImageOutputArgs {
    arn?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
