// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeInstanceSettings extends pulumi.CustomResource {
    /**
     * Get an existing ComputeInstanceSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeInstanceSettingsState, opts?: pulumi.CustomResourceOptions): ComputeInstanceSettings {
        return new ComputeInstanceSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeInstanceSettings:ComputeInstanceSettings';

    /**
     * Returns true if the given object is an instance of ComputeInstanceSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeInstanceSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeInstanceSettings.__pulumiType;
    }

    /**
     * The fingerprint used for optimistic locking of this resource. Used internally during updates.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    /**
     * The metadata key/value pairs assigned to all the instances in the corresponding scope.
     */
    public readonly metadata!: pulumi.Output<outputs.ComputeInstanceSettingsMetadata | undefined>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeInstanceSettingsTimeouts | undefined>;
    /**
     * A reference to the zone where the machine resides.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ComputeInstanceSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeInstanceSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeInstanceSettingsArgs | ComputeInstanceSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeInstanceSettingsState | undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ComputeInstanceSettingsArgs | undefined;
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["fingerprint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeInstanceSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeInstanceSettings resources.
 */
export interface ComputeInstanceSettingsState {
    /**
     * The fingerprint used for optimistic locking of this resource. Used internally during updates.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * The metadata key/value pairs assigned to all the instances in the corresponding scope.
     */
    metadata?: pulumi.Input<inputs.ComputeInstanceSettingsMetadata>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceSettingsTimeouts>;
    /**
     * A reference to the zone where the machine resides.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeInstanceSettings resource.
 */
export interface ComputeInstanceSettingsArgs {
    /**
     * The metadata key/value pairs assigned to all the instances in the corresponding scope.
     */
    metadata?: pulumi.Input<inputs.ComputeInstanceSettingsMetadata>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceSettingsTimeouts>;
    /**
     * A reference to the zone where the machine resides.
     */
    zone: pulumi.Input<string>;
}
