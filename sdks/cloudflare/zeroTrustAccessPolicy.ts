// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ZeroTrustAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustAccessPolicyState, opts?: pulumi.CustomResourceOptions): ZeroTrustAccessPolicy {
        return new ZeroTrustAccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/zeroTrustAccessPolicy:ZeroTrustAccessPolicy';

    /**
     * Returns true if the given object is an instance of ZeroTrustAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZeroTrustAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZeroTrustAccessPolicy.__pulumiType;
    }

    /**
     * The account identifier to target for the resource. Conflicts with `zone_id`.
     */
    public readonly accountId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the application the policy is associated with. Required when using `precedence`. **Modifying this attribute
     * will force creation of a new resource.**
     */
    public readonly applicationId!: pulumi.Output<string | undefined>;
    public readonly approvalGroups!: pulumi.Output<outputs.ZeroTrustAccessPolicyApprovalGroup[] | undefined>;
    public readonly approvalRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`,
     * `bypass`.
     */
    public readonly decision!: pulumi.Output<string>;
    public readonly excludes!: pulumi.Output<outputs.ZeroTrustAccessPolicyExclude[] | undefined>;
    public readonly includes!: pulumi.Output<outputs.ZeroTrustAccessPolicyInclude[]>;
    /**
     * Require this application to be served in an isolated browser for users matching this policy.
     */
    public readonly isolationRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Friendly name of the Access Policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The unique precedence for policies on a single application. Required when using `application_id`.
     */
    public readonly precedence!: pulumi.Output<number | undefined>;
    /**
     * The prompt to display to the user for a justification for accessing the resource. Required when using
     * `purpose_justification_required`.
     */
    public readonly purposeJustificationPrompt!: pulumi.Output<string | undefined>;
    /**
     * Whether to prompt the user for a justification for accessing the resource.
     */
    public readonly purposeJustificationRequired!: pulumi.Output<boolean | undefined>;
    public readonly requires!: pulumi.Output<outputs.ZeroTrustAccessPolicyRequire[] | undefined>;
    /**
     * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.
     */
    public readonly sessionDuration!: pulumi.Output<string | undefined>;
    /**
     * The zone identifier to target for the resource. Conflicts with `account_id`.
     */
    public readonly zoneId!: pulumi.Output<string | undefined>;

    /**
     * Create a ZeroTrustAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustAccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZeroTrustAccessPolicyArgs | ZeroTrustAccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZeroTrustAccessPolicyState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["approvalGroups"] = state ? state.approvalGroups : undefined;
            resourceInputs["approvalRequired"] = state ? state.approvalRequired : undefined;
            resourceInputs["decision"] = state ? state.decision : undefined;
            resourceInputs["excludes"] = state ? state.excludes : undefined;
            resourceInputs["includes"] = state ? state.includes : undefined;
            resourceInputs["isolationRequired"] = state ? state.isolationRequired : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["precedence"] = state ? state.precedence : undefined;
            resourceInputs["purposeJustificationPrompt"] = state ? state.purposeJustificationPrompt : undefined;
            resourceInputs["purposeJustificationRequired"] = state ? state.purposeJustificationRequired : undefined;
            resourceInputs["requires"] = state ? state.requires : undefined;
            resourceInputs["sessionDuration"] = state ? state.sessionDuration : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ZeroTrustAccessPolicyArgs | undefined;
            if ((!args || args.decision === undefined) && !opts.urn) {
                throw new Error("Missing required property 'decision'");
            }
            if ((!args || args.includes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'includes'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["approvalGroups"] = args ? args.approvalGroups : undefined;
            resourceInputs["approvalRequired"] = args ? args.approvalRequired : undefined;
            resourceInputs["decision"] = args ? args.decision : undefined;
            resourceInputs["excludes"] = args ? args.excludes : undefined;
            resourceInputs["includes"] = args ? args.includes : undefined;
            resourceInputs["isolationRequired"] = args ? args.isolationRequired : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["precedence"] = args ? args.precedence : undefined;
            resourceInputs["purposeJustificationPrompt"] = args ? args.purposeJustificationPrompt : undefined;
            resourceInputs["purposeJustificationRequired"] = args ? args.purposeJustificationRequired : undefined;
            resourceInputs["requires"] = args ? args.requires : undefined;
            resourceInputs["sessionDuration"] = args ? args.sessionDuration : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZeroTrustAccessPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZeroTrustAccessPolicy resources.
 */
export interface ZeroTrustAccessPolicyState {
    /**
     * The account identifier to target for the resource. Conflicts with `zone_id`.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The ID of the application the policy is associated with. Required when using `precedence`. **Modifying this attribute
     * will force creation of a new resource.**
     */
    applicationId?: pulumi.Input<string>;
    approvalGroups?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyApprovalGroup>[]>;
    approvalRequired?: pulumi.Input<boolean>;
    /**
     * Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`,
     * `bypass`.
     */
    decision?: pulumi.Input<string>;
    excludes?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyExclude>[]>;
    includes?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyInclude>[]>;
    /**
     * Require this application to be served in an isolated browser for users matching this policy.
     */
    isolationRequired?: pulumi.Input<boolean>;
    /**
     * Friendly name of the Access Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The unique precedence for policies on a single application. Required when using `application_id`.
     */
    precedence?: pulumi.Input<number>;
    /**
     * The prompt to display to the user for a justification for accessing the resource. Required when using
     * `purpose_justification_required`.
     */
    purposeJustificationPrompt?: pulumi.Input<string>;
    /**
     * Whether to prompt the user for a justification for accessing the resource.
     */
    purposeJustificationRequired?: pulumi.Input<boolean>;
    requires?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyRequire>[]>;
    /**
     * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.
     */
    sessionDuration?: pulumi.Input<string>;
    /**
     * The zone identifier to target for the resource. Conflicts with `account_id`.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZeroTrustAccessPolicy resource.
 */
export interface ZeroTrustAccessPolicyArgs {
    /**
     * The account identifier to target for the resource. Conflicts with `zone_id`.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The ID of the application the policy is associated with. Required when using `precedence`. **Modifying this attribute
     * will force creation of a new resource.**
     */
    applicationId?: pulumi.Input<string>;
    approvalGroups?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyApprovalGroup>[]>;
    approvalRequired?: pulumi.Input<boolean>;
    /**
     * Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`,
     * `bypass`.
     */
    decision: pulumi.Input<string>;
    excludes?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyExclude>[]>;
    includes: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyInclude>[]>;
    /**
     * Require this application to be served in an isolated browser for users matching this policy.
     */
    isolationRequired?: pulumi.Input<boolean>;
    /**
     * Friendly name of the Access Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The unique precedence for policies on a single application. Required when using `application_id`.
     */
    precedence?: pulumi.Input<number>;
    /**
     * The prompt to display to the user for a justification for accessing the resource. Required when using
     * `purpose_justification_required`.
     */
    purposeJustificationPrompt?: pulumi.Input<string>;
    /**
     * Whether to prompt the user for a justification for accessing the resource.
     */
    purposeJustificationRequired?: pulumi.Input<boolean>;
    requires?: pulumi.Input<pulumi.Input<inputs.ZeroTrustAccessPolicyRequire>[]>;
    /**
     * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.
     */
    sessionDuration?: pulumi.Input<string>;
    /**
     * The zone identifier to target for the resource. Conflicts with `account_id`.
     */
    zoneId?: pulumi.Input<string>;
}
