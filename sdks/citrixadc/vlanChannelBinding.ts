// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VlanChannelBinding extends pulumi.CustomResource {
    /**
     * Get an existing VlanChannelBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanChannelBindingState, opts?: pulumi.CustomResourceOptions): VlanChannelBinding {
        return new VlanChannelBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vlanChannelBinding:VlanChannelBinding';

    /**
     * Returns true if the given object is an instance of VlanChannelBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VlanChannelBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VlanChannelBinding.__pulumiType;
    }

    public readonly ifnum!: pulumi.Output<string>;
    public readonly ownergroup!: pulumi.Output<string>;
    public readonly tagged!: pulumi.Output<boolean>;
    public readonly vlanid!: pulumi.Output<number>;

    /**
     * Create a VlanChannelBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VlanChannelBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VlanChannelBindingArgs | VlanChannelBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VlanChannelBindingState | undefined;
            resourceInputs["ifnum"] = state ? state.ifnum : undefined;
            resourceInputs["ownergroup"] = state ? state.ownergroup : undefined;
            resourceInputs["tagged"] = state ? state.tagged : undefined;
            resourceInputs["vlanid"] = state ? state.vlanid : undefined;
        } else {
            const args = argsOrState as VlanChannelBindingArgs | undefined;
            if ((!args || args.ifnum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ifnum'");
            }
            if ((!args || args.vlanid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanid'");
            }
            resourceInputs["ifnum"] = args ? args.ifnum : undefined;
            resourceInputs["ownergroup"] = args ? args.ownergroup : undefined;
            resourceInputs["tagged"] = args ? args.tagged : undefined;
            resourceInputs["vlanid"] = args ? args.vlanid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VlanChannelBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VlanChannelBinding resources.
 */
export interface VlanChannelBindingState {
    ifnum?: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    tagged?: pulumi.Input<boolean>;
    vlanid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a VlanChannelBinding resource.
 */
export interface VlanChannelBindingArgs {
    ifnum: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    tagged?: pulumi.Input<boolean>;
    vlanid: pulumi.Input<number>;
}
