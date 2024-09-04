// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SsmcontactsPlan extends pulumi.CustomResource {
    /**
     * Get an existing SsmcontactsPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsmcontactsPlanState, opts?: pulumi.CustomResourceOptions): SsmcontactsPlan {
        return new SsmcontactsPlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ssmcontactsPlan:SsmcontactsPlan';

    /**
     * Returns true if the given object is an instance of SsmcontactsPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsmcontactsPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsmcontactsPlan.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) of the contact.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
     */
    public readonly contactId!: pulumi.Output<string>;
    /**
     * Rotation Ids to associate with Oncall Contact for engagement.
     */
    public readonly rotationIds!: pulumi.Output<string[]>;
    /**
     * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
     */
    public readonly stages!: pulumi.Output<outputs.SsmcontactsPlanStage[]>;

    /**
     * Create a SsmcontactsPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SsmcontactsPlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsmcontactsPlanArgs | SsmcontactsPlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsmcontactsPlanState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["contactId"] = state ? state.contactId : undefined;
            resourceInputs["rotationIds"] = state ? state.rotationIds : undefined;
            resourceInputs["stages"] = state ? state.stages : undefined;
        } else {
            const args = argsOrState as SsmcontactsPlanArgs | undefined;
            resourceInputs["contactId"] = args ? args.contactId : undefined;
            resourceInputs["rotationIds"] = args ? args.rotationIds : undefined;
            resourceInputs["stages"] = args ? args.stages : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsmcontactsPlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsmcontactsPlan resources.
 */
export interface SsmcontactsPlanState {
    /**
     * The Amazon Resource Name (ARN) of the contact.
     */
    arn?: pulumi.Input<string>;
    /**
     * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
     */
    contactId?: pulumi.Input<string>;
    /**
     * Rotation Ids to associate with Oncall Contact for engagement.
     */
    rotationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
     */
    stages?: pulumi.Input<pulumi.Input<inputs.SsmcontactsPlanStage>[]>;
}

/**
 * The set of arguments for constructing a SsmcontactsPlan resource.
 */
export interface SsmcontactsPlanArgs {
    /**
     * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
     */
    contactId?: pulumi.Input<string>;
    /**
     * Rotation Ids to associate with Oncall Contact for engagement.
     */
    rotationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
     */
    stages?: pulumi.Input<pulumi.Input<inputs.SsmcontactsPlanStage>[]>;
}
