// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAccessGroup(args: GetAccessGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getAccessGroup:getAccessGroup", {
        "accessPortSelectorDn": args.accessPortSelectorDn,
        "annotation": args.annotation,
        "fexId": args.fexId,
        "id": args.id,
        "tdn": args.tdn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccessGroup.
 */
export interface GetAccessGroupArgs {
    accessPortSelectorDn: string;
    annotation?: string;
    fexId?: string;
    id?: string;
    tdn?: string;
}

/**
 * A collection of values returned by getAccessGroup.
 */
export interface GetAccessGroupResult {
    readonly accessPortSelectorDn: string;
    readonly annotation: string;
    readonly fexId: string;
    readonly id: string;
    readonly tdn: string;
}
export function getAccessGroupOutput(args: GetAccessGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessGroupResult> {
    return pulumi.output(args).apply((a: any) => getAccessGroup(a, opts))
}

/**
 * A collection of arguments for invoking getAccessGroup.
 */
export interface GetAccessGroupOutputArgs {
    accessPortSelectorDn: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    fexId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tdn?: pulumi.Input<string>;
}
