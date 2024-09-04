// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClbInstanceByCertId(args: GetClbInstanceByCertIdArgs, opts?: pulumi.InvokeOptions): Promise<GetClbInstanceByCertIdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getClbInstanceByCertId:getClbInstanceByCertId", {
        "certIds": args.certIds,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClbInstanceByCertId.
 */
export interface GetClbInstanceByCertIdArgs {
    certIds: string[];
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getClbInstanceByCertId.
 */
export interface GetClbInstanceByCertIdResult {
    readonly certIds: string[];
    readonly certSets: outputs.GetClbInstanceByCertIdCertSet[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getClbInstanceByCertIdOutput(args: GetClbInstanceByCertIdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClbInstanceByCertIdResult> {
    return pulumi.output(args).apply((a: any) => getClbInstanceByCertId(a, opts))
}

/**
 * A collection of arguments for invoking getClbInstanceByCertId.
 */
export interface GetClbInstanceByCertIdOutputArgs {
    certIds: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
