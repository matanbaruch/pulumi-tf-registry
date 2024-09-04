// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InterfaceEthernetIpRip extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetIpRip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetIpRipState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetIpRip {
        return new InterfaceEthernetIpRip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/interfaceEthernetIpRip:InterfaceEthernetIpRip';

    /**
     * Returns true if the given object is an instance of InterfaceEthernetIpRip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceEthernetIpRip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceEthernetIpRip.__pulumiType;
    }

    public readonly authentication!: pulumi.Output<outputs.InterfaceEthernetIpRipAuthentication | undefined>;
    /**
     * Ifnum
     */
    public readonly ifnum!: pulumi.Output<string>;
    public readonly receiveCfg!: pulumi.Output<outputs.InterfaceEthernetIpRipReceiveCfg | undefined>;
    /**
     * Enable receiving packet through the specified interface
     */
    public readonly receivePacket!: pulumi.Output<number | undefined>;
    public readonly sendCfg!: pulumi.Output<outputs.InterfaceEthernetIpRipSendCfg | undefined>;
    /**
     * Enable sending packets through the specified interface
     */
    public readonly sendPacket!: pulumi.Output<number | undefined>;
    public readonly splitHorizonCfg!: pulumi.Output<outputs.InterfaceEthernetIpRipSplitHorizonCfg | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a InterfaceEthernetIpRip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEthernetIpRipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceEthernetIpRipArgs | InterfaceEthernetIpRipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceEthernetIpRipState | undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["ifnum"] = state ? state.ifnum : undefined;
            resourceInputs["receiveCfg"] = state ? state.receiveCfg : undefined;
            resourceInputs["receivePacket"] = state ? state.receivePacket : undefined;
            resourceInputs["sendCfg"] = state ? state.sendCfg : undefined;
            resourceInputs["sendPacket"] = state ? state.sendPacket : undefined;
            resourceInputs["splitHorizonCfg"] = state ? state.splitHorizonCfg : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as InterfaceEthernetIpRipArgs | undefined;
            if ((!args || args.ifnum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ifnum'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["ifnum"] = args ? args.ifnum : undefined;
            resourceInputs["receiveCfg"] = args ? args.receiveCfg : undefined;
            resourceInputs["receivePacket"] = args ? args.receivePacket : undefined;
            resourceInputs["sendCfg"] = args ? args.sendCfg : undefined;
            resourceInputs["sendPacket"] = args ? args.sendPacket : undefined;
            resourceInputs["splitHorizonCfg"] = args ? args.splitHorizonCfg : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceEthernetIpRip.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceEthernetIpRip resources.
 */
export interface InterfaceEthernetIpRipState {
    authentication?: pulumi.Input<inputs.InterfaceEthernetIpRipAuthentication>;
    /**
     * Ifnum
     */
    ifnum?: pulumi.Input<string>;
    receiveCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipReceiveCfg>;
    /**
     * Enable receiving packet through the specified interface
     */
    receivePacket?: pulumi.Input<number>;
    sendCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipSendCfg>;
    /**
     * Enable sending packets through the specified interface
     */
    sendPacket?: pulumi.Input<number>;
    splitHorizonCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipSplitHorizonCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceEthernetIpRip resource.
 */
export interface InterfaceEthernetIpRipArgs {
    authentication?: pulumi.Input<inputs.InterfaceEthernetIpRipAuthentication>;
    /**
     * Ifnum
     */
    ifnum: pulumi.Input<string>;
    receiveCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipReceiveCfg>;
    /**
     * Enable receiving packet through the specified interface
     */
    receivePacket?: pulumi.Input<number>;
    sendCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipSendCfg>;
    /**
     * Enable sending packets through the specified interface
     */
    sendPacket?: pulumi.Input<number>;
    splitHorizonCfg?: pulumi.Input<inputs.InterfaceEthernetIpRipSplitHorizonCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
