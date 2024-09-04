// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SpineInterfaceProfileSelector extends pulumi.CustomResource {
    /**
     * Get an existing SpineInterfaceProfileSelector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpineInterfaceProfileSelectorState, opts?: pulumi.CustomResourceOptions): SpineInterfaceProfileSelector {
        return new SpineInterfaceProfileSelector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/spineInterfaceProfileSelector:SpineInterfaceProfileSelector';

    /**
     * Returns true if the given object is an instance of SpineInterfaceProfileSelector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpineInterfaceProfileSelector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpineInterfaceProfileSelector.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly spineProfileDn!: pulumi.Output<string>;
    public readonly tdn!: pulumi.Output<string>;

    /**
     * Create a SpineInterfaceProfileSelector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpineInterfaceProfileSelectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpineInterfaceProfileSelectorArgs | SpineInterfaceProfileSelectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpineInterfaceProfileSelectorState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["spineProfileDn"] = state ? state.spineProfileDn : undefined;
            resourceInputs["tdn"] = state ? state.tdn : undefined;
        } else {
            const args = argsOrState as SpineInterfaceProfileSelectorArgs | undefined;
            if ((!args || args.spineProfileDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spineProfileDn'");
            }
            if ((!args || args.tdn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tdn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["spineProfileDn"] = args ? args.spineProfileDn : undefined;
            resourceInputs["tdn"] = args ? args.tdn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpineInterfaceProfileSelector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpineInterfaceProfileSelector resources.
 */
export interface SpineInterfaceProfileSelectorState {
    annotation?: pulumi.Input<string>;
    spineProfileDn?: pulumi.Input<string>;
    tdn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SpineInterfaceProfileSelector resource.
 */
export interface SpineInterfaceProfileSelectorArgs {
    annotation?: pulumi.Input<string>;
    spineProfileDn: pulumi.Input<string>;
    tdn: pulumi.Input<string>;
}
