// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ExtcommunityOpaqueSet extends pulumi.CustomResource {
    /**
     * Get an existing ExtcommunityOpaqueSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExtcommunityOpaqueSetState, opts?: pulumi.CustomResourceOptions): ExtcommunityOpaqueSet {
        return new ExtcommunityOpaqueSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/extcommunityOpaqueSet:ExtcommunityOpaqueSet';

    /**
     * Returns true if the given object is an instance of ExtcommunityOpaqueSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExtcommunityOpaqueSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExtcommunityOpaqueSet.__pulumiType;
    }

    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Extended Community Opaque Set
     */
    public readonly rpl!: pulumi.Output<string>;
    /**
     * Set name
     */
    public readonly setName!: pulumi.Output<string>;

    /**
     * Create a ExtcommunityOpaqueSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtcommunityOpaqueSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ExtcommunityOpaqueSetArgs | ExtcommunityOpaqueSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ExtcommunityOpaqueSetState | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["rpl"] = state ? state.rpl : undefined;
            resourceInputs["setName"] = state ? state.setName : undefined;
        } else {
            const args = argsOrState as ExtcommunityOpaqueSetArgs | undefined;
            if ((!args || args.rpl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rpl'");
            }
            if ((!args || args.setName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'setName'");
            }
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["rpl"] = args ? args.rpl : undefined;
            resourceInputs["setName"] = args ? args.setName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ExtcommunityOpaqueSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ExtcommunityOpaqueSet resources.
 */
export interface ExtcommunityOpaqueSetState {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Extended Community Opaque Set
     */
    rpl?: pulumi.Input<string>;
    /**
     * Set name
     */
    setName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ExtcommunityOpaqueSet resource.
 */
export interface ExtcommunityOpaqueSetArgs {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Extended Community Opaque Set
     */
    rpl: pulumi.Input<string>;
    /**
     * Set name
     */
    setName: pulumi.Input<string>;
}
