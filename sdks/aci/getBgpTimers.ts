// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBgpTimers(args: GetBgpTimersArgs, opts?: pulumi.InvokeOptions): Promise<GetBgpTimersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getBgpTimers:getBgpTimers", {
        "annotation": args.annotation,
        "description": args.description,
        "grCtrl": args.grCtrl,
        "holdIntvl": args.holdIntvl,
        "id": args.id,
        "kaIntvl": args.kaIntvl,
        "maxAsLimit": args.maxAsLimit,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "staleIntvl": args.staleIntvl,
        "tenantDn": args.tenantDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBgpTimers.
 */
export interface GetBgpTimersArgs {
    annotation?: string;
    description?: string;
    grCtrl?: string;
    holdIntvl?: string;
    id?: string;
    kaIntvl?: string;
    maxAsLimit?: string;
    name: string;
    nameAlias?: string;
    staleIntvl?: string;
    tenantDn: string;
}

/**
 * A collection of values returned by getBgpTimers.
 */
export interface GetBgpTimersResult {
    readonly annotation: string;
    readonly description: string;
    readonly grCtrl: string;
    readonly holdIntvl: string;
    readonly id: string;
    readonly kaIntvl: string;
    readonly maxAsLimit: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly staleIntvl: string;
    readonly tenantDn: string;
}
export function getBgpTimersOutput(args: GetBgpTimersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBgpTimersResult> {
    return pulumi.output(args).apply((a: any) => getBgpTimers(a, opts))
}

/**
 * A collection of arguments for invoking getBgpTimers.
 */
export interface GetBgpTimersOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    grCtrl?: pulumi.Input<string>;
    holdIntvl?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    kaIntvl?: pulumi.Input<string>;
    maxAsLimit?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    staleIntvl?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
}
