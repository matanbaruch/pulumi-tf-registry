// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreInstancePool extends pulumi.CustomResource {
    /**
     * Get an existing CoreInstancePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreInstancePoolState, opts?: pulumi.CustomResourceOptions): CoreInstancePool {
        return new CoreInstancePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreInstancePool:CoreInstancePool';

    /**
     * Returns true if the given object is an instance of CoreInstancePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreInstancePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreInstancePool.__pulumiType;
    }

    public /*out*/ readonly actualSize!: pulumi.Output<number>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly instanceConfigurationId!: pulumi.Output<string>;
    public readonly instanceDisplayNameFormatter!: pulumi.Output<string>;
    public readonly instanceHostnameFormatter!: pulumi.Output<string>;
    public readonly loadBalancers!: pulumi.Output<outputs.CoreInstancePoolLoadBalancer[] | undefined>;
    public readonly placementConfigurations!: pulumi.Output<outputs.CoreInstancePoolPlacementConfiguration[]>;
    public readonly size!: pulumi.Output<number>;
    public readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreInstancePoolTimeouts | undefined>;

    /**
     * Create a CoreInstancePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreInstancePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreInstancePoolArgs | CoreInstancePoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreInstancePoolState | undefined;
            resourceInputs["actualSize"] = state ? state.actualSize : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["instanceConfigurationId"] = state ? state.instanceConfigurationId : undefined;
            resourceInputs["instanceDisplayNameFormatter"] = state ? state.instanceDisplayNameFormatter : undefined;
            resourceInputs["instanceHostnameFormatter"] = state ? state.instanceHostnameFormatter : undefined;
            resourceInputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            resourceInputs["placementConfigurations"] = state ? state.placementConfigurations : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CoreInstancePoolArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.instanceConfigurationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceConfigurationId'");
            }
            if ((!args || args.placementConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'placementConfigurations'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["instanceConfigurationId"] = args ? args.instanceConfigurationId : undefined;
            resourceInputs["instanceDisplayNameFormatter"] = args ? args.instanceDisplayNameFormatter : undefined;
            resourceInputs["instanceHostnameFormatter"] = args ? args.instanceHostnameFormatter : undefined;
            resourceInputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            resourceInputs["placementConfigurations"] = args ? args.placementConfigurations : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["actualSize"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreInstancePool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreInstancePool resources.
 */
export interface CoreInstancePoolState {
    actualSize?: pulumi.Input<number>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceConfigurationId?: pulumi.Input<string>;
    instanceDisplayNameFormatter?: pulumi.Input<string>;
    instanceHostnameFormatter?: pulumi.Input<string>;
    loadBalancers?: pulumi.Input<pulumi.Input<inputs.CoreInstancePoolLoadBalancer>[]>;
    placementConfigurations?: pulumi.Input<pulumi.Input<inputs.CoreInstancePoolPlacementConfiguration>[]>;
    size?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreInstancePoolTimeouts>;
}

/**
 * The set of arguments for constructing a CoreInstancePool resource.
 */
export interface CoreInstancePoolArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceConfigurationId: pulumi.Input<string>;
    instanceDisplayNameFormatter?: pulumi.Input<string>;
    instanceHostnameFormatter?: pulumi.Input<string>;
    loadBalancers?: pulumi.Input<pulumi.Input<inputs.CoreInstancePoolLoadBalancer>[]>;
    placementConfigurations: pulumi.Input<pulumi.Input<inputs.CoreInstancePoolPlacementConfiguration>[]>;
    size: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreInstancePoolTimeouts>;
}
