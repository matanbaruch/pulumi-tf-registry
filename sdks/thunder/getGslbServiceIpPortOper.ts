// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGslbServiceIpPortOper(args: GetGslbServiceIpPortOperArgs, opts?: pulumi.InvokeOptions): Promise<GetGslbServiceIpPortOperResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getGslbServiceIpPortOper:getGslbServiceIpPortOper", {
        "id": args.id,
        "nodeName": args.nodeName,
        "oper": args.oper,
        "portNum": args.portNum,
        "portProto": args.portProto,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGslbServiceIpPortOper.
 */
export interface GetGslbServiceIpPortOperArgs {
    id?: string;
    nodeName: string;
    oper?: inputs.GetGslbServiceIpPortOperOper;
    portNum: number;
    portProto: string;
}

/**
 * A collection of values returned by getGslbServiceIpPortOper.
 */
export interface GetGslbServiceIpPortOperResult {
    readonly id: string;
    readonly nodeName: string;
    readonly oper?: outputs.GetGslbServiceIpPortOperOper;
    readonly portNum: number;
    readonly portProto: string;
}
export function getGslbServiceIpPortOperOutput(args: GetGslbServiceIpPortOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGslbServiceIpPortOperResult> {
    return pulumi.output(args).apply((a: any) => getGslbServiceIpPortOper(a, opts))
}

/**
 * A collection of arguments for invoking getGslbServiceIpPortOper.
 */
export interface GetGslbServiceIpPortOperOutputArgs {
    id?: pulumi.Input<string>;
    nodeName: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetGslbServiceIpPortOperOperArgs>;
    portNum: pulumi.Input<number>;
    portProto: pulumi.Input<string>;
}
