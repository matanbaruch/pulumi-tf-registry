// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getL2vpnPwClass(args: GetL2vpnPwClassArgs, opts?: pulumi.InvokeOptions): Promise<GetL2vpnPwClassResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getL2vpnPwClass:getL2vpnPwClass", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getL2vpnPwClass.
 */
export interface GetL2vpnPwClassArgs {
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getL2vpnPwClass.
 */
export interface GetL2vpnPwClassResult {
    readonly device?: string;
    readonly encapsulationMpls: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelBoth: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelBothStatic: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelCodeOne7: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelReceive: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelReceiveStatic: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelTransmit: boolean;
    readonly encapsulationMplsLoadBalancingFlowLabelTransmitStatic: boolean;
    readonly encapsulationMplsLoadBalancingPwLabel: boolean;
    readonly encapsulationMplsTransportModeEthernet: boolean;
    readonly encapsulationMplsTransportModePassthrough: boolean;
    readonly encapsulationMplsTransportModeVlan: boolean;
    readonly id: string;
    readonly name: string;
}
export function getL2vpnPwClassOutput(args: GetL2vpnPwClassOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL2vpnPwClassResult> {
    return pulumi.output(args).apply((a: any) => getL2vpnPwClass(a, opts))
}

/**
 * A collection of arguments for invoking getL2vpnPwClass.
 */
export interface GetL2vpnPwClassOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
