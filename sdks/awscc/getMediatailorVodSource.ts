// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMediatailorVodSource(args: GetMediatailorVodSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetMediatailorVodSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediatailorVodSource:getMediatailorVodSource", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediatailorVodSource.
 */
export interface GetMediatailorVodSourceArgs {
    id: string;
}

/**
 * A collection of values returned by getMediatailorVodSource.
 */
export interface GetMediatailorVodSourceResult {
    readonly arn: string;
    readonly httpPackageConfigurations: outputs.GetMediatailorVodSourceHttpPackageConfiguration[];
    readonly id: string;
    readonly sourceLocationName: string;
    readonly tags: outputs.GetMediatailorVodSourceTag[];
    readonly vodSourceName: string;
}
export function getMediatailorVodSourceOutput(args: GetMediatailorVodSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediatailorVodSourceResult> {
    return pulumi.output(args).apply((a: any) => getMediatailorVodSource(a, opts))
}

/**
 * A collection of arguments for invoking getMediatailorVodSource.
 */
export interface GetMediatailorVodSourceOutputArgs {
    id: pulumi.Input<string>;
}
