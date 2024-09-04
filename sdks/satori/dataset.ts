// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Dataset extends pulumi.CustomResource {
    /**
     * Get an existing Dataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetState, opts?: pulumi.CustomResourceOptions): Dataset {
        return new Dataset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'satori:index/dataset:Dataset';

    /**
     * Returns true if the given object is an instance of Dataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dataset.__pulumiType;
    }

    /**
     * Dataset access controls.
     */
    public readonly accessControlSettings!: pulumi.Output<outputs.DatasetAccessControlSettings>;
    /**
     * Dataset custom policy.
     */
    public readonly customPolicy!: pulumi.Output<outputs.DatasetCustomPolicy | undefined>;
    /**
     * Parent ID for dataset permissions.
     */
    public /*out*/ readonly dataPolicyId!: pulumi.Output<string>;
    /**
     * Parameters for dataset definition.
     */
    public readonly definition!: pulumi.Output<outputs.DatasetDefinition>;
    /**
     * IDs of security policies to apply to this dataset.
     */
    public readonly securityPolicies!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Dataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasetArgs | DatasetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasetState | undefined;
            resourceInputs["accessControlSettings"] = state ? state.accessControlSettings : undefined;
            resourceInputs["customPolicy"] = state ? state.customPolicy : undefined;
            resourceInputs["dataPolicyId"] = state ? state.dataPolicyId : undefined;
            resourceInputs["definition"] = state ? state.definition : undefined;
            resourceInputs["securityPolicies"] = state ? state.securityPolicies : undefined;
        } else {
            const args = argsOrState as DatasetArgs | undefined;
            if ((!args || args.accessControlSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessControlSettings'");
            }
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            resourceInputs["accessControlSettings"] = args ? args.accessControlSettings : undefined;
            resourceInputs["customPolicy"] = args ? args.customPolicy : undefined;
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["securityPolicies"] = args ? args.securityPolicies : undefined;
            resourceInputs["dataPolicyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dataset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dataset resources.
 */
export interface DatasetState {
    /**
     * Dataset access controls.
     */
    accessControlSettings?: pulumi.Input<inputs.DatasetAccessControlSettings>;
    /**
     * Dataset custom policy.
     */
    customPolicy?: pulumi.Input<inputs.DatasetCustomPolicy>;
    /**
     * Parent ID for dataset permissions.
     */
    dataPolicyId?: pulumi.Input<string>;
    /**
     * Parameters for dataset definition.
     */
    definition?: pulumi.Input<inputs.DatasetDefinition>;
    /**
     * IDs of security policies to apply to this dataset.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Dataset resource.
 */
export interface DatasetArgs {
    /**
     * Dataset access controls.
     */
    accessControlSettings: pulumi.Input<inputs.DatasetAccessControlSettings>;
    /**
     * Dataset custom policy.
     */
    customPolicy?: pulumi.Input<inputs.DatasetCustomPolicy>;
    /**
     * Parameters for dataset definition.
     */
    definition: pulumi.Input<inputs.DatasetDefinition>;
    /**
     * IDs of security policies to apply to this dataset.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}
