// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VlanEncapsulationforVxlanTraffic extends pulumi.CustomResource {
    /**
     * Get an existing VlanEncapsulationforVxlanTraffic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanEncapsulationforVxlanTrafficState, opts?: pulumi.CustomResourceOptions): VlanEncapsulationforVxlanTraffic {
        return new VlanEncapsulationforVxlanTraffic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/vlanEncapsulationforVxlanTraffic:VlanEncapsulationforVxlanTraffic';

    /**
     * Returns true if the given object is an instance of VlanEncapsulationforVxlanTraffic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VlanEncapsulationforVxlanTraffic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VlanEncapsulationforVxlanTraffic.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly attachableAccessEntityProfileDn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;

    /**
     * Create a VlanEncapsulationforVxlanTraffic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VlanEncapsulationforVxlanTrafficArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VlanEncapsulationforVxlanTrafficArgs | VlanEncapsulationforVxlanTrafficState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VlanEncapsulationforVxlanTrafficState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["attachableAccessEntityProfileDn"] = state ? state.attachableAccessEntityProfileDn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
        } else {
            const args = argsOrState as VlanEncapsulationforVxlanTrafficArgs | undefined;
            if ((!args || args.attachableAccessEntityProfileDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attachableAccessEntityProfileDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["attachableAccessEntityProfileDn"] = args ? args.attachableAccessEntityProfileDn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VlanEncapsulationforVxlanTraffic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VlanEncapsulationforVxlanTraffic resources.
 */
export interface VlanEncapsulationforVxlanTrafficState {
    annotation?: pulumi.Input<string>;
    attachableAccessEntityProfileDn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VlanEncapsulationforVxlanTraffic resource.
 */
export interface VlanEncapsulationforVxlanTrafficArgs {
    annotation?: pulumi.Input<string>;
    attachableAccessEntityProfileDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
