// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WorkloadSettings extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkloadSettingsState, opts?: pulumi.CustomResourceOptions): WorkloadSettings {
        return new WorkloadSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'illumio-core:index/workloadSettings:WorkloadSettings';

    /**
     * Returns true if the given object is an instance of WorkloadSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadSettings.__pulumiType;
    }

    /**
     * URI of the Workload Settings
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * Workload Disconnected Timeout Seconds for Workload Settings
     */
    public readonly workloadDisconnectedTimeoutSeconds!: pulumi.Output<outputs.WorkloadSettingsWorkloadDisconnectedTimeoutSecond[] | undefined>;
    /**
     * Workload Goodbye Timeout Seconds for Workload Settings
     */
    public readonly workloadGoodbyeTimeoutSeconds!: pulumi.Output<outputs.WorkloadSettingsWorkloadGoodbyeTimeoutSecond[] | undefined>;

    /**
     * Create a WorkloadSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkloadSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkloadSettingsArgs | WorkloadSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkloadSettingsState | undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["workloadDisconnectedTimeoutSeconds"] = state ? state.workloadDisconnectedTimeoutSeconds : undefined;
            resourceInputs["workloadGoodbyeTimeoutSeconds"] = state ? state.workloadGoodbyeTimeoutSeconds : undefined;
        } else {
            const args = argsOrState as WorkloadSettingsArgs | undefined;
            resourceInputs["workloadDisconnectedTimeoutSeconds"] = args ? args.workloadDisconnectedTimeoutSeconds : undefined;
            resourceInputs["workloadGoodbyeTimeoutSeconds"] = args ? args.workloadGoodbyeTimeoutSeconds : undefined;
            resourceInputs["href"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkloadSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkloadSettings resources.
 */
export interface WorkloadSettingsState {
    /**
     * URI of the Workload Settings
     */
    href?: pulumi.Input<string>;
    /**
     * Workload Disconnected Timeout Seconds for Workload Settings
     */
    workloadDisconnectedTimeoutSeconds?: pulumi.Input<pulumi.Input<inputs.WorkloadSettingsWorkloadDisconnectedTimeoutSecond>[]>;
    /**
     * Workload Goodbye Timeout Seconds for Workload Settings
     */
    workloadGoodbyeTimeoutSeconds?: pulumi.Input<pulumi.Input<inputs.WorkloadSettingsWorkloadGoodbyeTimeoutSecond>[]>;
}

/**
 * The set of arguments for constructing a WorkloadSettings resource.
 */
export interface WorkloadSettingsArgs {
    /**
     * Workload Disconnected Timeout Seconds for Workload Settings
     */
    workloadDisconnectedTimeoutSeconds?: pulumi.Input<pulumi.Input<inputs.WorkloadSettingsWorkloadDisconnectedTimeoutSecond>[]>;
    /**
     * Workload Goodbye Timeout Seconds for Workload Settings
     */
    workloadGoodbyeTimeoutSeconds?: pulumi.Input<pulumi.Input<inputs.WorkloadSettingsWorkloadGoodbyeTimeoutSecond>[]>;
}
