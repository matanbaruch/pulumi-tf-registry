// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServiceFeatureProfile(args: GetServiceFeatureProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceFeatureProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getServiceFeatureProfile:getServiceFeatureProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceFeatureProfile.
 */
export interface GetServiceFeatureProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getServiceFeatureProfile.
 */
export interface GetServiceFeatureProfileResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
}
export function getServiceFeatureProfileOutput(args: GetServiceFeatureProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceFeatureProfileResult> {
    return pulumi.output(args).apply((a: any) => getServiceFeatureProfile(a, opts))
}

/**
 * A collection of arguments for invoking getServiceFeatureProfile.
 */
export interface GetServiceFeatureProfileOutputArgs {
    id: pulumi.Input<string>;
}
