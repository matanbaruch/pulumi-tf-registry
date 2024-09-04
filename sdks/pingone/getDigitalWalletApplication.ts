// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDigitalWalletApplication(args: GetDigitalWalletApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetDigitalWalletApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getDigitalWalletApplication:getDigitalWalletApplication", {
        "applicationId": args.applicationId,
        "digitalWalletId": args.digitalWalletId,
        "environmentId": args.environmentId,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDigitalWalletApplication.
 */
export interface GetDigitalWalletApplicationArgs {
    applicationId?: string;
    digitalWalletId?: string;
    environmentId: string;
    name?: string;
}

/**
 * A collection of values returned by getDigitalWalletApplication.
 */
export interface GetDigitalWalletApplicationResult {
    readonly appOpenUrl: string;
    readonly applicationId?: string;
    readonly digitalWalletId?: string;
    readonly environmentId: string;
    readonly id: string;
    readonly name?: string;
}
export function getDigitalWalletApplicationOutput(args: GetDigitalWalletApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDigitalWalletApplicationResult> {
    return pulumi.output(args).apply((a: any) => getDigitalWalletApplication(a, opts))
}

/**
 * A collection of arguments for invoking getDigitalWalletApplication.
 */
export interface GetDigitalWalletApplicationOutputArgs {
    applicationId?: pulumi.Input<string>;
    digitalWalletId?: pulumi.Input<string>;
    environmentId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
