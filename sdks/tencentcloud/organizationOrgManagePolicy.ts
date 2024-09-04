// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationOrgManagePolicy extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationOrgManagePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationOrgManagePolicyState, opts?: pulumi.CustomResourceOptions): OrganizationOrgManagePolicy {
        return new OrganizationOrgManagePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/organizationOrgManagePolicy:OrganizationOrgManagePolicy';

    /**
     * Returns true if the given object is an instance of OrganizationOrgManagePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationOrgManagePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationOrgManagePolicy.__pulumiType;
    }

    /**
     * Policy content. Refer to the CAM policy syntax.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * Policy description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Policy name. The length is 1~128 characters, which can include Chinese characters, English letters, numbers, and
     * underscores.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Policy Id.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;
    /**
     * Policy type. Default value is SERVICE_CONTROL_POLICY. Valid values: - `SERVICE_CONTROL_POLICY`: Service control policy.
     * - `TAG_POLICY`: Tag policy.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a OrganizationOrgManagePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationOrgManagePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationOrgManagePolicyArgs | OrganizationOrgManagePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationOrgManagePolicyState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as OrganizationOrgManagePolicyArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["policyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationOrgManagePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationOrgManagePolicy resources.
 */
export interface OrganizationOrgManagePolicyState {
    /**
     * Policy content. Refer to the CAM policy syntax.
     */
    content?: pulumi.Input<string>;
    /**
     * Policy description.
     */
    description?: pulumi.Input<string>;
    /**
     * Policy name. The length is 1~128 characters, which can include Chinese characters, English letters, numbers, and
     * underscores.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy Id.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Policy type. Default value is SERVICE_CONTROL_POLICY. Valid values: - `SERVICE_CONTROL_POLICY`: Service control policy.
     * - `TAG_POLICY`: Tag policy.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationOrgManagePolicy resource.
 */
export interface OrganizationOrgManagePolicyArgs {
    /**
     * Policy content. Refer to the CAM policy syntax.
     */
    content: pulumi.Input<string>;
    /**
     * Policy description.
     */
    description?: pulumi.Input<string>;
    /**
     * Policy name. The length is 1~128 characters, which can include Chinese characters, English letters, numbers, and
     * underscores.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy type. Default value is SERVICE_CONTROL_POLICY. Valid values: - `SERVICE_CONTROL_POLICY`: Service control policy.
     * - `TAG_POLICY`: Tag policy.
     */
    type?: pulumi.Input<string>;
}
