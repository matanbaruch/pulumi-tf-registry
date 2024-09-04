// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQueryParca(args: GetQueryParcaArgs, opts?: pulumi.InvokeOptions): Promise<GetQueryParcaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("schemas:index/getQueryParca:getQueryParca", {
        "hide": args.hide,
        "labelSelector": args.labelSelector,
        "profileTypeId": args.profileTypeId,
        "queryType": args.queryType,
        "refId": args.refId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQueryParca.
 */
export interface GetQueryParcaArgs {
    hide?: boolean;
    labelSelector?: string;
    profileTypeId: string;
    queryType?: string;
    refId: string;
}

/**
 * A collection of values returned by getQueryParca.
 */
export interface GetQueryParcaResult {
    readonly hide?: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly labelSelector: string;
    readonly profileTypeId: string;
    readonly queryType?: string;
    readonly refId: string;
    readonly renderedJson: string;
}
export function getQueryParcaOutput(args: GetQueryParcaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQueryParcaResult> {
    return pulumi.output(args).apply((a: any) => getQueryParca(a, opts))
}

/**
 * A collection of arguments for invoking getQueryParca.
 */
export interface GetQueryParcaOutputArgs {
    hide?: pulumi.Input<boolean>;
    labelSelector?: pulumi.Input<string>;
    profileTypeId: pulumi.Input<string>;
    queryType?: pulumi.Input<string>;
    refId: pulumi.Input<string>;
}
