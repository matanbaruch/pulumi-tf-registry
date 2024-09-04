// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlProxy extends pulumi.CustomResource {
    /**
     * Get an existing MysqlProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlProxyState, opts?: pulumi.CustomResourceOptions): MysqlProxy {
        return new MysqlProxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mysqlProxy:MysqlProxy';

    /**
     * Returns true if the given object is an instance of MysqlProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlProxy.__pulumiType;
    }

    /**
     * Connection Pool Threshold.
     */
    public readonly connectionPoolLimit!: pulumi.Output<number | undefined>;
    /**
     * Describe.
     */
    public readonly desc!: pulumi.Output<string | undefined>;
    /**
     * Instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Proxy address id.
     */
    public /*out*/ readonly proxyAddressId!: pulumi.Output<string>;
    /**
     * Proxy group id.
     */
    public /*out*/ readonly proxyGroupId!: pulumi.Output<string>;
    /**
     * Node specification configuration.
     */
    public readonly proxyNodeCustoms!: pulumi.Output<outputs.MysqlProxyProxyNodeCustom[]>;
    /**
     * The current version of the database agent. No need to fill in when creating.
     */
    public readonly proxyVersion!: pulumi.Output<string>;
    /**
     * Security group.
     */
    public readonly securityGroups!: pulumi.Output<string[] | undefined>;
    /**
     * Subnet id.
     */
    public readonly uniqSubnetId!: pulumi.Output<string>;
    /**
     * Vpc id.
     */
    public readonly uniqVpcId!: pulumi.Output<string>;
    /**
     * Upgrade time: nowTime (upgrade completed) timeWindow (instance maintenance time), Required when modifying the agent
     * version, No need to fill in when creating.
     */
    public readonly upgradeTime!: pulumi.Output<string | undefined>;
    /**
     * IP address.
     */
    public readonly vip!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly vport!: pulumi.Output<number>;

    /**
     * Create a MysqlProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlProxyArgs | MysqlProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlProxyState | undefined;
            resourceInputs["connectionPoolLimit"] = state ? state.connectionPoolLimit : undefined;
            resourceInputs["desc"] = state ? state.desc : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["proxyAddressId"] = state ? state.proxyAddressId : undefined;
            resourceInputs["proxyGroupId"] = state ? state.proxyGroupId : undefined;
            resourceInputs["proxyNodeCustoms"] = state ? state.proxyNodeCustoms : undefined;
            resourceInputs["proxyVersion"] = state ? state.proxyVersion : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["uniqSubnetId"] = state ? state.uniqSubnetId : undefined;
            resourceInputs["uniqVpcId"] = state ? state.uniqVpcId : undefined;
            resourceInputs["upgradeTime"] = state ? state.upgradeTime : undefined;
            resourceInputs["vip"] = state ? state.vip : undefined;
            resourceInputs["vport"] = state ? state.vport : undefined;
        } else {
            const args = argsOrState as MysqlProxyArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.proxyNodeCustoms === undefined) && !opts.urn) {
                throw new Error("Missing required property 'proxyNodeCustoms'");
            }
            if ((!args || args.uniqSubnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uniqSubnetId'");
            }
            if ((!args || args.uniqVpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uniqVpcId'");
            }
            resourceInputs["connectionPoolLimit"] = args ? args.connectionPoolLimit : undefined;
            resourceInputs["desc"] = args ? args.desc : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["proxyNodeCustoms"] = args ? args.proxyNodeCustoms : undefined;
            resourceInputs["proxyVersion"] = args ? args.proxyVersion : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["uniqSubnetId"] = args ? args.uniqSubnetId : undefined;
            resourceInputs["uniqVpcId"] = args ? args.uniqVpcId : undefined;
            resourceInputs["upgradeTime"] = args ? args.upgradeTime : undefined;
            resourceInputs["vip"] = args ? args.vip : undefined;
            resourceInputs["vport"] = args ? args.vport : undefined;
            resourceInputs["proxyAddressId"] = undefined /*out*/;
            resourceInputs["proxyGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlProxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlProxy resources.
 */
export interface MysqlProxyState {
    /**
     * Connection Pool Threshold.
     */
    connectionPoolLimit?: pulumi.Input<number>;
    /**
     * Describe.
     */
    desc?: pulumi.Input<string>;
    /**
     * Instance id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Proxy address id.
     */
    proxyAddressId?: pulumi.Input<string>;
    /**
     * Proxy group id.
     */
    proxyGroupId?: pulumi.Input<string>;
    /**
     * Node specification configuration.
     */
    proxyNodeCustoms?: pulumi.Input<pulumi.Input<inputs.MysqlProxyProxyNodeCustom>[]>;
    /**
     * The current version of the database agent. No need to fill in when creating.
     */
    proxyVersion?: pulumi.Input<string>;
    /**
     * Security group.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Subnet id.
     */
    uniqSubnetId?: pulumi.Input<string>;
    /**
     * Vpc id.
     */
    uniqVpcId?: pulumi.Input<string>;
    /**
     * Upgrade time: nowTime (upgrade completed) timeWindow (instance maintenance time), Required when modifying the agent
     * version, No need to fill in when creating.
     */
    upgradeTime?: pulumi.Input<string>;
    /**
     * IP address.
     */
    vip?: pulumi.Input<string>;
    /**
     * Port.
     */
    vport?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MysqlProxy resource.
 */
export interface MysqlProxyArgs {
    /**
     * Connection Pool Threshold.
     */
    connectionPoolLimit?: pulumi.Input<number>;
    /**
     * Describe.
     */
    desc?: pulumi.Input<string>;
    /**
     * Instance id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Node specification configuration.
     */
    proxyNodeCustoms: pulumi.Input<pulumi.Input<inputs.MysqlProxyProxyNodeCustom>[]>;
    /**
     * The current version of the database agent. No need to fill in when creating.
     */
    proxyVersion?: pulumi.Input<string>;
    /**
     * Security group.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Subnet id.
     */
    uniqSubnetId: pulumi.Input<string>;
    /**
     * Vpc id.
     */
    uniqVpcId: pulumi.Input<string>;
    /**
     * Upgrade time: nowTime (upgrade completed) timeWindow (instance maintenance time), Required when modifying the agent
     * version, No need to fill in when creating.
     */
    upgradeTime?: pulumi.Input<string>;
    /**
     * IP address.
     */
    vip?: pulumi.Input<string>;
    /**
     * Port.
     */
    vport?: pulumi.Input<number>;
}
