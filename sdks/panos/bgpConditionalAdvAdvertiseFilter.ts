// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BgpConditionalAdvAdvertiseFilter extends pulumi.CustomResource {
    /**
     * Get an existing BgpConditionalAdvAdvertiseFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpConditionalAdvAdvertiseFilterState, opts?: pulumi.CustomResourceOptions): BgpConditionalAdvAdvertiseFilter {
        return new BgpConditionalAdvAdvertiseFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/bgpConditionalAdvAdvertiseFilter:BgpConditionalAdvAdvertiseFilter';

    /**
     * Returns true if the given object is an instance of BgpConditionalAdvAdvertiseFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpConditionalAdvAdvertiseFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpConditionalAdvAdvertiseFilter.__pulumiType;
    }

    public readonly addressPrefixes!: pulumi.Output<string[]>;
    public readonly asPathRegex!: pulumi.Output<string | undefined>;
    public readonly bgpConditionalAdv!: pulumi.Output<string>;
    public readonly communityRegex!: pulumi.Output<string | undefined>;
    public readonly enable!: pulumi.Output<boolean | undefined>;
    public readonly extendedCommunityRegex!: pulumi.Output<string | undefined>;
    public readonly fromPeers!: pulumi.Output<string[] | undefined>;
    public readonly med!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextHops!: pulumi.Output<string[] | undefined>;
    public readonly routeTable!: pulumi.Output<string | undefined>;
    public readonly virtualRouter!: pulumi.Output<string>;

    /**
     * Create a BgpConditionalAdvAdvertiseFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpConditionalAdvAdvertiseFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpConditionalAdvAdvertiseFilterArgs | BgpConditionalAdvAdvertiseFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpConditionalAdvAdvertiseFilterState | undefined;
            resourceInputs["addressPrefixes"] = state ? state.addressPrefixes : undefined;
            resourceInputs["asPathRegex"] = state ? state.asPathRegex : undefined;
            resourceInputs["bgpConditionalAdv"] = state ? state.bgpConditionalAdv : undefined;
            resourceInputs["communityRegex"] = state ? state.communityRegex : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["extendedCommunityRegex"] = state ? state.extendedCommunityRegex : undefined;
            resourceInputs["fromPeers"] = state ? state.fromPeers : undefined;
            resourceInputs["med"] = state ? state.med : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextHops"] = state ? state.nextHops : undefined;
            resourceInputs["routeTable"] = state ? state.routeTable : undefined;
            resourceInputs["virtualRouter"] = state ? state.virtualRouter : undefined;
        } else {
            const args = argsOrState as BgpConditionalAdvAdvertiseFilterArgs | undefined;
            if ((!args || args.addressPrefixes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressPrefixes'");
            }
            if ((!args || args.bgpConditionalAdv === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bgpConditionalAdv'");
            }
            if ((!args || args.virtualRouter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouter'");
            }
            resourceInputs["addressPrefixes"] = args ? args.addressPrefixes : undefined;
            resourceInputs["asPathRegex"] = args ? args.asPathRegex : undefined;
            resourceInputs["bgpConditionalAdv"] = args ? args.bgpConditionalAdv : undefined;
            resourceInputs["communityRegex"] = args ? args.communityRegex : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["extendedCommunityRegex"] = args ? args.extendedCommunityRegex : undefined;
            resourceInputs["fromPeers"] = args ? args.fromPeers : undefined;
            resourceInputs["med"] = args ? args.med : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHops"] = args ? args.nextHops : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["virtualRouter"] = args ? args.virtualRouter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BgpConditionalAdvAdvertiseFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BgpConditionalAdvAdvertiseFilter resources.
 */
export interface BgpConditionalAdvAdvertiseFilterState {
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    asPathRegex?: pulumi.Input<string>;
    bgpConditionalAdv?: pulumi.Input<string>;
    communityRegex?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    extendedCommunityRegex?: pulumi.Input<string>;
    fromPeers?: pulumi.Input<pulumi.Input<string>[]>;
    med?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHops?: pulumi.Input<pulumi.Input<string>[]>;
    routeTable?: pulumi.Input<string>;
    virtualRouter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BgpConditionalAdvAdvertiseFilter resource.
 */
export interface BgpConditionalAdvAdvertiseFilterArgs {
    addressPrefixes: pulumi.Input<pulumi.Input<string>[]>;
    asPathRegex?: pulumi.Input<string>;
    bgpConditionalAdv: pulumi.Input<string>;
    communityRegex?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    extendedCommunityRegex?: pulumi.Input<string>;
    fromPeers?: pulumi.Input<pulumi.Input<string>[]>;
    med?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHops?: pulumi.Input<pulumi.Input<string>[]>;
    routeTable?: pulumi.Input<string>;
    virtualRouter: pulumi.Input<string>;
}
