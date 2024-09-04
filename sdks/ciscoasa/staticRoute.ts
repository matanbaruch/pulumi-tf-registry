// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StaticRoute extends pulumi.CustomResource {
    /**
     * Get an existing StaticRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticRouteState, opts?: pulumi.CustomResourceOptions): StaticRoute {
        return new StaticRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscoasa:index/staticRoute:StaticRoute';

    /**
     * Returns true if the given object is an instance of StaticRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticRoute.__pulumiType;
    }

    public readonly gateway!: pulumi.Output<string>;
    public readonly interface!: pulumi.Output<string>;
    public readonly metric!: pulumi.Output<number | undefined>;
    public readonly network!: pulumi.Output<string>;
    public readonly tracked!: pulumi.Output<boolean | undefined>;
    public readonly tunneled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a StaticRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StaticRouteArgs | StaticRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StaticRouteState | undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["tracked"] = state ? state.tracked : undefined;
            resourceInputs["tunneled"] = state ? state.tunneled : undefined;
        } else {
            const args = argsOrState as StaticRouteArgs | undefined;
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["tracked"] = args ? args.tracked : undefined;
            resourceInputs["tunneled"] = args ? args.tunneled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StaticRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StaticRoute resources.
 */
export interface StaticRouteState {
    gateway?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    network?: pulumi.Input<string>;
    tracked?: pulumi.Input<boolean>;
    tunneled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a StaticRoute resource.
 */
export interface StaticRouteArgs {
    gateway: pulumi.Input<string>;
    interface: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    network: pulumi.Input<string>;
    tracked?: pulumi.Input<boolean>;
    tunneled?: pulumi.Input<boolean>;
}
