// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GrantKit extends pulumi.CustomResource {
    /**
     * Get an existing GrantKit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GrantKitState, opts?: pulumi.CustomResourceOptions): GrantKit {
        return new GrantKit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'abbey:index/grantKit:GrantKit';

    /**
     * Returns true if the given object is an instance of GrantKit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GrantKit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GrantKit.__pulumiType;
    }

    /**
     * created_at
     */
    public readonly createdAt!: pulumi.Output<string>;
    /**
     * current_version_id
     */
    public readonly currentVersionId!: pulumi.Output<string>;
    /**
     * description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * grants
     */
    public readonly grants!: pulumi.Output<outputs.GrantKitGrant[]>;
    /**
     * max_grant_duration_in_sec
     */
    public readonly maxGrantDurationInSec!: pulumi.Output<number>;
    /**
     * name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * output
     */
    public readonly output!: pulumi.Output<outputs.GrantKitOutput>;
    /**
     * policies
     */
    public readonly policies!: pulumi.Output<outputs.GrantKitPolicy[] | undefined>;
    /**
     * requests
     */
    public readonly requests!: pulumi.Output<outputs.GrantKitRequest[]>;
    /**
     * resource_type
     */
    public readonly resourceType!: pulumi.Output<string>;
    /**
     * updated_at
     */
    public readonly updatedAt!: pulumi.Output<string>;
    /**
     * workflow
     */
    public readonly workflow!: pulumi.Output<outputs.GrantKitWorkflow | undefined>;

    /**
     * Create a GrantKit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrantKitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GrantKitArgs | GrantKitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GrantKitState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["currentVersionId"] = state ? state.currentVersionId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["grants"] = state ? state.grants : undefined;
            resourceInputs["maxGrantDurationInSec"] = state ? state.maxGrantDurationInSec : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["output"] = state ? state.output : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["requests"] = state ? state.requests : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["workflow"] = state ? state.workflow : undefined;
        } else {
            const args = argsOrState as GrantKitArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.output === undefined) && !opts.urn) {
                throw new Error("Missing required property 'output'");
            }
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["currentVersionId"] = args ? args.currentVersionId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["grants"] = args ? args.grants : undefined;
            resourceInputs["maxGrantDurationInSec"] = args ? args.maxGrantDurationInSec : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["output"] = args ? args.output : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["requests"] = args ? args.requests : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["updatedAt"] = args ? args.updatedAt : undefined;
            resourceInputs["workflow"] = args ? args.workflow : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GrantKit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GrantKit resources.
 */
export interface GrantKitState {
    /**
     * created_at
     */
    createdAt?: pulumi.Input<string>;
    /**
     * current_version_id
     */
    currentVersionId?: pulumi.Input<string>;
    /**
     * description
     */
    description?: pulumi.Input<string>;
    /**
     * grants
     */
    grants?: pulumi.Input<pulumi.Input<inputs.GrantKitGrant>[]>;
    /**
     * max_grant_duration_in_sec
     */
    maxGrantDurationInSec?: pulumi.Input<number>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * output
     */
    output?: pulumi.Input<inputs.GrantKitOutput>;
    /**
     * policies
     */
    policies?: pulumi.Input<pulumi.Input<inputs.GrantKitPolicy>[]>;
    /**
     * requests
     */
    requests?: pulumi.Input<pulumi.Input<inputs.GrantKitRequest>[]>;
    /**
     * resource_type
     */
    resourceType?: pulumi.Input<string>;
    /**
     * updated_at
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * workflow
     */
    workflow?: pulumi.Input<inputs.GrantKitWorkflow>;
}

/**
 * The set of arguments for constructing a GrantKit resource.
 */
export interface GrantKitArgs {
    /**
     * created_at
     */
    createdAt?: pulumi.Input<string>;
    /**
     * current_version_id
     */
    currentVersionId?: pulumi.Input<string>;
    /**
     * description
     */
    description: pulumi.Input<string>;
    /**
     * grants
     */
    grants?: pulumi.Input<pulumi.Input<inputs.GrantKitGrant>[]>;
    /**
     * max_grant_duration_in_sec
     */
    maxGrantDurationInSec?: pulumi.Input<number>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * output
     */
    output: pulumi.Input<inputs.GrantKitOutput>;
    /**
     * policies
     */
    policies?: pulumi.Input<pulumi.Input<inputs.GrantKitPolicy>[]>;
    /**
     * requests
     */
    requests?: pulumi.Input<pulumi.Input<inputs.GrantKitRequest>[]>;
    /**
     * resource_type
     */
    resourceType?: pulumi.Input<string>;
    /**
     * updated_at
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * workflow
     */
    workflow?: pulumi.Input<inputs.GrantKitWorkflow>;
}
