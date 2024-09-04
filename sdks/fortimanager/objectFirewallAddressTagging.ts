// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallAddressTagging extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallAddressTagging resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallAddressTaggingState, opts?: pulumi.CustomResourceOptions): ObjectFirewallAddressTagging {
        return new ObjectFirewallAddressTagging(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallAddressTagging:ObjectFirewallAddressTagging';

    /**
     * Returns true if the given object is an instance of ObjectFirewallAddressTagging.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallAddressTagging {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallAddressTagging.__pulumiType;
    }

    public readonly address!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly category!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<string[]>;

    /**
     * Create a ObjectFirewallAddressTagging resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallAddressTaggingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallAddressTaggingArgs | ObjectFirewallAddressTaggingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallAddressTaggingState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ObjectFirewallAddressTaggingArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallAddressTagging.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallAddressTagging resources.
 */
export interface ObjectFirewallAddressTaggingState {
    address?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectFirewallAddressTagging resource.
 */
export interface ObjectFirewallAddressTaggingArgs {
    address: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
