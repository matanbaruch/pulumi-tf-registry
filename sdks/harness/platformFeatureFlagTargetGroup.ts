// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PlatformFeatureFlagTargetGroup extends pulumi.CustomResource {
    /**
     * Get an existing PlatformFeatureFlagTargetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformFeatureFlagTargetGroupState, opts?: pulumi.CustomResourceOptions): PlatformFeatureFlagTargetGroup {
        return new PlatformFeatureFlagTargetGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformFeatureFlagTargetGroup:PlatformFeatureFlagTargetGroup';

    /**
     * Returns true if the given object is an instance of PlatformFeatureFlagTargetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformFeatureFlagTargetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformFeatureFlagTargetGroup.__pulumiType;
    }

    /**
     * Account Identifier
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Environment Identifier
     */
    public readonly environment!: pulumi.Output<string>;
    /**
     * A list of targets to exclude from the target group
     */
    public readonly excludeds!: pulumi.Output<string[]>;
    /**
     * The unique identifier of the feature flag target group.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * A list of targets to include in the target group
     */
    public readonly includeds!: pulumi.Output<string[]>;
    /**
     * The name of the feature flag target group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Organization Identifier
     */
    public readonly orgId!: pulumi.Output<string>;
    /**
     * Project Identifier
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The list of rules used to include targets in the target group.
     */
    public readonly rules!: pulumi.Output<outputs.PlatformFeatureFlagTargetGroupRule[] | undefined>;

    /**
     * Create a PlatformFeatureFlagTargetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformFeatureFlagTargetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformFeatureFlagTargetGroupArgs | PlatformFeatureFlagTargetGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformFeatureFlagTargetGroupState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["excludeds"] = state ? state.excludeds : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["includeds"] = state ? state.includeds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as PlatformFeatureFlagTargetGroupArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.environment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environment'");
            }
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["excludeds"] = args ? args.excludeds : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["includeds"] = args ? args.includeds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformFeatureFlagTargetGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformFeatureFlagTargetGroup resources.
 */
export interface PlatformFeatureFlagTargetGroupState {
    /**
     * Account Identifier
     */
    accountId?: pulumi.Input<string>;
    /**
     * Environment Identifier
     */
    environment?: pulumi.Input<string>;
    /**
     * A list of targets to exclude from the target group
     */
    excludeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique identifier of the feature flag target group.
     */
    identifier?: pulumi.Input<string>;
    /**
     * A list of targets to include in the target group
     */
    includeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the feature flag target group.
     */
    name?: pulumi.Input<string>;
    /**
     * Organization Identifier
     */
    orgId?: pulumi.Input<string>;
    /**
     * Project Identifier
     */
    projectId?: pulumi.Input<string>;
    /**
     * The list of rules used to include targets in the target group.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.PlatformFeatureFlagTargetGroupRule>[]>;
}

/**
 * The set of arguments for constructing a PlatformFeatureFlagTargetGroup resource.
 */
export interface PlatformFeatureFlagTargetGroupArgs {
    /**
     * Account Identifier
     */
    accountId: pulumi.Input<string>;
    /**
     * Environment Identifier
     */
    environment: pulumi.Input<string>;
    /**
     * A list of targets to exclude from the target group
     */
    excludeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique identifier of the feature flag target group.
     */
    identifier: pulumi.Input<string>;
    /**
     * A list of targets to include in the target group
     */
    includeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the feature flag target group.
     */
    name?: pulumi.Input<string>;
    /**
     * Organization Identifier
     */
    orgId: pulumi.Input<string>;
    /**
     * Project Identifier
     */
    projectId: pulumi.Input<string>;
    /**
     * The list of rules used to include targets in the target group.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.PlatformFeatureFlagTargetGroupRule>[]>;
}
