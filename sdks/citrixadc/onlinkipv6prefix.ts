// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Onlinkipv6prefix extends pulumi.CustomResource {
    /**
     * Get an existing Onlinkipv6prefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Onlinkipv6prefixState, opts?: pulumi.CustomResourceOptions): Onlinkipv6prefix {
        return new Onlinkipv6prefix(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/onlinkipv6prefix:Onlinkipv6prefix';

    /**
     * Returns true if the given object is an instance of Onlinkipv6prefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Onlinkipv6prefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Onlinkipv6prefix.__pulumiType;
    }

    public readonly autonomusprefix!: pulumi.Output<string>;
    public readonly decrementprefixlifetimes!: pulumi.Output<string>;
    public readonly depricateprefix!: pulumi.Output<string>;
    public readonly ipv6prefix!: pulumi.Output<string>;
    public readonly onlinkprefix!: pulumi.Output<string>;
    public readonly prefixpreferredlifetime!: pulumi.Output<number>;
    public readonly prefixvalidelifetime!: pulumi.Output<number>;

    /**
     * Create a Onlinkipv6prefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Onlinkipv6prefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Onlinkipv6prefixArgs | Onlinkipv6prefixState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Onlinkipv6prefixState | undefined;
            resourceInputs["autonomusprefix"] = state ? state.autonomusprefix : undefined;
            resourceInputs["decrementprefixlifetimes"] = state ? state.decrementprefixlifetimes : undefined;
            resourceInputs["depricateprefix"] = state ? state.depricateprefix : undefined;
            resourceInputs["ipv6prefix"] = state ? state.ipv6prefix : undefined;
            resourceInputs["onlinkprefix"] = state ? state.onlinkprefix : undefined;
            resourceInputs["prefixpreferredlifetime"] = state ? state.prefixpreferredlifetime : undefined;
            resourceInputs["prefixvalidelifetime"] = state ? state.prefixvalidelifetime : undefined;
        } else {
            const args = argsOrState as Onlinkipv6prefixArgs | undefined;
            if ((!args || args.ipv6prefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv6prefix'");
            }
            resourceInputs["autonomusprefix"] = args ? args.autonomusprefix : undefined;
            resourceInputs["decrementprefixlifetimes"] = args ? args.decrementprefixlifetimes : undefined;
            resourceInputs["depricateprefix"] = args ? args.depricateprefix : undefined;
            resourceInputs["ipv6prefix"] = args ? args.ipv6prefix : undefined;
            resourceInputs["onlinkprefix"] = args ? args.onlinkprefix : undefined;
            resourceInputs["prefixpreferredlifetime"] = args ? args.prefixpreferredlifetime : undefined;
            resourceInputs["prefixvalidelifetime"] = args ? args.prefixvalidelifetime : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Onlinkipv6prefix.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Onlinkipv6prefix resources.
 */
export interface Onlinkipv6prefixState {
    autonomusprefix?: pulumi.Input<string>;
    decrementprefixlifetimes?: pulumi.Input<string>;
    depricateprefix?: pulumi.Input<string>;
    ipv6prefix?: pulumi.Input<string>;
    onlinkprefix?: pulumi.Input<string>;
    prefixpreferredlifetime?: pulumi.Input<number>;
    prefixvalidelifetime?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Onlinkipv6prefix resource.
 */
export interface Onlinkipv6prefixArgs {
    autonomusprefix?: pulumi.Input<string>;
    decrementprefixlifetimes?: pulumi.Input<string>;
    depricateprefix?: pulumi.Input<string>;
    ipv6prefix: pulumi.Input<string>;
    onlinkprefix?: pulumi.Input<string>;
    prefixpreferredlifetime?: pulumi.Input<number>;
    prefixvalidelifetime?: pulumi.Input<number>;
}
