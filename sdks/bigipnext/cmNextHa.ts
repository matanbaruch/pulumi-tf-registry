// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CmNextHa extends pulumi.CustomResource {
    /**
     * Get an existing CmNextHa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmNextHaState, opts?: pulumi.CustomResourceOptions): CmNextHa {
        return new CmNextHa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigipnext:index/cmNextHa:CmNextHa';

    /**
     * Returns true if the given object is an instance of CmNextHa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CmNextHa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CmNextHa.__pulumiType;
    }

    /**
     * The HA control plane IP address on active node.
     */
    public readonly activeNodeControlPlaneIp!: pulumi.Output<string>;
    /**
     * The HA data plane IP address on active node.
     */
    public readonly activeNodeDataPlaneIp!: pulumi.Output<string>;
    /**
     * The designated active Next instance management IP.
     */
    public readonly activeNodeIp!: pulumi.Output<string>;
    /**
     * The VLAN for the HA control plane.
     */
    public readonly controlPlaneVlan!: pulumi.Output<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    public readonly controlPlaneVlanTag!: pulumi.Output<number>;
    /**
     * The VLAN for the HA data plane.
     */
    public readonly dataPlaneVlan!: pulumi.Output<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    public readonly dataPlaneVlanTag!: pulumi.Output<number>;
    /**
     * HA Device ID
     */
    public /*out*/ readonly deviceId!: pulumi.Output<string>;
    /**
     * The desired management IP of the HA cluster.
     */
    public readonly haIp!: pulumi.Output<string>;
    /**
     * The name of the High Availability (HA) cluster.The name must be unique and cannot be changed after the cluster is
     * created.
     */
    public readonly haName!: pulumi.Output<string>;
    /**
     * The HA control plane IP address on standby node.
     */
    public readonly standbyNodeControlPlaneIp!: pulumi.Output<string>;
    /**
     * The HA data plane IP address on standby node.
     */
    public readonly standbyNodeDataPlaneIp!: pulumi.Output<string>;
    /**
     * The designated standby Next instance management IP.
     */
    public readonly standbyNodeIp!: pulumi.Output<string>;
    /**
     * The amount of time to wait for the HA creation task to finish, in seconds.
     */
    public readonly timeout!: pulumi.Output<number>;

    /**
     * Create a CmNextHa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CmNextHaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmNextHaArgs | CmNextHaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmNextHaState | undefined;
            resourceInputs["activeNodeControlPlaneIp"] = state ? state.activeNodeControlPlaneIp : undefined;
            resourceInputs["activeNodeDataPlaneIp"] = state ? state.activeNodeDataPlaneIp : undefined;
            resourceInputs["activeNodeIp"] = state ? state.activeNodeIp : undefined;
            resourceInputs["controlPlaneVlan"] = state ? state.controlPlaneVlan : undefined;
            resourceInputs["controlPlaneVlanTag"] = state ? state.controlPlaneVlanTag : undefined;
            resourceInputs["dataPlaneVlan"] = state ? state.dataPlaneVlan : undefined;
            resourceInputs["dataPlaneVlanTag"] = state ? state.dataPlaneVlanTag : undefined;
            resourceInputs["deviceId"] = state ? state.deviceId : undefined;
            resourceInputs["haIp"] = state ? state.haIp : undefined;
            resourceInputs["haName"] = state ? state.haName : undefined;
            resourceInputs["standbyNodeControlPlaneIp"] = state ? state.standbyNodeControlPlaneIp : undefined;
            resourceInputs["standbyNodeDataPlaneIp"] = state ? state.standbyNodeDataPlaneIp : undefined;
            resourceInputs["standbyNodeIp"] = state ? state.standbyNodeIp : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as CmNextHaArgs | undefined;
            if ((!args || args.activeNodeControlPlaneIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activeNodeControlPlaneIp'");
            }
            if ((!args || args.activeNodeDataPlaneIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activeNodeDataPlaneIp'");
            }
            if ((!args || args.activeNodeIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activeNodeIp'");
            }
            if ((!args || args.controlPlaneVlan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneVlan'");
            }
            if ((!args || args.controlPlaneVlanTag === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneVlanTag'");
            }
            if ((!args || args.dataPlaneVlan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataPlaneVlan'");
            }
            if ((!args || args.dataPlaneVlanTag === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataPlaneVlanTag'");
            }
            if ((!args || args.haIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'haIp'");
            }
            if ((!args || args.haName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'haName'");
            }
            if ((!args || args.standbyNodeControlPlaneIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'standbyNodeControlPlaneIp'");
            }
            if ((!args || args.standbyNodeDataPlaneIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'standbyNodeDataPlaneIp'");
            }
            if ((!args || args.standbyNodeIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'standbyNodeIp'");
            }
            resourceInputs["activeNodeControlPlaneIp"] = args ? args.activeNodeControlPlaneIp : undefined;
            resourceInputs["activeNodeDataPlaneIp"] = args ? args.activeNodeDataPlaneIp : undefined;
            resourceInputs["activeNodeIp"] = args ? args.activeNodeIp : undefined;
            resourceInputs["controlPlaneVlan"] = args ? args.controlPlaneVlan : undefined;
            resourceInputs["controlPlaneVlanTag"] = args ? args.controlPlaneVlanTag : undefined;
            resourceInputs["dataPlaneVlan"] = args ? args.dataPlaneVlan : undefined;
            resourceInputs["dataPlaneVlanTag"] = args ? args.dataPlaneVlanTag : undefined;
            resourceInputs["haIp"] = args ? args.haIp : undefined;
            resourceInputs["haName"] = args ? args.haName : undefined;
            resourceInputs["standbyNodeControlPlaneIp"] = args ? args.standbyNodeControlPlaneIp : undefined;
            resourceInputs["standbyNodeDataPlaneIp"] = args ? args.standbyNodeDataPlaneIp : undefined;
            resourceInputs["standbyNodeIp"] = args ? args.standbyNodeIp : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["deviceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CmNextHa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CmNextHa resources.
 */
export interface CmNextHaState {
    /**
     * The HA control plane IP address on active node.
     */
    activeNodeControlPlaneIp?: pulumi.Input<string>;
    /**
     * The HA data plane IP address on active node.
     */
    activeNodeDataPlaneIp?: pulumi.Input<string>;
    /**
     * The designated active Next instance management IP.
     */
    activeNodeIp?: pulumi.Input<string>;
    /**
     * The VLAN for the HA control plane.
     */
    controlPlaneVlan?: pulumi.Input<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    controlPlaneVlanTag?: pulumi.Input<number>;
    /**
     * The VLAN for the HA data plane.
     */
    dataPlaneVlan?: pulumi.Input<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    dataPlaneVlanTag?: pulumi.Input<number>;
    /**
     * HA Device ID
     */
    deviceId?: pulumi.Input<string>;
    /**
     * The desired management IP of the HA cluster.
     */
    haIp?: pulumi.Input<string>;
    /**
     * The name of the High Availability (HA) cluster.The name must be unique and cannot be changed after the cluster is
     * created.
     */
    haName?: pulumi.Input<string>;
    /**
     * The HA control plane IP address on standby node.
     */
    standbyNodeControlPlaneIp?: pulumi.Input<string>;
    /**
     * The HA data plane IP address on standby node.
     */
    standbyNodeDataPlaneIp?: pulumi.Input<string>;
    /**
     * The designated standby Next instance management IP.
     */
    standbyNodeIp?: pulumi.Input<string>;
    /**
     * The amount of time to wait for the HA creation task to finish, in seconds.
     */
    timeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CmNextHa resource.
 */
export interface CmNextHaArgs {
    /**
     * The HA control plane IP address on active node.
     */
    activeNodeControlPlaneIp: pulumi.Input<string>;
    /**
     * The HA data plane IP address on active node.
     */
    activeNodeDataPlaneIp: pulumi.Input<string>;
    /**
     * The designated active Next instance management IP.
     */
    activeNodeIp: pulumi.Input<string>;
    /**
     * The VLAN for the HA control plane.
     */
    controlPlaneVlan: pulumi.Input<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    controlPlaneVlanTag: pulumi.Input<number>;
    /**
     * The VLAN for the HA data plane.
     */
    dataPlaneVlan: pulumi.Input<string>;
    /**
     * The tag for the HA control plane VLAN.
     */
    dataPlaneVlanTag: pulumi.Input<number>;
    /**
     * The desired management IP of the HA cluster.
     */
    haIp: pulumi.Input<string>;
    /**
     * The name of the High Availability (HA) cluster.The name must be unique and cannot be changed after the cluster is
     * created.
     */
    haName: pulumi.Input<string>;
    /**
     * The HA control plane IP address on standby node.
     */
    standbyNodeControlPlaneIp: pulumi.Input<string>;
    /**
     * The HA data plane IP address on standby node.
     */
    standbyNodeDataPlaneIp: pulumi.Input<string>;
    /**
     * The designated standby Next instance management IP.
     */
    standbyNodeIp: pulumi.Input<string>;
    /**
     * The amount of time to wait for the HA creation task to finish, in seconds.
     */
    timeout?: pulumi.Input<number>;
}
