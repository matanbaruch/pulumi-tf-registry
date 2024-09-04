// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouteMapRuleEntrySetRegularCommunityItem extends pulumi.CustomResource {
    /**
     * Get an existing RouteMapRuleEntrySetRegularCommunityItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteMapRuleEntrySetRegularCommunityItemState, opts?: pulumi.CustomResourceOptions): RouteMapRuleEntrySetRegularCommunityItem {
        return new RouteMapRuleEntrySetRegularCommunityItem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/routeMapRuleEntrySetRegularCommunityItem:RouteMapRuleEntrySetRegularCommunityItem';

    /**
     * Returns true if the given object is an instance of RouteMapRuleEntrySetRegularCommunityItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteMapRuleEntrySetRegularCommunityItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteMapRuleEntrySetRegularCommunityItem.__pulumiType;
    }

    /**
     * Set Community.
     */
    public readonly community!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Route-Map Rule Entry order. - Range: `0`-`65535`
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Route Map rule name.
     */
    public readonly ruleName!: pulumi.Output<string>;

    /**
     * Create a RouteMapRuleEntrySetRegularCommunityItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteMapRuleEntrySetRegularCommunityItemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteMapRuleEntrySetRegularCommunityItemArgs | RouteMapRuleEntrySetRegularCommunityItemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouteMapRuleEntrySetRegularCommunityItemState | undefined;
            resourceInputs["community"] = state ? state.community : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["ruleName"] = state ? state.ruleName : undefined;
        } else {
            const args = argsOrState as RouteMapRuleEntrySetRegularCommunityItemArgs | undefined;
            if ((!args || args.community === undefined) && !opts.urn) {
                throw new Error("Missing required property 'community'");
            }
            if ((!args || args.order === undefined) && !opts.urn) {
                throw new Error("Missing required property 'order'");
            }
            if ((!args || args.ruleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleName'");
            }
            resourceInputs["community"] = args ? args.community : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouteMapRuleEntrySetRegularCommunityItem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouteMapRuleEntrySetRegularCommunityItem resources.
 */
export interface RouteMapRuleEntrySetRegularCommunityItemState {
    /**
     * Set Community.
     */
    community?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Route-Map Rule Entry order. - Range: `0`-`65535`
     */
    order?: pulumi.Input<number>;
    /**
     * Route Map rule name.
     */
    ruleName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouteMapRuleEntrySetRegularCommunityItem resource.
 */
export interface RouteMapRuleEntrySetRegularCommunityItemArgs {
    /**
     * Set Community.
     */
    community: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Route-Map Rule Entry order. - Range: `0`-`65535`
     */
    order: pulumi.Input<number>;
    /**
     * Route Map rule name.
     */
    ruleName: pulumi.Input<string>;
}
