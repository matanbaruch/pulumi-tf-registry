// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProcessGroupMonitoring extends pulumi.CustomResource {
    /**
     * Get an existing ProcessGroupMonitoring resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProcessGroupMonitoringState, opts?: pulumi.CustomResourceOptions): ProcessGroupMonitoring {
        return new ProcessGroupMonitoring(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/processGroupMonitoring:ProcessGroupMonitoring';

    /**
     * Returns true if the given object is an instance of ProcessGroupMonitoring.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProcessGroupMonitoring {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProcessGroupMonitoring.__pulumiType;
    }

    /**
     * Possible Values: `DEFAULT`, `MONITORING_OFF`, `MONITORING_ON`
     */
    public readonly monitoringState!: pulumi.Output<string>;
    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    public readonly processGroupId!: pulumi.Output<string>;

    /**
     * Create a ProcessGroupMonitoring resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProcessGroupMonitoringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProcessGroupMonitoringArgs | ProcessGroupMonitoringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProcessGroupMonitoringState | undefined;
            resourceInputs["monitoringState"] = state ? state.monitoringState : undefined;
            resourceInputs["processGroupId"] = state ? state.processGroupId : undefined;
        } else {
            const args = argsOrState as ProcessGroupMonitoringArgs | undefined;
            if ((!args || args.monitoringState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitoringState'");
            }
            if ((!args || args.processGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processGroupId'");
            }
            resourceInputs["monitoringState"] = args ? args.monitoringState : undefined;
            resourceInputs["processGroupId"] = args ? args.processGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProcessGroupMonitoring.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProcessGroupMonitoring resources.
 */
export interface ProcessGroupMonitoringState {
    /**
     * Possible Values: `DEFAULT`, `MONITORING_OFF`, `MONITORING_ON`
     */
    monitoringState?: pulumi.Input<string>;
    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    processGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProcessGroupMonitoring resource.
 */
export interface ProcessGroupMonitoringArgs {
    /**
     * Possible Values: `DEFAULT`, `MONITORING_OFF`, `MONITORING_ON`
     */
    monitoringState: pulumi.Input<string>;
    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    processGroupId: pulumi.Input<string>;
}
