// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataSafeSetUserAssessmentBaselineManagement extends pulumi.CustomResource {
    /**
     * Get an existing DataSafeSetUserAssessmentBaselineManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSafeSetUserAssessmentBaselineManagementState, opts?: pulumi.CustomResourceOptions): DataSafeSetUserAssessmentBaselineManagement {
        return new DataSafeSetUserAssessmentBaselineManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/dataSafeSetUserAssessmentBaselineManagement:DataSafeSetUserAssessmentBaselineManagement';

    /**
     * Returns true if the given object is an instance of DataSafeSetUserAssessmentBaselineManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSafeSetUserAssessmentBaselineManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSafeSetUserAssessmentBaselineManagement.__pulumiType;
    }

    public /*out*/ readonly assessmentIds!: pulumi.Output<string[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly targetId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataSafeSetUserAssessmentBaselineManagementTimeouts | undefined>;
    public /*out*/ readonly userAssessmentId!: pulumi.Output<string>;

    /**
     * Create a DataSafeSetUserAssessmentBaselineManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSafeSetUserAssessmentBaselineManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSafeSetUserAssessmentBaselineManagementArgs | DataSafeSetUserAssessmentBaselineManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSafeSetUserAssessmentBaselineManagementState | undefined;
            resourceInputs["assessmentIds"] = state ? state.assessmentIds : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["targetId"] = state ? state.targetId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userAssessmentId"] = state ? state.userAssessmentId : undefined;
        } else {
            const args = argsOrState as DataSafeSetUserAssessmentBaselineManagementArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.targetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["targetId"] = args ? args.targetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["assessmentIds"] = undefined /*out*/;
            resourceInputs["userAssessmentId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataSafeSetUserAssessmentBaselineManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataSafeSetUserAssessmentBaselineManagement resources.
 */
export interface DataSafeSetUserAssessmentBaselineManagementState {
    assessmentIds?: pulumi.Input<pulumi.Input<string>[]>;
    compartmentId?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeSetUserAssessmentBaselineManagementTimeouts>;
    userAssessmentId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataSafeSetUserAssessmentBaselineManagement resource.
 */
export interface DataSafeSetUserAssessmentBaselineManagementArgs {
    compartmentId: pulumi.Input<string>;
    targetId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeSetUserAssessmentBaselineManagementTimeouts>;
}
