// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LeafAccessBundlePolicySubGroup extends pulumi.CustomResource {
    /**
     * Get an existing LeafAccessBundlePolicySubGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LeafAccessBundlePolicySubGroupState, opts?: pulumi.CustomResourceOptions): LeafAccessBundlePolicySubGroup {
        return new LeafAccessBundlePolicySubGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/leafAccessBundlePolicySubGroup:LeafAccessBundlePolicySubGroup';

    /**
     * Returns true if the given object is an instance of LeafAccessBundlePolicySubGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LeafAccessBundlePolicySubGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LeafAccessBundlePolicySubGroup.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly leafAccessBundlePolicyGroupDn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    /**
     * Create relation to lacp:IfPol
     */
    public readonly portChannelMember!: pulumi.Output<string>;

    /**
     * Create a LeafAccessBundlePolicySubGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LeafAccessBundlePolicySubGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LeafAccessBundlePolicySubGroupArgs | LeafAccessBundlePolicySubGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LeafAccessBundlePolicySubGroupState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["leafAccessBundlePolicyGroupDn"] = state ? state.leafAccessBundlePolicyGroupDn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["portChannelMember"] = state ? state.portChannelMember : undefined;
        } else {
            const args = argsOrState as LeafAccessBundlePolicySubGroupArgs | undefined;
            if ((!args || args.leafAccessBundlePolicyGroupDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'leafAccessBundlePolicyGroupDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["leafAccessBundlePolicyGroupDn"] = args ? args.leafAccessBundlePolicyGroupDn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["portChannelMember"] = args ? args.portChannelMember : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LeafAccessBundlePolicySubGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LeafAccessBundlePolicySubGroup resources.
 */
export interface LeafAccessBundlePolicySubGroupState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leafAccessBundlePolicyGroupDn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    /**
     * Create relation to lacp:IfPol
     */
    portChannelMember?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LeafAccessBundlePolicySubGroup resource.
 */
export interface LeafAccessBundlePolicySubGroupArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leafAccessBundlePolicyGroupDn: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    /**
     * Create relation to lacp:IfPol
     */
    portChannelMember?: pulumi.Input<string>;
}
