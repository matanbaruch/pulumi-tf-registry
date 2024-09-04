// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRpRecord(args: GetRpRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetRpRecordResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("constellix:index/getRpRecord:getRpRecord", {
        "domainId": args.domainId,
        "gtdRegion": args.gtdRegion,
        "id": args.id,
        "name": args.name,
        "noanswer": args.noanswer,
        "note": args.note,
        "parent": args.parent,
        "parentid": args.parentid,
        "roundrobins": args.roundrobins,
        "source": args.source,
        "sourceType": args.sourceType,
        "ttl": args.ttl,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRpRecord.
 */
export interface GetRpRecordArgs {
    domainId: string;
    gtdRegion?: number;
    id?: string;
    name: string;
    noanswer?: boolean;
    note?: string;
    parent?: string;
    parentid?: number;
    roundrobins?: inputs.GetRpRecordRoundrobin[];
    source?: string;
    sourceType: string;
    ttl?: number;
    type?: string;
}

/**
 * A collection of values returned by getRpRecord.
 */
export interface GetRpRecordResult {
    readonly domainId: string;
    readonly gtdRegion: number;
    readonly id: string;
    readonly name: string;
    readonly noanswer: boolean;
    readonly note: string;
    readonly parent: string;
    readonly parentid: number;
    readonly roundrobins?: outputs.GetRpRecordRoundrobin[];
    readonly source: string;
    readonly sourceType: string;
    readonly ttl: number;
    readonly type: string;
}
export function getRpRecordOutput(args: GetRpRecordOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRpRecordResult> {
    return pulumi.output(args).apply((a: any) => getRpRecord(a, opts))
}

/**
 * A collection of arguments for invoking getRpRecord.
 */
export interface GetRpRecordOutputArgs {
    domainId: pulumi.Input<string>;
    gtdRegion?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    noanswer?: pulumi.Input<boolean>;
    note?: pulumi.Input<string>;
    parent?: pulumi.Input<string>;
    parentid?: pulumi.Input<number>;
    roundrobins?: pulumi.Input<pulumi.Input<inputs.GetRpRecordRoundrobinArgs>[]>;
    source?: pulumi.Input<string>;
    sourceType: pulumi.Input<string>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
