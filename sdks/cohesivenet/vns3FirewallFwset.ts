// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Vns3FirewallFwset extends pulumi.CustomResource {
    /**
     * Get an existing Vns3FirewallFwset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Vns3FirewallFwsetState, opts?: pulumi.CustomResourceOptions): Vns3FirewallFwset {
        return new Vns3FirewallFwset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cohesivenet:index/vns3FirewallFwset:Vns3FirewallFwset';

    /**
     * Returns true if the given object is an instance of Vns3FirewallFwset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vns3FirewallFwset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vns3FirewallFwset.__pulumiType;
    }

    /**
     * When fwset was created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Description of fwset
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Nested fwset entries
     */
    public readonly entries!: pulumi.Output<outputs.Vns3FirewallFwsetEntry[] | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    /**
     * Name of fwset
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Size of fwset
     */
    public /*out*/ readonly size!: pulumi.Output<number>;
    /**
     * Type of fwset
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Last update for fwset
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    public readonly vns3!: pulumi.Output<outputs.Vns3FirewallFwsetVns3 | undefined>;

    /**
     * Create a Vns3FirewallFwset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Vns3FirewallFwsetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Vns3FirewallFwsetArgs | Vns3FirewallFwsetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Vns3FirewallFwsetState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["entries"] = state ? state.entries : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["vns3"] = state ? state.vns3 : undefined;
        } else {
            const args = argsOrState as Vns3FirewallFwsetArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["entries"] = args ? args.entries : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vns3"] = args ? args.vns3 : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vns3FirewallFwset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vns3FirewallFwset resources.
 */
export interface Vns3FirewallFwsetState {
    /**
     * When fwset was created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Description of fwset
     */
    description?: pulumi.Input<string>;
    /**
     * Nested fwset entries
     */
    entries?: pulumi.Input<pulumi.Input<inputs.Vns3FirewallFwsetEntry>[]>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * Name of fwset
     */
    name?: pulumi.Input<string>;
    /**
     * Size of fwset
     */
    size?: pulumi.Input<number>;
    /**
     * Type of fwset
     */
    type?: pulumi.Input<string>;
    /**
     * Last update for fwset
     */
    updatedAt?: pulumi.Input<string>;
    vns3?: pulumi.Input<inputs.Vns3FirewallFwsetVns3>;
}

/**
 * The set of arguments for constructing a Vns3FirewallFwset resource.
 */
export interface Vns3FirewallFwsetArgs {
    /**
     * Description of fwset
     */
    description?: pulumi.Input<string>;
    /**
     * Nested fwset entries
     */
    entries?: pulumi.Input<pulumi.Input<inputs.Vns3FirewallFwsetEntry>[]>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * Name of fwset
     */
    name?: pulumi.Input<string>;
    /**
     * Type of fwset
     */
    type: pulumi.Input<string>;
    vns3?: pulumi.Input<inputs.Vns3FirewallFwsetVns3>;
}
