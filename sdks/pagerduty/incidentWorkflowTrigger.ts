// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IncidentWorkflowTrigger extends pulumi.CustomResource {
    /**
     * Get an existing IncidentWorkflowTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IncidentWorkflowTriggerState, opts?: pulumi.CustomResourceOptions): IncidentWorkflowTrigger {
        return new IncidentWorkflowTrigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pagerduty:index/incidentWorkflowTrigger:IncidentWorkflowTrigger';

    /**
     * Returns true if the given object is an instance of IncidentWorkflowTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentWorkflowTrigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentWorkflowTrigger.__pulumiType;
    }

    public readonly condition!: pulumi.Output<string | undefined>;
    public readonly permissions!: pulumi.Output<outputs.IncidentWorkflowTriggerPermissions | undefined>;
    public readonly services!: pulumi.Output<string[] | undefined>;
    public readonly subscribedToAllServices!: pulumi.Output<boolean>;
    public readonly type!: pulumi.Output<string>;
    public readonly workflow!: pulumi.Output<string>;

    /**
     * Create a IncidentWorkflowTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentWorkflowTriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IncidentWorkflowTriggerArgs | IncidentWorkflowTriggerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IncidentWorkflowTriggerState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["subscribedToAllServices"] = state ? state.subscribedToAllServices : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["workflow"] = state ? state.workflow : undefined;
        } else {
            const args = argsOrState as IncidentWorkflowTriggerArgs | undefined;
            if ((!args || args.subscribedToAllServices === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscribedToAllServices'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.workflow === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workflow'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["subscribedToAllServices"] = args ? args.subscribedToAllServices : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["workflow"] = args ? args.workflow : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IncidentWorkflowTrigger.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IncidentWorkflowTrigger resources.
 */
export interface IncidentWorkflowTriggerState {
    condition?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.IncidentWorkflowTriggerPermissions>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    subscribedToAllServices?: pulumi.Input<boolean>;
    type?: pulumi.Input<string>;
    workflow?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IncidentWorkflowTrigger resource.
 */
export interface IncidentWorkflowTriggerArgs {
    condition?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.IncidentWorkflowTriggerPermissions>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    subscribedToAllServices: pulumi.Input<boolean>;
    type: pulumi.Input<string>;
    workflow: pulumi.Input<string>;
}
