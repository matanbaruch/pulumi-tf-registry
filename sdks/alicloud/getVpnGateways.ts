// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnGateways(args?: GetVpnGatewaysArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewaysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getVpnGateways:getVpnGateways", {
        "businessStatus": args.businessStatus,
        "enableIpsec": args.enableIpsec,
        "id": args.id,
        "ids": args.ids,
        "includeReservationData": args.includeReservationData,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnGateways.
 */
export interface GetVpnGatewaysArgs {
    businessStatus?: string;
    /**
     * @deprecated Deprecated
     */
    enableIpsec?: boolean;
    id?: string;
    ids?: string[];
    includeReservationData?: boolean;
    nameRegex?: string;
    outputFile?: string;
    status?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getVpnGateways.
 */
export interface GetVpnGatewaysResult {
    readonly businessStatus?: string;
    /**
     * @deprecated Deprecated
     */
    readonly enableIpsec?: boolean;
    readonly gateways: outputs.GetVpnGatewaysGateway[];
    readonly id: string;
    readonly ids: string[];
    readonly includeReservationData?: boolean;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly status?: string;
    readonly vpcId?: string;
}
export function getVpnGatewaysOutput(args?: GetVpnGatewaysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnGatewaysResult> {
    return pulumi.output(args).apply((a: any) => getVpnGateways(a, opts))
}

/**
 * A collection of arguments for invoking getVpnGateways.
 */
export interface GetVpnGatewaysOutputArgs {
    businessStatus?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    enableIpsec?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    includeReservationData?: pulumi.Input<boolean>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
