// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGtmCidrmap(args: GetGtmCidrmapArgs, opts?: pulumi.InvokeOptions): Promise<GetGtmCidrmapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getGtmCidrmap:getGtmCidrmap", {
        "assignments": args.assignments,
        "defaultDatacenter": args.defaultDatacenter,
        "domain": args.domain,
        "links": args.links,
        "mapName": args.mapName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGtmCidrmap.
 */
export interface GetGtmCidrmapArgs {
    assignments?: inputs.GetGtmCidrmapAssignment[];
    defaultDatacenter?: inputs.GetGtmCidrmapDefaultDatacenter;
    domain: string;
    links?: inputs.GetGtmCidrmapLink[];
    mapName: string;
}

/**
 * A collection of values returned by getGtmCidrmap.
 */
export interface GetGtmCidrmapResult {
    readonly assignments?: outputs.GetGtmCidrmapAssignment[];
    readonly defaultDatacenter?: outputs.GetGtmCidrmapDefaultDatacenter;
    readonly domain: string;
    /**
     * @deprecated Deprecated
     */
    readonly id: string;
    readonly links?: outputs.GetGtmCidrmapLink[];
    readonly mapName: string;
}
export function getGtmCidrmapOutput(args: GetGtmCidrmapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGtmCidrmapResult> {
    return pulumi.output(args).apply((a: any) => getGtmCidrmap(a, opts))
}

/**
 * A collection of arguments for invoking getGtmCidrmap.
 */
export interface GetGtmCidrmapOutputArgs {
    assignments?: pulumi.Input<pulumi.Input<inputs.GetGtmCidrmapAssignmentArgs>[]>;
    defaultDatacenter?: pulumi.Input<inputs.GetGtmCidrmapDefaultDatacenterArgs>;
    domain: pulumi.Input<string>;
    links?: pulumi.Input<pulumi.Input<inputs.GetGtmCidrmapLinkArgs>[]>;
    mapName: pulumi.Input<string>;
}
