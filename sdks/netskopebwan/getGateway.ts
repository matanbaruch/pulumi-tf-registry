// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGateway(args?: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netskopebwan:index/getGateway:getGateway", {
        "activated": args.activated,
        "assignedPolicy": args.assignedPolicy,
        "bgpConfigurations": args.bgpConfigurations,
        "createdBy": args.createdBy,
        "dateCreated": args.dateCreated,
        "dateModified": args.dateModified,
        "description": args.description,
        "id": args.id,
        "interfaces": args.interfaces,
        "model": args.model,
        "modifiedBy": args.modifiedBy,
        "mqttConfiguration": args.mqttConfiguration,
        "name": args.name,
        "one2OneNatRules": args.one2OneNatRules,
        "overlayConfiguration": args.overlayConfiguration,
        "portForwardingNatRules": args.portForwardingNatRules,
        "psk": args.psk,
        "publicKey": args.publicKey,
        "role": args.role,
        "serialnumber": args.serialnumber,
        "staticRoutes": args.staticRoutes,
        "swmanifest": args.swmanifest,
        "swversion": args.swversion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGateway.
 */
export interface GetGatewayArgs {
    activated?: boolean;
    assignedPolicy?: inputs.GetGatewayAssignedPolicy;
    bgpConfigurations?: inputs.GetGatewayBgpConfiguration[];
    createdBy?: inputs.GetGatewayCreatedBy;
    dateCreated?: string;
    dateModified?: string;
    description?: string;
    id?: string;
    interfaces?: inputs.GetGatewayInterface[];
    model?: string;
    modifiedBy?: inputs.GetGatewayModifiedBy;
    mqttConfiguration?: inputs.GetGatewayMqttConfiguration;
    name?: string;
    one2OneNatRules?: inputs.GetGatewayOne2OneNatRule[];
    overlayConfiguration?: inputs.GetGatewayOverlayConfiguration;
    portForwardingNatRules?: inputs.GetGatewayPortForwardingNatRule[];
    psk?: string;
    publicKey?: string;
    role?: string;
    serialnumber?: string;
    staticRoutes?: inputs.GetGatewayStaticRoute[];
    swmanifest?: string;
    swversion?: string;
}

/**
 * A collection of values returned by getGateway.
 */
export interface GetGatewayResult {
    readonly activated: boolean;
    readonly assignedPolicy?: outputs.GetGatewayAssignedPolicy;
    readonly bgpConfigurations?: outputs.GetGatewayBgpConfiguration[];
    readonly createdBy?: outputs.GetGatewayCreatedBy;
    readonly dateCreated: string;
    readonly dateModified: string;
    readonly description: string;
    readonly id: string;
    readonly interfaces?: outputs.GetGatewayInterface[];
    readonly model: string;
    readonly modifiedBy?: outputs.GetGatewayModifiedBy;
    readonly mqttConfiguration?: outputs.GetGatewayMqttConfiguration;
    readonly name: string;
    readonly one2OneNatRules?: outputs.GetGatewayOne2OneNatRule[];
    readonly overlayConfiguration?: outputs.GetGatewayOverlayConfiguration;
    readonly portForwardingNatRules?: outputs.GetGatewayPortForwardingNatRule[];
    readonly psk: string;
    readonly publicKey: string;
    readonly role: string;
    readonly serialnumber: string;
    readonly staticRoutes?: outputs.GetGatewayStaticRoute[];
    readonly swmanifest: string;
    readonly swversion: string;
}
export function getGatewayOutput(args?: GetGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayResult> {
    return pulumi.output(args).apply((a: any) => getGateway(a, opts))
}

/**
 * A collection of arguments for invoking getGateway.
 */
export interface GetGatewayOutputArgs {
    activated?: pulumi.Input<boolean>;
    assignedPolicy?: pulumi.Input<inputs.GetGatewayAssignedPolicyArgs>;
    bgpConfigurations?: pulumi.Input<pulumi.Input<inputs.GetGatewayBgpConfigurationArgs>[]>;
    createdBy?: pulumi.Input<inputs.GetGatewayCreatedByArgs>;
    dateCreated?: pulumi.Input<string>;
    dateModified?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.GetGatewayInterfaceArgs>[]>;
    model?: pulumi.Input<string>;
    modifiedBy?: pulumi.Input<inputs.GetGatewayModifiedByArgs>;
    mqttConfiguration?: pulumi.Input<inputs.GetGatewayMqttConfigurationArgs>;
    name?: pulumi.Input<string>;
    one2OneNatRules?: pulumi.Input<pulumi.Input<inputs.GetGatewayOne2OneNatRuleArgs>[]>;
    overlayConfiguration?: pulumi.Input<inputs.GetGatewayOverlayConfigurationArgs>;
    portForwardingNatRules?: pulumi.Input<pulumi.Input<inputs.GetGatewayPortForwardingNatRuleArgs>[]>;
    psk?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    serialnumber?: pulumi.Input<string>;
    staticRoutes?: pulumi.Input<pulumi.Input<inputs.GetGatewayStaticRouteArgs>[]>;
    swmanifest?: pulumi.Input<string>;
    swversion?: pulumi.Input<string>;
}
