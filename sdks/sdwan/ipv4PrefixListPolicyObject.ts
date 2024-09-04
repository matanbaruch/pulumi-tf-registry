// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ipv4PrefixListPolicyObject extends pulumi.CustomResource {
    /**
     * Get an existing Ipv4PrefixListPolicyObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv4PrefixListPolicyObjectState, opts?: pulumi.CustomResourceOptions): Ipv4PrefixListPolicyObject {
        return new Ipv4PrefixListPolicyObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/ipv4PrefixListPolicyObject:Ipv4PrefixListPolicyObject';

    /**
     * Returns true if the given object is an instance of Ipv4PrefixListPolicyObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv4PrefixListPolicyObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv4PrefixListPolicyObject.__pulumiType;
    }

    /**
     * List of entries
     */
    public readonly entries!: pulumi.Output<outputs.Ipv4PrefixListPolicyObjectEntry[]>;
    /**
     * The name of the policy object
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The version of the object
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a Ipv4PrefixListPolicyObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv4PrefixListPolicyObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv4PrefixListPolicyObjectArgs | Ipv4PrefixListPolicyObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv4PrefixListPolicyObjectState | undefined;
            resourceInputs["entries"] = state ? state.entries : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as Ipv4PrefixListPolicyObjectArgs | undefined;
            if ((!args || args.entries === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entries'");
            }
            resourceInputs["entries"] = args ? args.entries : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv4PrefixListPolicyObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv4PrefixListPolicyObject resources.
 */
export interface Ipv4PrefixListPolicyObjectState {
    /**
     * List of entries
     */
    entries?: pulumi.Input<pulumi.Input<inputs.Ipv4PrefixListPolicyObjectEntry>[]>;
    /**
     * The name of the policy object
     */
    name?: pulumi.Input<string>;
    /**
     * The version of the object
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Ipv4PrefixListPolicyObject resource.
 */
export interface Ipv4PrefixListPolicyObjectArgs {
    /**
     * List of entries
     */
    entries: pulumi.Input<pulumi.Input<inputs.Ipv4PrefixListPolicyObjectEntry>[]>;
    /**
     * The name of the policy object
     */
    name?: pulumi.Input<string>;
}
