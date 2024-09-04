// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouteMapRule extends pulumi.CustomResource {
    /**
     * Get an existing RouteMapRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteMapRuleState, opts?: pulumi.CustomResourceOptions): RouteMapRule {
        return new RouteMapRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/routeMapRule:RouteMapRule';

    /**
     * Returns true if the given object is an instance of RouteMapRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteMapRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteMapRule.__pulumiType;
    }

    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Route-Map Rule name.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a RouteMapRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouteMapRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteMapRuleArgs | RouteMapRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouteMapRuleState | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as RouteMapRuleArgs | undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouteMapRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouteMapRule resources.
 */
export interface RouteMapRuleState {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Route-Map Rule name.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouteMapRule resource.
 */
export interface RouteMapRuleArgs {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Route-Map Rule name.
     */
    name?: pulumi.Input<string>;
}
