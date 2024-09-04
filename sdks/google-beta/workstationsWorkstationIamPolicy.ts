// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WorkstationsWorkstationIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing WorkstationsWorkstationIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkstationsWorkstationIamPolicyState, opts?: pulumi.CustomResourceOptions): WorkstationsWorkstationIamPolicy {
        return new WorkstationsWorkstationIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/workstationsWorkstationIamPolicy:WorkstationsWorkstationIamPolicy';

    /**
     * Returns true if the given object is an instance of WorkstationsWorkstationIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkstationsWorkstationIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkstationsWorkstationIamPolicy.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly workstationClusterId!: pulumi.Output<string>;
    public readonly workstationConfigId!: pulumi.Output<string>;
    public readonly workstationId!: pulumi.Output<string>;

    /**
     * Create a WorkstationsWorkstationIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkstationsWorkstationIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkstationsWorkstationIamPolicyArgs | WorkstationsWorkstationIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkstationsWorkstationIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["workstationClusterId"] = state ? state.workstationClusterId : undefined;
            resourceInputs["workstationConfigId"] = state ? state.workstationConfigId : undefined;
            resourceInputs["workstationId"] = state ? state.workstationId : undefined;
        } else {
            const args = argsOrState as WorkstationsWorkstationIamPolicyArgs | undefined;
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            if ((!args || args.workstationClusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workstationClusterId'");
            }
            if ((!args || args.workstationConfigId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workstationConfigId'");
            }
            if ((!args || args.workstationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workstationId'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["workstationClusterId"] = args ? args.workstationClusterId : undefined;
            resourceInputs["workstationConfigId"] = args ? args.workstationConfigId : undefined;
            resourceInputs["workstationId"] = args ? args.workstationId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkstationsWorkstationIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkstationsWorkstationIamPolicy resources.
 */
export interface WorkstationsWorkstationIamPolicyState {
    etag?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    workstationClusterId?: pulumi.Input<string>;
    workstationConfigId?: pulumi.Input<string>;
    workstationId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkstationsWorkstationIamPolicy resource.
 */
export interface WorkstationsWorkstationIamPolicyArgs {
    location?: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    workstationClusterId: pulumi.Input<string>;
    workstationConfigId: pulumi.Input<string>;
    workstationId: pulumi.Input<string>;
}
