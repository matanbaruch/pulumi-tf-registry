// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OwnershipConfig extends pulumi.CustomResource {
    /**
     * Get an existing OwnershipConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OwnershipConfigState, opts?: pulumi.CustomResourceOptions): OwnershipConfig {
        return new OwnershipConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/ownershipConfig:OwnershipConfig';

    /**
     * Returns true if the given object is an instance of OwnershipConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OwnershipConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OwnershipConfig.__pulumiType;
    }

    /**
     * Tags and metadata are key-value pairs. Define keys for tags and metadata that are considered for ownership. If a tag or
     * any metadata starts with a key defined below, the value of the tag or metadata is considered a team identifier.
     */
    public readonly ownershipIdentifiers!: pulumi.Output<outputs.OwnershipConfigOwnershipIdentifiers>;

    /**
     * Create a OwnershipConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OwnershipConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OwnershipConfigArgs | OwnershipConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OwnershipConfigState | undefined;
            resourceInputs["ownershipIdentifiers"] = state ? state.ownershipIdentifiers : undefined;
        } else {
            const args = argsOrState as OwnershipConfigArgs | undefined;
            if ((!args || args.ownershipIdentifiers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownershipIdentifiers'");
            }
            resourceInputs["ownershipIdentifiers"] = args ? args.ownershipIdentifiers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OwnershipConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OwnershipConfig resources.
 */
export interface OwnershipConfigState {
    /**
     * Tags and metadata are key-value pairs. Define keys for tags and metadata that are considered for ownership. If a tag or
     * any metadata starts with a key defined below, the value of the tag or metadata is considered a team identifier.
     */
    ownershipIdentifiers?: pulumi.Input<inputs.OwnershipConfigOwnershipIdentifiers>;
}

/**
 * The set of arguments for constructing a OwnershipConfig resource.
 */
export interface OwnershipConfigArgs {
    /**
     * Tags and metadata are key-value pairs. Define keys for tags and metadata that are considered for ownership. If a tag or
     * any metadata starts with a key defined below, the value of the tag or metadata is considered a team identifier.
     */
    ownershipIdentifiers: pulumi.Input<inputs.OwnershipConfigOwnershipIdentifiers>;
}
