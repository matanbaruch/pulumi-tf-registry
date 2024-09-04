// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUpgradePrepareReady(args: GetUpgradePrepareReadyArgs, opts?: pulumi.InvokeOptions): Promise<GetUpgradePrepareReadyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getUpgradePrepareReady:getUpgradePrepareReady", {
        "id": args.id,
        "upgradePrepareId": args.upgradePrepareId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUpgradePrepareReady.
 */
export interface GetUpgradePrepareReadyArgs {
    id?: string;
    upgradePrepareId: string;
}

/**
 * A collection of values returned by getUpgradePrepareReady.
 */
export interface GetUpgradePrepareReadyResult {
    readonly id: string;
    readonly upgradePrepareId: string;
}
export function getUpgradePrepareReadyOutput(args: GetUpgradePrepareReadyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUpgradePrepareReadyResult> {
    return pulumi.output(args).apply((a: any) => getUpgradePrepareReady(a, opts))
}

/**
 * A collection of arguments for invoking getUpgradePrepareReady.
 */
export interface GetUpgradePrepareReadyOutputArgs {
    id?: pulumi.Input<string>;
    upgradePrepareId: pulumi.Input<string>;
}
