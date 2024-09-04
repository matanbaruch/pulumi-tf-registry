// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkFicGatewayV2(args?: GetNetworkFicGatewayV2Args, opts?: pulumi.InvokeOptions): Promise<GetNetworkFicGatewayV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecl:index/getNetworkFicGatewayV2:getNetworkFicGatewayV2", {
        "description": args.description,
        "ficGatewayId": args.ficGatewayId,
        "ficServiceId": args.ficServiceId,
        "id": args.id,
        "name": args.name,
        "qosOptionId": args.qosOptionId,
        "status": args.status,
        "tenantId": args.tenantId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkFicGatewayV2.
 */
export interface GetNetworkFicGatewayV2Args {
    description?: string;
    ficGatewayId?: string;
    ficServiceId?: string;
    id?: string;
    name?: string;
    qosOptionId?: string;
    status?: string;
    tenantId?: string;
}

/**
 * A collection of values returned by getNetworkFicGatewayV2.
 */
export interface GetNetworkFicGatewayV2Result {
    readonly description: string;
    readonly ficGatewayId: string;
    readonly ficServiceId: string;
    readonly id: string;
    readonly name: string;
    readonly qosOptionId: string;
    readonly status: string;
    readonly tenantId: string;
}
export function getNetworkFicGatewayV2Output(args?: GetNetworkFicGatewayV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFicGatewayV2Result> {
    return pulumi.output(args).apply((a: any) => getNetworkFicGatewayV2(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkFicGatewayV2.
 */
export interface GetNetworkFicGatewayV2OutputArgs {
    description?: pulumi.Input<string>;
    ficGatewayId?: pulumi.Input<string>;
    ficServiceId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    qosOptionId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
}
