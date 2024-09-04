// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class HealthcareDatasetIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing HealthcareDatasetIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthcareDatasetIamBindingState, opts?: pulumi.CustomResourceOptions): HealthcareDatasetIamBinding {
        return new HealthcareDatasetIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/healthcareDatasetIamBinding:HealthcareDatasetIamBinding';

    /**
     * Returns true if the given object is an instance of HealthcareDatasetIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthcareDatasetIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthcareDatasetIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.HealthcareDatasetIamBindingCondition | undefined>;
    public readonly datasetId!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a HealthcareDatasetIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HealthcareDatasetIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthcareDatasetIamBindingArgs | HealthcareDatasetIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthcareDatasetIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["datasetId"] = state ? state.datasetId : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as HealthcareDatasetIamBindingArgs | undefined;
            if ((!args || args.datasetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datasetId'");
            }
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["datasetId"] = args ? args.datasetId : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthcareDatasetIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthcareDatasetIamBinding resources.
 */
export interface HealthcareDatasetIamBindingState {
    condition?: pulumi.Input<inputs.HealthcareDatasetIamBindingCondition>;
    datasetId?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthcareDatasetIamBinding resource.
 */
export interface HealthcareDatasetIamBindingArgs {
    condition?: pulumi.Input<inputs.HealthcareDatasetIamBindingCondition>;
    datasetId: pulumi.Input<string>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    role: pulumi.Input<string>;
}
