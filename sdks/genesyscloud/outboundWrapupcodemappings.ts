// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OutboundWrapupcodemappings extends pulumi.CustomResource {
    /**
     * Get an existing OutboundWrapupcodemappings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutboundWrapupcodemappingsState, opts?: pulumi.CustomResourceOptions): OutboundWrapupcodemappings {
        return new OutboundWrapupcodemappings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/outboundWrapupcodemappings:OutboundWrapupcodemappings';

    /**
     * Returns true if the given object is an instance of OutboundWrapupcodemappings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OutboundWrapupcodemappings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OutboundWrapupcodemappings.__pulumiType;
    }

    /**
     * The default set of wrap-up flags. These will be used if there is no entry for a given wrap-up code in the mapping.
     */
    public readonly defaultSets!: pulumi.Output<string[]>;
    /**
     * A map from wrap-up code identifiers to a set of wrap-up flags.
     */
    public readonly mappings!: pulumi.Output<outputs.OutboundWrapupcodemappingsMapping[] | undefined>;
    /**
     * Placeholder data used internally by the provider. Defaults to `***`.
     */
    public readonly placeholder!: pulumi.Output<string | undefined>;

    /**
     * Create a OutboundWrapupcodemappings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutboundWrapupcodemappingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OutboundWrapupcodemappingsArgs | OutboundWrapupcodemappingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OutboundWrapupcodemappingsState | undefined;
            resourceInputs["defaultSets"] = state ? state.defaultSets : undefined;
            resourceInputs["mappings"] = state ? state.mappings : undefined;
            resourceInputs["placeholder"] = state ? state.placeholder : undefined;
        } else {
            const args = argsOrState as OutboundWrapupcodemappingsArgs | undefined;
            if ((!args || args.defaultSets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultSets'");
            }
            resourceInputs["defaultSets"] = args ? args.defaultSets : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["placeholder"] = args ? args.placeholder : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OutboundWrapupcodemappings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OutboundWrapupcodemappings resources.
 */
export interface OutboundWrapupcodemappingsState {
    /**
     * The default set of wrap-up flags. These will be used if there is no entry for a given wrap-up code in the mapping.
     */
    defaultSets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map from wrap-up code identifiers to a set of wrap-up flags.
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.OutboundWrapupcodemappingsMapping>[]>;
    /**
     * Placeholder data used internally by the provider. Defaults to `***`.
     */
    placeholder?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OutboundWrapupcodemappings resource.
 */
export interface OutboundWrapupcodemappingsArgs {
    /**
     * The default set of wrap-up flags. These will be used if there is no entry for a given wrap-up code in the mapping.
     */
    defaultSets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map from wrap-up code identifiers to a set of wrap-up flags.
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.OutboundWrapupcodemappingsMapping>[]>;
    /**
     * Placeholder data used internally by the provider. Defaults to `***`.
     */
    placeholder?: pulumi.Input<string>;
}
