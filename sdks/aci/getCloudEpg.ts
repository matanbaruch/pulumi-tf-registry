// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudEpg(args: GetCloudEpgArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudEpgResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getCloudEpg:getCloudEpg", {
        "annotation": args.annotation,
        "cloudApplicationcontainerDn": args.cloudApplicationcontainerDn,
        "description": args.description,
        "exceptionTag": args.exceptionTag,
        "floodOnEncap": args.floodOnEncap,
        "id": args.id,
        "matchT": args.matchT,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "prefGrMemb": args.prefGrMemb,
        "prio": args.prio,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudEpg.
 */
export interface GetCloudEpgArgs {
    annotation?: string;
    cloudApplicationcontainerDn: string;
    description?: string;
    exceptionTag?: string;
    floodOnEncap?: string;
    id?: string;
    matchT?: string;
    name: string;
    nameAlias?: string;
    prefGrMemb?: string;
    prio?: string;
}

/**
 * A collection of values returned by getCloudEpg.
 */
export interface GetCloudEpgResult {
    readonly annotation: string;
    readonly cloudApplicationcontainerDn: string;
    readonly description: string;
    readonly exceptionTag: string;
    readonly floodOnEncap: string;
    readonly id: string;
    readonly matchT: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly prefGrMemb: string;
    readonly prio: string;
}
export function getCloudEpgOutput(args: GetCloudEpgOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudEpgResult> {
    return pulumi.output(args).apply((a: any) => getCloudEpg(a, opts))
}

/**
 * A collection of arguments for invoking getCloudEpg.
 */
export interface GetCloudEpgOutputArgs {
    annotation?: pulumi.Input<string>;
    cloudApplicationcontainerDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    exceptionTag?: pulumi.Input<string>;
    floodOnEncap?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    matchT?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    prefGrMemb?: pulumi.Input<string>;
    prio?: pulumi.Input<string>;
}
