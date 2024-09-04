// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Workloadtemplate extends pulumi.CustomResource {
    /**
     * Get an existing Workloadtemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkloadtemplateState, opts?: pulumi.CustomResourceOptions): Workloadtemplate {
        return new Workloadtemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/workloadtemplate:Workloadtemplate';

    /**
     * Returns true if the given object is an instance of Workloadtemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workloadtemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workloadtemplate.__pulumiType;
    }

    /**
     * impersonate user
     */
    public readonly impersonate!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the workload template resource
     */
    public readonly metadata!: pulumi.Output<outputs.WorkloadtemplateMetadata | undefined>;
    /**
     * Specification of the workload template resource
     */
    public readonly spec!: pulumi.Output<outputs.WorkloadtemplateSpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.WorkloadtemplateTimeouts | undefined>;

    /**
     * Create a Workloadtemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkloadtemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkloadtemplateArgs | WorkloadtemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkloadtemplateState | undefined;
            resourceInputs["impersonate"] = state ? state.impersonate : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as WorkloadtemplateArgs | undefined;
            resourceInputs["impersonate"] = args ? args.impersonate : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Workloadtemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Workloadtemplate resources.
 */
export interface WorkloadtemplateState {
    /**
     * impersonate user
     */
    impersonate?: pulumi.Input<string>;
    /**
     * Metadata of the workload template resource
     */
    metadata?: pulumi.Input<inputs.WorkloadtemplateMetadata>;
    /**
     * Specification of the workload template resource
     */
    spec?: pulumi.Input<inputs.WorkloadtemplateSpec>;
    timeouts?: pulumi.Input<inputs.WorkloadtemplateTimeouts>;
}

/**
 * The set of arguments for constructing a Workloadtemplate resource.
 */
export interface WorkloadtemplateArgs {
    /**
     * impersonate user
     */
    impersonate?: pulumi.Input<string>;
    /**
     * Metadata of the workload template resource
     */
    metadata?: pulumi.Input<inputs.WorkloadtemplateMetadata>;
    /**
     * Specification of the workload template resource
     */
    spec?: pulumi.Input<inputs.WorkloadtemplateSpec>;
    timeouts?: pulumi.Input<inputs.WorkloadtemplateTimeouts>;
}
