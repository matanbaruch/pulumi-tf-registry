// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServiceMeshIngressGatewayRouteTable(args: GetServiceMeshIngressGatewayRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceMeshIngressGatewayRouteTableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getServiceMeshIngressGatewayRouteTable:getServiceMeshIngressGatewayRouteTable", {
        "ingressGatewayRouteTableId": args.ingressGatewayRouteTableId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceMeshIngressGatewayRouteTable.
 */
export interface GetServiceMeshIngressGatewayRouteTableArgs {
    ingressGatewayRouteTableId: string;
}

/**
 * A collection of values returned by getServiceMeshIngressGatewayRouteTable.
 */
export interface GetServiceMeshIngressGatewayRouteTableResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly ingressGatewayId: string;
    readonly ingressGatewayRouteTableId: string;
    readonly lifecycleDetails: string;
    readonly name: string;
    readonly priority: number;
    readonly routeRules: outputs.GetServiceMeshIngressGatewayRouteTableRouteRule[];
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getServiceMeshIngressGatewayRouteTableOutput(args: GetServiceMeshIngressGatewayRouteTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceMeshIngressGatewayRouteTableResult> {
    return pulumi.output(args).apply((a: any) => getServiceMeshIngressGatewayRouteTable(a, opts))
}

/**
 * A collection of arguments for invoking getServiceMeshIngressGatewayRouteTable.
 */
export interface GetServiceMeshIngressGatewayRouteTableOutputArgs {
    ingressGatewayRouteTableId: pulumi.Input<string>;
}
