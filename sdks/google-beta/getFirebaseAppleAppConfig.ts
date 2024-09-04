// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirebaseAppleAppConfig(args: GetFirebaseAppleAppConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetFirebaseAppleAppConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getFirebaseAppleAppConfig:getFirebaseAppleAppConfig", {
        "appId": args.appId,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirebaseAppleAppConfig.
 */
export interface GetFirebaseAppleAppConfigArgs {
    appId: string;
    project?: string;
}

/**
 * A collection of values returned by getFirebaseAppleAppConfig.
 */
export interface GetFirebaseAppleAppConfigResult {
    readonly appId: string;
    readonly configFileContents: string;
    readonly configFilename: string;
    readonly id: string;
    readonly project?: string;
}
export function getFirebaseAppleAppConfigOutput(args: GetFirebaseAppleAppConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirebaseAppleAppConfigResult> {
    return pulumi.output(args).apply((a: any) => getFirebaseAppleAppConfig(a, opts))
}

/**
 * A collection of arguments for invoking getFirebaseAppleAppConfig.
 */
export interface GetFirebaseAppleAppConfigOutputArgs {
    appId: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
