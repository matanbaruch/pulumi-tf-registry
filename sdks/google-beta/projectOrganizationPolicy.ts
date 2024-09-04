// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ProjectOrganizationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ProjectOrganizationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectOrganizationPolicyState, opts?: pulumi.CustomResourceOptions): ProjectOrganizationPolicy {
        return new ProjectOrganizationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/projectOrganizationPolicy:ProjectOrganizationPolicy';

    /**
     * Returns true if the given object is an instance of ProjectOrganizationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProjectOrganizationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProjectOrganizationPolicy.__pulumiType;
    }

    /**
     * A boolean policy is a constraint that is either enforced or not.
     */
    public readonly booleanPolicy!: pulumi.Output<outputs.ProjectOrganizationPolicyBooleanPolicy | undefined>;
    /**
     * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
     */
    public readonly constraint!: pulumi.Output<string>;
    /**
     * The etag of the organization policy. etag is used for optimistic concurrency control as a way to help prevent
     * simultaneous updates of a policy from overwriting each other.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A policy that can define specific values that are allowed or denied for the given constraint. It can also be used to
     * allow or deny all values.
     */
    public readonly listPolicy!: pulumi.Output<outputs.ProjectOrganizationPolicyListPolicy | undefined>;
    /**
     * The project ID.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * A restore policy is a constraint to restore the default policy.
     */
    public readonly restorePolicy!: pulumi.Output<outputs.ProjectOrganizationPolicyRestorePolicy | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ProjectOrganizationPolicyTimeouts | undefined>;
    /**
     * The timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds, representing when the variable was last updated.
     * Example: "2016-10-09T12:33:37.578138407Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Version of the Policy. Default version is 0.
     */
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a ProjectOrganizationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectOrganizationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectOrganizationPolicyArgs | ProjectOrganizationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectOrganizationPolicyState | undefined;
            resourceInputs["booleanPolicy"] = state ? state.booleanPolicy : undefined;
            resourceInputs["constraint"] = state ? state.constraint : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["listPolicy"] = state ? state.listPolicy : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["restorePolicy"] = state ? state.restorePolicy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ProjectOrganizationPolicyArgs | undefined;
            if ((!args || args.constraint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'constraint'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            resourceInputs["booleanPolicy"] = args ? args.booleanPolicy : undefined;
            resourceInputs["constraint"] = args ? args.constraint : undefined;
            resourceInputs["listPolicy"] = args ? args.listPolicy : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["restorePolicy"] = args ? args.restorePolicy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProjectOrganizationPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProjectOrganizationPolicy resources.
 */
export interface ProjectOrganizationPolicyState {
    /**
     * A boolean policy is a constraint that is either enforced or not.
     */
    booleanPolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyBooleanPolicy>;
    /**
     * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
     */
    constraint?: pulumi.Input<string>;
    /**
     * The etag of the organization policy. etag is used for optimistic concurrency control as a way to help prevent
     * simultaneous updates of a policy from overwriting each other.
     */
    etag?: pulumi.Input<string>;
    /**
     * A policy that can define specific values that are allowed or denied for the given constraint. It can also be used to
     * allow or deny all values.
     */
    listPolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyListPolicy>;
    /**
     * The project ID.
     */
    project?: pulumi.Input<string>;
    /**
     * A restore policy is a constraint to restore the default policy.
     */
    restorePolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyRestorePolicy>;
    timeouts?: pulumi.Input<inputs.ProjectOrganizationPolicyTimeouts>;
    /**
     * The timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds, representing when the variable was last updated.
     * Example: "2016-10-09T12:33:37.578138407Z".
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Version of the Policy. Default version is 0.
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ProjectOrganizationPolicy resource.
 */
export interface ProjectOrganizationPolicyArgs {
    /**
     * A boolean policy is a constraint that is either enforced or not.
     */
    booleanPolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyBooleanPolicy>;
    /**
     * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
     */
    constraint: pulumi.Input<string>;
    /**
     * A policy that can define specific values that are allowed or denied for the given constraint. It can also be used to
     * allow or deny all values.
     */
    listPolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyListPolicy>;
    /**
     * The project ID.
     */
    project: pulumi.Input<string>;
    /**
     * A restore policy is a constraint to restore the default policy.
     */
    restorePolicy?: pulumi.Input<inputs.ProjectOrganizationPolicyRestorePolicy>;
    timeouts?: pulumi.Input<inputs.ProjectOrganizationPolicyTimeouts>;
    /**
     * Version of the Policy. Default version is 0.
     */
    version?: pulumi.Input<number>;
}
