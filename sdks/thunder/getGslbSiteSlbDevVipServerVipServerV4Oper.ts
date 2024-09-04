// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGslbSiteSlbDevVipServerVipServerV4Oper(args: GetGslbSiteSlbDevVipServerVipServerV4OperArgs, opts?: pulumi.InvokeOptions): Promise<GetGslbSiteSlbDevVipServerVipServerV4OperResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getGslbSiteSlbDevVipServerVipServerV4Oper:getGslbSiteSlbDevVipServerVipServerV4Oper", {
        "deviceName": args.deviceName,
        "id": args.id,
        "ipv4": args.ipv4,
        "oper": args.oper,
        "siteName": args.siteName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGslbSiteSlbDevVipServerVipServerV4Oper.
 */
export interface GetGslbSiteSlbDevVipServerVipServerV4OperArgs {
    deviceName: string;
    id?: string;
    ipv4: string;
    oper?: inputs.GetGslbSiteSlbDevVipServerVipServerV4OperOper;
    siteName: string;
}

/**
 * A collection of values returned by getGslbSiteSlbDevVipServerVipServerV4Oper.
 */
export interface GetGslbSiteSlbDevVipServerVipServerV4OperResult {
    readonly deviceName: string;
    readonly id: string;
    readonly ipv4: string;
    readonly oper?: outputs.GetGslbSiteSlbDevVipServerVipServerV4OperOper;
    readonly siteName: string;
}
export function getGslbSiteSlbDevVipServerVipServerV4OperOutput(args: GetGslbSiteSlbDevVipServerVipServerV4OperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGslbSiteSlbDevVipServerVipServerV4OperResult> {
    return pulumi.output(args).apply((a: any) => getGslbSiteSlbDevVipServerVipServerV4Oper(a, opts))
}

/**
 * A collection of arguments for invoking getGslbSiteSlbDevVipServerVipServerV4Oper.
 */
export interface GetGslbSiteSlbDevVipServerVipServerV4OperOutputArgs {
    deviceName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipv4: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetGslbSiteSlbDevVipServerVipServerV4OperOperArgs>;
    siteName: pulumi.Input<string>;
}
