// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PanoramaBgpAggregateSuppressFilter extends pulumi.CustomResource {
    /**
     * Get an existing PanoramaBgpAggregateSuppressFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PanoramaBgpAggregateSuppressFilterState, opts?: pulumi.CustomResourceOptions): PanoramaBgpAggregateSuppressFilter {
        return new PanoramaBgpAggregateSuppressFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/panoramaBgpAggregateSuppressFilter:PanoramaBgpAggregateSuppressFilter';

    /**
     * Returns true if the given object is an instance of PanoramaBgpAggregateSuppressFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PanoramaBgpAggregateSuppressFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PanoramaBgpAggregateSuppressFilter.__pulumiType;
    }

    public readonly addressPrefixes!: pulumi.Output<outputs.PanoramaBgpAggregateSuppressFilterAddressPrefix[] | undefined>;
    public readonly asPathRegex!: pulumi.Output<string | undefined>;
    public readonly bgpAggregate!: pulumi.Output<string>;
    public readonly communityRegex!: pulumi.Output<string | undefined>;
    public readonly enable!: pulumi.Output<boolean | undefined>;
    public readonly extendedCommunityRegex!: pulumi.Output<string | undefined>;
    public readonly fromPeers!: pulumi.Output<string[] | undefined>;
    public readonly med!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextHops!: pulumi.Output<string[] | undefined>;
    public readonly routeTable!: pulumi.Output<string | undefined>;
    /**
     * The template.
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * The template stack.
     */
    public readonly templateStack!: pulumi.Output<string | undefined>;
    public readonly virtualRouter!: pulumi.Output<string>;

    /**
     * Create a PanoramaBgpAggregateSuppressFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PanoramaBgpAggregateSuppressFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PanoramaBgpAggregateSuppressFilterArgs | PanoramaBgpAggregateSuppressFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PanoramaBgpAggregateSuppressFilterState | undefined;
            resourceInputs["addressPrefixes"] = state ? state.addressPrefixes : undefined;
            resourceInputs["asPathRegex"] = state ? state.asPathRegex : undefined;
            resourceInputs["bgpAggregate"] = state ? state.bgpAggregate : undefined;
            resourceInputs["communityRegex"] = state ? state.communityRegex : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["extendedCommunityRegex"] = state ? state.extendedCommunityRegex : undefined;
            resourceInputs["fromPeers"] = state ? state.fromPeers : undefined;
            resourceInputs["med"] = state ? state.med : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextHops"] = state ? state.nextHops : undefined;
            resourceInputs["routeTable"] = state ? state.routeTable : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["templateStack"] = state ? state.templateStack : undefined;
            resourceInputs["virtualRouter"] = state ? state.virtualRouter : undefined;
        } else {
            const args = argsOrState as PanoramaBgpAggregateSuppressFilterArgs | undefined;
            if ((!args || args.bgpAggregate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bgpAggregate'");
            }
            if ((!args || args.virtualRouter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouter'");
            }
            resourceInputs["addressPrefixes"] = args ? args.addressPrefixes : undefined;
            resourceInputs["asPathRegex"] = args ? args.asPathRegex : undefined;
            resourceInputs["bgpAggregate"] = args ? args.bgpAggregate : undefined;
            resourceInputs["communityRegex"] = args ? args.communityRegex : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["extendedCommunityRegex"] = args ? args.extendedCommunityRegex : undefined;
            resourceInputs["fromPeers"] = args ? args.fromPeers : undefined;
            resourceInputs["med"] = args ? args.med : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHops"] = args ? args.nextHops : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateStack"] = args ? args.templateStack : undefined;
            resourceInputs["virtualRouter"] = args ? args.virtualRouter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PanoramaBgpAggregateSuppressFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PanoramaBgpAggregateSuppressFilter resources.
 */
export interface PanoramaBgpAggregateSuppressFilterState {
    addressPrefixes?: pulumi.Input<pulumi.Input<inputs.PanoramaBgpAggregateSuppressFilterAddressPrefix>[]>;
    asPathRegex?: pulumi.Input<string>;
    bgpAggregate?: pulumi.Input<string>;
    communityRegex?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    extendedCommunityRegex?: pulumi.Input<string>;
    fromPeers?: pulumi.Input<pulumi.Input<string>[]>;
    med?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHops?: pulumi.Input<pulumi.Input<string>[]>;
    routeTable?: pulumi.Input<string>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    virtualRouter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PanoramaBgpAggregateSuppressFilter resource.
 */
export interface PanoramaBgpAggregateSuppressFilterArgs {
    addressPrefixes?: pulumi.Input<pulumi.Input<inputs.PanoramaBgpAggregateSuppressFilterAddressPrefix>[]>;
    asPathRegex?: pulumi.Input<string>;
    bgpAggregate: pulumi.Input<string>;
    communityRegex?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    extendedCommunityRegex?: pulumi.Input<string>;
    fromPeers?: pulumi.Input<pulumi.Input<string>[]>;
    med?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHops?: pulumi.Input<pulumi.Input<string>[]>;
    routeTable?: pulumi.Input<string>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    virtualRouter: pulumi.Input<string>;
}
