// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityCenterAssessment extends pulumi.CustomResource {
    /**
     * Get an existing SecurityCenterAssessment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityCenterAssessmentState, opts?: pulumi.CustomResourceOptions): SecurityCenterAssessment {
        return new SecurityCenterAssessment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/securityCenterAssessment:SecurityCenterAssessment';

    /**
     * Returns true if the given object is an instance of SecurityCenterAssessment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityCenterAssessment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityCenterAssessment.__pulumiType;
    }

    public readonly additionalData!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly assessmentPolicyId!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<outputs.SecurityCenterAssessmentStatus>;
    public readonly targetResourceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SecurityCenterAssessmentTimeouts | undefined>;

    /**
     * Create a SecurityCenterAssessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityCenterAssessmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityCenterAssessmentArgs | SecurityCenterAssessmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityCenterAssessmentState | undefined;
            resourceInputs["additionalData"] = state ? state.additionalData : undefined;
            resourceInputs["assessmentPolicyId"] = state ? state.assessmentPolicyId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["targetResourceId"] = state ? state.targetResourceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecurityCenterAssessmentArgs | undefined;
            if ((!args || args.assessmentPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assessmentPolicyId'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["additionalData"] = args ? args.additionalData : undefined;
            resourceInputs["assessmentPolicyId"] = args ? args.assessmentPolicyId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityCenterAssessment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityCenterAssessment resources.
 */
export interface SecurityCenterAssessmentState {
    additionalData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    assessmentPolicyId?: pulumi.Input<string>;
    status?: pulumi.Input<inputs.SecurityCenterAssessmentStatus>;
    targetResourceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityCenterAssessmentTimeouts>;
}

/**
 * The set of arguments for constructing a SecurityCenterAssessment resource.
 */
export interface SecurityCenterAssessmentArgs {
    additionalData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    assessmentPolicyId: pulumi.Input<string>;
    status: pulumi.Input<inputs.SecurityCenterAssessmentStatus>;
    targetResourceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityCenterAssessmentTimeouts>;
}
