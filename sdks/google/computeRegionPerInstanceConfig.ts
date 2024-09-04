// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRegionPerInstanceConfig extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRegionPerInstanceConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRegionPerInstanceConfigState, opts?: pulumi.CustomResourceOptions): ComputeRegionPerInstanceConfig {
        return new ComputeRegionPerInstanceConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeRegionPerInstanceConfig:ComputeRegionPerInstanceConfig';

    /**
     * Returns true if the given object is an instance of ComputeRegionPerInstanceConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRegionPerInstanceConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRegionPerInstanceConfig.__pulumiType;
    }

    /**
     * The minimal action to perform on the instance during an update. Default is 'NONE'. Possible values are: * REPLACE *
     * RESTART * REFRESH * NONE
     */
    public readonly minimalAction!: pulumi.Output<string | undefined>;
    /**
     * The most disruptive action to perform on the instance during an update. Default is 'REPLACE'. Possible values are: *
     * REPLACE * RESTART * REFRESH * NONE
     */
    public readonly mostDisruptiveAllowedAction!: pulumi.Output<string | undefined>;
    /**
     * The name for this per-instance config and its corresponding instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The preserved state for this instance.
     */
    public readonly preservedState!: pulumi.Output<outputs.ComputeRegionPerInstanceConfigPreservedState | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Region where the containing instance group manager is located
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The region instance group manager this instance config is part of.
     */
    public readonly regionInstanceGroupManager!: pulumi.Output<string>;
    /**
     * When true, deleting this config will immediately remove the underlying instance. When false, deleting this config will
     * use the behavior as determined by remove_instance_on_destroy.
     */
    public readonly removeInstanceOnDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * When true, deleting this config will immediately remove any specified state from the underlying instance. When false,
     * deleting this config will *not* immediately remove any state from the underlying instance. State will be removed on the
     * next instance recreation or update.
     */
    public readonly removeInstanceStateOnDestroy!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRegionPerInstanceConfigTimeouts | undefined>;

    /**
     * Create a ComputeRegionPerInstanceConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRegionPerInstanceConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRegionPerInstanceConfigArgs | ComputeRegionPerInstanceConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRegionPerInstanceConfigState | undefined;
            resourceInputs["minimalAction"] = state ? state.minimalAction : undefined;
            resourceInputs["mostDisruptiveAllowedAction"] = state ? state.mostDisruptiveAllowedAction : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preservedState"] = state ? state.preservedState : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["regionInstanceGroupManager"] = state ? state.regionInstanceGroupManager : undefined;
            resourceInputs["removeInstanceOnDestroy"] = state ? state.removeInstanceOnDestroy : undefined;
            resourceInputs["removeInstanceStateOnDestroy"] = state ? state.removeInstanceStateOnDestroy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeRegionPerInstanceConfigArgs | undefined;
            if ((!args || args.regionInstanceGroupManager === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regionInstanceGroupManager'");
            }
            resourceInputs["minimalAction"] = args ? args.minimalAction : undefined;
            resourceInputs["mostDisruptiveAllowedAction"] = args ? args.mostDisruptiveAllowedAction : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["preservedState"] = args ? args.preservedState : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["regionInstanceGroupManager"] = args ? args.regionInstanceGroupManager : undefined;
            resourceInputs["removeInstanceOnDestroy"] = args ? args.removeInstanceOnDestroy : undefined;
            resourceInputs["removeInstanceStateOnDestroy"] = args ? args.removeInstanceStateOnDestroy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeRegionPerInstanceConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRegionPerInstanceConfig resources.
 */
export interface ComputeRegionPerInstanceConfigState {
    /**
     * The minimal action to perform on the instance during an update. Default is 'NONE'. Possible values are: * REPLACE *
     * RESTART * REFRESH * NONE
     */
    minimalAction?: pulumi.Input<string>;
    /**
     * The most disruptive action to perform on the instance during an update. Default is 'REPLACE'. Possible values are: *
     * REPLACE * RESTART * REFRESH * NONE
     */
    mostDisruptiveAllowedAction?: pulumi.Input<string>;
    /**
     * The name for this per-instance config and its corresponding instance.
     */
    name?: pulumi.Input<string>;
    /**
     * The preserved state for this instance.
     */
    preservedState?: pulumi.Input<inputs.ComputeRegionPerInstanceConfigPreservedState>;
    project?: pulumi.Input<string>;
    /**
     * Region where the containing instance group manager is located
     */
    region?: pulumi.Input<string>;
    /**
     * The region instance group manager this instance config is part of.
     */
    regionInstanceGroupManager?: pulumi.Input<string>;
    /**
     * When true, deleting this config will immediately remove the underlying instance. When false, deleting this config will
     * use the behavior as determined by remove_instance_on_destroy.
     */
    removeInstanceOnDestroy?: pulumi.Input<boolean>;
    /**
     * When true, deleting this config will immediately remove any specified state from the underlying instance. When false,
     * deleting this config will *not* immediately remove any state from the underlying instance. State will be removed on the
     * next instance recreation or update.
     */
    removeInstanceStateOnDestroy?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ComputeRegionPerInstanceConfigTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeRegionPerInstanceConfig resource.
 */
export interface ComputeRegionPerInstanceConfigArgs {
    /**
     * The minimal action to perform on the instance during an update. Default is 'NONE'. Possible values are: * REPLACE *
     * RESTART * REFRESH * NONE
     */
    minimalAction?: pulumi.Input<string>;
    /**
     * The most disruptive action to perform on the instance during an update. Default is 'REPLACE'. Possible values are: *
     * REPLACE * RESTART * REFRESH * NONE
     */
    mostDisruptiveAllowedAction?: pulumi.Input<string>;
    /**
     * The name for this per-instance config and its corresponding instance.
     */
    name?: pulumi.Input<string>;
    /**
     * The preserved state for this instance.
     */
    preservedState?: pulumi.Input<inputs.ComputeRegionPerInstanceConfigPreservedState>;
    project?: pulumi.Input<string>;
    /**
     * Region where the containing instance group manager is located
     */
    region?: pulumi.Input<string>;
    /**
     * The region instance group manager this instance config is part of.
     */
    regionInstanceGroupManager: pulumi.Input<string>;
    /**
     * When true, deleting this config will immediately remove the underlying instance. When false, deleting this config will
     * use the behavior as determined by remove_instance_on_destroy.
     */
    removeInstanceOnDestroy?: pulumi.Input<boolean>;
    /**
     * When true, deleting this config will immediately remove any specified state from the underlying instance. When false,
     * deleting this config will *not* immediately remove any state from the underlying instance. State will be removed on the
     * next instance recreation or update.
     */
    removeInstanceStateOnDestroy?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ComputeRegionPerInstanceConfigTimeouts>;
}
